'use client';

import { Editor } from '@monaco-editor/react';
import LZString from 'lz-string';
import {
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useReducer,
} from 'react';
import hljs from 'highlight.js';
import { cn } from '@/app/utils';
import { useDebouncedCallback } from 'use-debounce';
import AboutModal from '@/app/ui/about-modal';
import SocialModal from '@/app/ui/social-modal';

const SEARCH_PARAM_CODE = 'code';
const SEARCH_PARAM_LANG = 'lang';

const DEFAULT_LANGUAGE = 'javascript';

const VISIBLE_TIME = 3000;
const LANGUAGE_DETECTION_DEBOUNCE = 600;
const MIN_CHARS_FOR_DETECTION = 10;
const LANGUAGE_CACHE_SIZE = 10;
const LANGUAGE_SKIP_SIZE = 10;

export default function CodeDetector() {
  const getHashParams = useCallback(() => {
    const hash = window.location.hash.substring(1);
    return new URLSearchParams(hash);
  }, []);

  const [linkCopied, setLinkCopied] = useState(false);

  const searchParams = useMemo(() => getHashParams(), [getHashParams]);
  const codeParam = useMemo(
    () => searchParams.get(SEARCH_PARAM_CODE),
    [searchParams]
  );

  // Define editor state reducer
  type EditorState = {
    code: string;
    isEditable: boolean;
    autoDetect: boolean;
    language: string;
  };

  type EditorAction =
    | { type: 'SET_CODE'; payload: string }
    | { type: 'SET_EDITABLE'; payload: boolean }
    | { type: 'SET_AUTO_DETECT'; payload: boolean }
    | { type: 'SET_LANGUAGE'; payload: string };

  const editorReducer = (
    state: EditorState,
    action: EditorAction
  ): EditorState => {
    switch (action.type) {
      case 'SET_CODE':
        return { ...state, code: action.payload };
      case 'SET_EDITABLE':
        return { ...state, isEditable: action.payload };
      case 'SET_AUTO_DETECT':
        return { ...state, autoDetect: action.payload };
      case 'SET_LANGUAGE':
        return { ...state, language: action.payload };
      default:
        return state;
    }
  };

  // Initialize editor state
  const initialEditorState: EditorState = {
    code: LZString.decompressFromEncodedURIComponent(codeParam ?? ''),
    isEditable: codeParam === null,
    autoDetect: codeParam === null,
    language: searchParams.get(SEARCH_PARAM_LANG) || DEFAULT_LANGUAGE,
  };

  const [editorState, dispatchEditorState] = useReducer(
    editorReducer,
    initialEditorState
  );
  const { code, isEditable, autoDetect, language } = editorState;

  // Create setter functions that use the reducer
  const setCode = useCallback((newCode: string) => {
    dispatchEditorState({ type: 'SET_CODE', payload: newCode });
  }, []);

  const setIsEditable = useCallback((value: boolean) => {
    dispatchEditorState({ type: 'SET_EDITABLE', payload: value });
  }, []);

  const setAutoDetect = useCallback((value: boolean) => {
    dispatchEditorState({ type: 'SET_AUTO_DETECT', payload: value });
  }, []);

  const setLanguage = useCallback((value: string) => {
    dispatchEditorState({ type: 'SET_LANGUAGE', payload: value });
  }, []);

  // Language detection optimization state
  const [languageDetectionCache, setLanguageDetectionCache] = useState<{
    detectedLanguage: string;
    consecutiveCount: number;
    skipCount: number;
  }>({
    detectedLanguage: '',
    consecutiveCount: 0,
    skipCount: 0,
  });

  const detectLanguage = useDebouncedCallback((codeValue: string) => {
    if (codeValue.length >= MIN_CHARS_FOR_DETECTION) {
      if (languageDetectionCache.skipCount > 0) {
        setLanguageDetectionCache(prev => ({
          ...prev,
          skipCount: prev.skipCount - 1,
        }));
        
        if (languageDetectionCache.detectedLanguage) {
          setLanguage(languageDetectionCache.detectedLanguage);
        }
        return;
      }

      const detectedLang =
        hljs.highlightAuto(codeValue).language || DEFAULT_LANGUAGE;
      
      setLanguage(detectedLang);
      
      setLanguageDetectionCache(prev => {
        if (prev.detectedLanguage === detectedLang) {
          const newCount = prev.consecutiveCount + 1;
          
          if (newCount >= LANGUAGE_CACHE_SIZE) {
            return {
              detectedLanguage: detectedLang,
              consecutiveCount: newCount,
              skipCount: LANGUAGE_SKIP_SIZE,
            };
          }
          
          return {
            detectedLanguage: detectedLang,
            consecutiveCount: newCount,
            skipCount: 0,
          };
        } else {
          return {
            detectedLanguage: detectedLang,
            consecutiveCount: 1,
            skipCount: 0,
          };
        }
      });
    }
  }, LANGUAGE_DETECTION_DEBOUNCE);

  // Define handlers
  const handleCodeChangeEditableAutoDetect = useCallback(
    (value?: string) => {
      const codeValue = value || '';
      setCode(codeValue);
      detectLanguage(codeValue);
    },
    [detectLanguage, setCode]
  );

  const handleCodeChangeEditableNotAutoDetect = useCallback(
    (value?: string) => {
      setCode(value || '');
    },
    [setCode]
  );

  const handleCodeChangeNotEditableNotAutoDetect = useCallback(() => {
    // Do nothing
  }, []);

  const handleCodeChangeNotEditableAutoDetect = useCallback(() => {
    // Do nothing
  }, []);

  const handleSetOnChangeCodeCallback = useCallback(
    (isEditable: boolean, autoDetect: boolean): ((value?: string) => void) => {
      if (isEditable && autoDetect) {
        return handleCodeChangeEditableAutoDetect;
      } else if (isEditable && !autoDetect) {
        return handleCodeChangeEditableNotAutoDetect;
      } else if (!isEditable && autoDetect) {
        return handleCodeChangeNotEditableAutoDetect;
      } else {
        return handleCodeChangeNotEditableNotAutoDetect;
      }
    },
    [
      handleCodeChangeEditableAutoDetect,
      handleCodeChangeEditableNotAutoDetect,
      handleCodeChangeNotEditableAutoDetect,
      handleCodeChangeNotEditableNotAutoDetect,
    ]
  );

  // Moved up to avoid circular dependencies

  // Moved up to avoid circular dependencies

  const [onCodeChangeCallback, setOnChangeCodeCallback] = useState<
    (value?: string) => void
  >(() => handleSetOnChangeCodeCallback(isEditable, autoDetect));

  // Initial language detection if code is present and autoDetect is enabled
  // Initial language detection if code is present and autoDetect is enabled
  useEffect(() => {
    if (code && autoDetect && code.length >= MIN_CHARS_FOR_DETECTION) {
      setLanguageDetectionCache({
        detectedLanguage: '',
        consecutiveCount: 0,
        skipCount: 0,
      });
      detectLanguage(code);
    }
  }, [code, autoDetect, detectLanguage]);

  // Make sure editor has proper size initially
  useEffect(() => {
    // Force layout recalculation after a short delay
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const createShareableURL = useCallback((pSearchParams: URLSearchParams) => {
    return `${window.location.origin}#${pSearchParams}`;
  }, []);

  const showLinkCopied = useDebouncedCallback(() => {
    setLinkCopied(false);
  }, VISIBLE_TIME);

  // Fallback clipboard function for mobile browsers
  const fallbackCopyToClipboard = useCallback((text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      document.body.removeChild(textArea);
      console.error('Fallback clipboard copy failed:', err);
      return false;
    }
  }, []);

  const handleShare = useCallback(() => {
    const compressedCode = LZString.compressToEncodedURIComponent(code);

    const searchParams = getHashParams();
    searchParams.set(SEARCH_PARAM_CODE, compressedCode);
    searchParams.set(SEARCH_PARAM_LANG, language);

    const shareableURL = createShareableURL(searchParams);

    // Try modern clipboard API first, fallback to legacy method
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareableURL)
        .then(() => {
          setLinkCopied(true);
          showLinkCopied();
        })
        .catch((err) => {
          console.warn('Modern clipboard API failed, trying fallback:', err);
          const success = fallbackCopyToClipboard(shareableURL);
          if (success) {
            setLinkCopied(true);
            showLinkCopied();
          } else {
            // If all clipboard methods fail, show the URL to the user
            alert(`Copy this link:\n${shareableURL}`);
          }
        });
    } else {
      // Use fallback method directly if modern API is not available
      const success = fallbackCopyToClipboard(shareableURL);
      if (success) {
        setLinkCopied(true);
        showLinkCopied();
      } else {
        // If fallback also fails, show the URL to the user
        alert(`Copy this link:\n${shareableURL}`);
      }
    }
  }, [
    code,
    language,
    getHashParams,
    createShareableURL,
    setLinkCopied,
    showLinkCopied,
    fallbackCopyToClipboard,
  ]);

  const toggleEditable = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setIsEditable(event.target.checked);
      setOnChangeCodeCallback(() =>
        handleSetOnChangeCodeCallback(event.target.checked, autoDetect)
      );
    },
    [
      autoDetect,
      handleSetOnChangeCodeCallback,
      setIsEditable,
      setOnChangeCodeCallback,
    ]
  );

  const toggleAutoDetect = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAutoDetect(event.target.checked);
      setOnChangeCodeCallback(() =>
        handleSetOnChangeCodeCallback(isEditable, event.target.checked)
      );
      
      // Reset language detection cache when toggling auto-detect
      setLanguageDetectionCache({
        detectedLanguage: '',
        consecutiveCount: 0,
        skipCount: 0,
      });
    },
    [
      isEditable,
      handleSetOnChangeCodeCallback,
      setAutoDetect,
      setOnChangeCodeCallback,
    ]
  );

  const mostUsedLanguages = useMemo(
    () => (
      <>
        <option>javascript</option>
        <option>python</option>
        <option>java</option>
      </>
    ),
    []
  );

  const languageOptions = useMemo(
    () =>
      hljs.listLanguages().map(lang => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      )),
    []
  );

  return (
    <>
      <div className="flex flex-col relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full px-1 gap-2 sm:gap-0">
          <div className="flex-shrink-0 order-2 sm:order-1">
            <AboutModal />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 order-1 sm:order-2">
            <label
              className="inline-flex items-center cursor-pointer border border-black p-2 sm:p-1 min-h-[44px] sm:min-h-0"
              htmlFor="edit-toggle"
            >
              <input
                id="edit-toggle"
                name="edit-toggle"
                aria-label="Toggle edit mode"
                type="checkbox"
                onChange={toggleEditable}
                checked={isEditable}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 sm:w-9 sm:h-5 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 sm:after:h-4 sm:after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-base sm:text-sm font-medium">Edit</span>
            </label>
            <label
              className="inline-flex items-center cursor-pointer border border-black p-2 sm:p-1 min-h-[44px] sm:min-h-0"
              htmlFor="detect-toggle"
            >
              <input
                id="detect-toggle"
                name="detect-toggle"
                aria-label="Toggle language detection"
                type="checkbox"
                onChange={toggleAutoDetect}
                checked={autoDetect}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 sm:w-9 sm:h-5 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 sm:after:h-4 sm:after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-base sm:text-sm font-medium">Detect</span>
            </label>
            <select
              id="language-selector"
              name="language-selector"
              aria-label="Select programming language"
              className={cn(
                'border border-black p-2 sm:p-1 bg-gray-100 disabled:text-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-base sm:text-sm min-h-[44px] sm:min-h-0 w-full sm:w-auto'
              )}
              value={language}
              onChange={e => {
                setLanguage(e.target.value);
                // Reset language detection cache when manually changing language
                setLanguageDetectionCache({
                  detectedLanguage: '',
                  consecutiveCount: 0,
                  skipCount: 0,
                });
              }}
              disabled={autoDetect}
            >
              {mostUsedLanguages}
              {languageOptions}
            </select>
          </div>
        </div>
        <div className="w-full h-full p-1">
          <Editor
            height="calc(100vh - 270px)"
            theme="vs-dark"
            onChange={onCodeChangeCallback}
            options={{
              readOnly: !isEditable,
              minimap: { enabled: false },
              folding: false,
              lineNumbers: 'on',
              wordWrap: 'on',
              automaticLayout: true,
              scrollBeyondLastLine: false,
              renderWhitespace: 'none',
              renderLineHighlight: 'line',
              formatOnPaste: false,
              guides: { indentation: false },
              smoothScrolling: false,
              scrollbar: {
                alwaysConsumeMouseWheel: false,
              },
              quickSuggestions: false,
              suggestOnTriggerCharacters: false,
              parameterHints: { enabled: false },
              suggest: {
                showWords: false,
                showSnippets: false,
                showMethods: false,
                showFunctions: false,
              },
              hover: { enabled: false },
            }}
            language={language}
            value={code}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 m-2">
          <div className="order-2 sm:order-1">
            <SocialModal />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 order-1 sm:order-2">
            <p className={cn('text-green-600 text-center sm:text-left', { hidden: !linkCopied })}>
              Link copied to clipboard!
            </p>
            <button
              onClick={handleShare}
              className="h-12 sm:h-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-base sm:text-sm px-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full sm:w-auto"
            >
              Generate Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
