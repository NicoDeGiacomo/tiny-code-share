"use client"

import {Editor} from "@monaco-editor/react";
import LZString from "lz-string";
import {ChangeEvent, useState, useEffect} from "react";
import hljs from "highlight.js";
import {cn} from "@/app/utils";
import {useDebouncedCallback} from "use-debounce";


const SEARCH_PARAM_CODE = "code"
const SEARCH_PARAM_LANG = "lang"

const DEFAULT_LANGUAGE = "javascript"

const VISIBLE_TIME = 3000;
const LANGUAGE_DETECTION_DEBOUNCE = 600;
const MIN_CHARS_FOR_DETECTION = 10;

export default function CodeDetector() {
  
  const getHashParams = () => {
    const hash = window.location.hash.substring(1);
    return new URLSearchParams(hash);
  };

  const handleSetOnChangeCodeCallback = (isEditable: boolean, autoDetect: boolean): ((value?: string) => void) => {
    if (isEditable && autoDetect) {
      return handleCodeChangeEditableAutoDetect;
    } else if (isEditable && !autoDetect) {
      return handleCodeChangeEditableNotAutoDetect;
    } else if (!isEditable && autoDetect) {
      return handleCodeChangeNotEditableAutoDetect;
    } else {
      return handleCodeChangeNotEditableNotAutoDetect;
    }
  }

  const detectLanguage = useDebouncedCallback((codeValue: string) => {
    if (codeValue.length >= MIN_CHARS_FOR_DETECTION) {
      const detectedLang = hljs.highlightAuto(codeValue).language || DEFAULT_LANGUAGE;
      setLanguage(detectedLang);
    }
  }, LANGUAGE_DETECTION_DEBOUNCE);

  const handleCodeChangeEditableAutoDetect = (value?: string) => {
    const codeValue = value || ''
    setCode(codeValue);
    detectLanguage(codeValue);
  };

  const handleCodeChangeEditableNotAutoDetect = (value?: string) => {
    setCode(value || '');
  };

  const handleCodeChangeNotEditableNotAutoDetect = () => {
    // Do nothing
  };

  const handleCodeChangeNotEditableAutoDetect = () => {
    // Do nothing
  };

  const [linkCopied, setLinkCopied] = useState(false);

  const searchParams = getHashParams();
  const codeParam = searchParams.get(SEARCH_PARAM_CODE);
  const [code, setCode] = useState(LZString.decompressFromEncodedURIComponent(codeParam ?? ''));
  // Automatically determine initial toggle states based on code presence
  const [isEditable, setIsEditable] = useState(codeParam === null);
  const [autoDetect, setAutoDetect] = useState(codeParam === null);
  const [language, setLanguage] = useState(searchParams.get(SEARCH_PARAM_LANG) || DEFAULT_LANGUAGE);

  const [onCodeChangeCallback, setOnChangeCodeCallback] = useState<(value?: string) => void>(() => handleSetOnChangeCodeCallback(isEditable, autoDetect));
  
  // Initial language detection if code is present and autoDetect is enabled
  useEffect(() => {
    if (code && autoDetect && code.length >= MIN_CHARS_FOR_DETECTION) {
      detectLanguage(code);
    }
  }, [code, autoDetect, detectLanguage]);

  const createShareableURL = (pSearchParams: URLSearchParams ) => {
    return `${window.location.origin}#${pSearchParams}`
  }

  const showLinkCopied = useDebouncedCallback(() => {
    setLinkCopied(false)
  }, VISIBLE_TIME);

  const handleShare = () => {
      const compressedCode = LZString.compressToEncodedURIComponent(code);

      const searchParams = getHashParams();
      searchParams.set(SEARCH_PARAM_CODE, compressedCode)
      searchParams.set(SEARCH_PARAM_LANG, language)

      navigator.clipboard.writeText(createShareableURL(searchParams))
          .then(() => {
              setLinkCopied(true)
              showLinkCopied()
            }
          );
  };

  const toggleEditable = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEditable(event.target.checked)
    setOnChangeCodeCallback(() => handleSetOnChangeCodeCallback(event.target.checked, autoDetect));
  };

  const toggleAutoDetect = (event: ChangeEvent<HTMLInputElement>) => {
    setAutoDetect(event.target.checked);
    setOnChangeCodeCallback(() => handleSetOnChangeCodeCallback(isEditable, event.target.checked));
  };

  const MostUsedLangs = () => {
    return <>                
      <option>javascript</option>
      <option>python</option>
      <option>java</option>
    </>
  }

  return (
    <>
      <div className="flex flex-col items-end relative">
          <div className="flex items-center space-x-4 mr-1">
              <label className="inline-flex items-center cursor-pointer border border-black p-1">
                  <input type="checkbox" onChange={toggleEditable} checked={isEditable} className="sr-only peer"/>
                  <div
                    className="relative w-9 h-5 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium">Edit</span>
              </label>
              <label className="inline-flex items-center cursor-pointer border border-black p-1">
                  <input type="checkbox" onChange={toggleAutoDetect} checked={autoDetect} className="sr-only peer"/>
                  <div
                    className="relative w-9 h-5 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium">Detect</span>
              </label>
              <select className={cn("border border-black p-1 bg-gray-100 disabled:text-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed")} 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              disabled={autoDetect}>
                <MostUsedLangs/>
                {hljs.listLanguages().map(
                  (lang) => (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>
                  )
                )}
              </select>
          </div>
          <div className="w-full h-full p-1">
              <Editor
                height="80vh"
                theme="vs-dark"
                onChange={onCodeChangeCallback}
                options={{
                  readOnly: !isEditable,
                  minimap: { enabled: false },
                  folding: false,
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  automaticLayout: false,
                  scrollBeyondLastLine: false,
                  renderWhitespace: 'none',
                  renderLineHighlight: 'line',
                  formatOnPaste: false,
                  guides: { indentation: false },
                  smoothScrolling: true
                }}
                language={language}
                value={code}
              />
          </div>
          <div className="flex items-center gap-2 m-2">
              <p className={cn('text-green-600', {'hidden': !linkCopied})}>Link copied to clipboard!</p>
              <button
                onClick={handleShare}
                className="h-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                  Generate Code Link
              </button>
          </div>

      </div>
    </>
  );
}
