"use client"

import {Editor} from "@monaco-editor/react";
import LZString from "lz-string";
import {ChangeEvent, useState} from "react";
import hljs from "highlight.js";
import {cn} from "@/app/utils";
import {useDebouncedCallback} from "use-debounce";


const SEARCH_PARAM_IS_EDITABLE = "isEditable"
const SEARCH_PARAM_AUTO_DETECT = "autoDetect"
const SEARCH_PARAM_CODE = "code"
const SEARCH_PARAM_LANG = "lang"

const DEFAULT_LANGUAGE = "javascript"

const VISIBLE_TIME = 3000;

export default function CodeDetector() {
  
  const getHashParams = () => {
    const hash = window.location.hash.substring(1);
    return new URLSearchParams(hash);
  };

  // TODO: para evitar dos ifs directamente llamar a una funcion distinta segun el estado
  // usar una maquina de estado finito que determina que funcion llamar cada vez que se cambia
  // alguna config tomando cada combinacion posibles
  // ejemplo: isEditable && autoDetect: handleCodeChangeEditableDetect
  const defaultHandleCode = (value?: string) => {
    console.log('defaultHandleCode')
    if (isEditable) {
      const codeValue = value || ''
      setCode(codeValue);
      if (autoDetect) {
        const detectedLang = hljs.highlightAuto(codeValue).language || DEFAULT_LANGUAGE;
        setLanguage(detectedLang);
      }
    }
  };

  const handleCodeChangeEditableAutoDetect = (value?: string) => {
    console.log('handleCodeChangeEditableAutoDetect')
    const codeValue = value || ''
    setCode(codeValue);
    const detectedLang = hljs.highlightAuto(codeValue).language || DEFAULT_LANGUAGE;
    setLanguage(detectedLang);
  };

  const handleCodeChangeEditableNotAutoDetect = (value?: string) => {
    console.log('handleCodeChangeEditableNotAutoDetect')
    setCode(value || '');
  };

  const handleCodeChangeNotEditableNotAutoDetect = (value?: string) => {
    console.log('handleCodeChangeNotEditableNotAutoDetect')
    // Do nothing
  };

  const handleCodeChangeNotEditableAutoDetect = (value?: string) => {
    console.log('handleCodeChangeNotEditableAutoDetect')
    // Do nothing
  };

  const [linkCopied, setLinkCopied] = useState(false);

  const searchParams = getHashParams();
  const [code, setCode] = useState(LZString.decompressFromEncodedURIComponent(searchParams.get(SEARCH_PARAM_CODE) ?? ''));
  const [isEditable, setIsEditable] = useState(searchParams.get(SEARCH_PARAM_IS_EDITABLE) === "true");
  const [autoDetect, setAutoDetect] = useState(searchParams.get(SEARCH_PARAM_AUTO_DETECT) === "true");
  const [language, setLanguage] = useState(searchParams.get(SEARCH_PARAM_LANG) || DEFAULT_LANGUAGE);

  const [onCodeChangeCallback, setOnChangeCodeCallback] = useState<(value?: string) => void>(() => defaultHandleCode);

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
      searchParams.set(SEARCH_PARAM_IS_EDITABLE, isEditable.toString())
      searchParams.set(SEARCH_PARAM_AUTO_DETECT, autoDetect.toString())

      navigator.clipboard.writeText(createShareableURL(searchParams))
          .then(() => {
              console.log('Copied')
              setLinkCopied(true)
              showLinkCopied()
            }
          );
  };

  const toggleEditable = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEditable(event.target.checked)
    if (event.target.checked && autoDetect) {
      setOnChangeCodeCallback(() => handleCodeChangeEditableAutoDetect)
    } else if (event.target.checked && !autoDetect) {
      setOnChangeCodeCallback(() => handleCodeChangeEditableNotAutoDetect)
    } else if (!event.target.checked && autoDetect) {
      setOnChangeCodeCallback(() => handleCodeChangeNotEditableAutoDetect)
    } else if (!event.target.checked && !autoDetect) {
      setOnChangeCodeCallback(() => handleCodeChangeNotEditableNotAutoDetect)
    }
  };

  const toggleAutoDetect = (event: ChangeEvent<HTMLInputElement>) => {
    setAutoDetect(event.target.checked);
    if (event.target.checked && isEditable) {
      setOnChangeCodeCallback(() => handleCodeChangeEditableAutoDetect)
    } else if (event.target.checked && !isEditable) {
      setOnChangeCodeCallback(() => handleCodeChangeNotEditableAutoDetect)
    } else if (!event.target.checked && isEditable) {
      setOnChangeCodeCallback(() => handleCodeChangeEditableNotAutoDetect)
    } else if (!event.target.checked && !isEditable) {
      setOnChangeCodeCallback(() => handleCodeChangeNotEditableNotAutoDetect)
    }
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
                    <input type="checkbox" onChange={toggleAutoDetect} className="sr-only peer"/>
                    <div
                      className="relative w-9 h-5 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium">Detect</span>
                </label>
                <select className={cn("border border-black p-1 bg-gray-100 disabled:text-gray-600 disabled:bg-gray-300")} 
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
                  options={{readOnly: !isEditable}}
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
