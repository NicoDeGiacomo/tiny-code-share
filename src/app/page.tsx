"use client"

import {Editor} from "@monaco-editor/react";
import LZString from "lz-string";
import {useState} from "react";
import hljs from "highlight.js";
import {cn} from "@/app/utils";
import {useDebouncedCallback} from "use-debounce";

// TODO: Volver todo un client component, por alguna razon el window.location lo tira desde el server
// cosa que no tiene sentido por que estamos usando "use client" y deberia ser todo en el cliente.

export default function TinyCodeShare() {
    const [autoDetect, setAutoDetect] = useState(true);
    const [language, setLanguage] = useState('javascript');
    const [linkCopied, setLinkCopied] = useState(false);

    const getHashParams = () => {
        const hash = window.location.hash.substring(1);
        return new URLSearchParams(hash);
    };

    const searchParams = getHashParams();
    const compressedCode = searchParams.get("code") ?? '';
    const [code, setCode] = useState(LZString.decompressFromEncodedURIComponent(compressedCode));
    const [isEditable, setIsEditable] = useState(searchParams.get("isEditable") ? searchParams.get("isEditable") === "true" : false);

    const VISIBLE_TIME = 3000;
    const handleLinkCopied = useDebouncedCallback(() => {
        setLinkCopied(false)
    }, VISIBLE_TIME);

    const handleShare = () => {
        const compressedCode = LZString.compressToEncodedURIComponent(code);

        const searchParams = new URLSearchParams(window.location.hash.substring(1));
        searchParams.set("code", compressedCode)
        searchParams.set("lang", language)
        searchParams.set("isEditable", isEditable.toString())

        const shareableURL = `${window.location.origin}#${searchParams}`;
        navigator.clipboard.writeText(shareableURL)
            .then(() => {
                console.log('Copied')
                setLinkCopied(true)
                handleLinkCopied()
              }
            );
    };

    const handleCodeChange = (value?: string) => {
        if (isEditable) {
            setCode(value || '');
            if (autoDetect) {
                const detectedLang = hljs.highlightAuto(value || '').language || 'javascript';
                setLanguage(detectedLang);
            }
        }
    };

    const toggleEditable = (checked: boolean) => {
        setIsEditable(checked)
    };

    const toggleAutoDetect = () => {
        setAutoDetect(!autoDetect);
        if (!autoDetect) {
            const detectedLang = hljs.highlightAuto(code).language || 'javascript';
            setLanguage(detectedLang);
        }
    };

    return (
      <>
          <h1 className="text-5xl font-bold mt-1 text-center">TINY CODE SHARE</h1>
          <hr className="border-black my-1"/>
          <div className="flex flex-col items-end relative">
              <div className="flex items-center space-x-4 mr-1">
                  <label className="inline-flex items-center cursor-pointer border border-black p-1">
                      <input type="checkbox" onChange={() => toggleEditable(!isEditable)} checked={isEditable} className="sr-only peer"/>
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

                  <select className="border border-black p-1 bg-gray-100" value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          disabled={autoDetect}>
                      <option>javascript</option>
                      <option>python</option>
                      <option>java</option>
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
                    onChange={handleCodeChange}
                    options={{readOnly: !isEditable}}
                    language={language}
                    value={code}
                  />
              </div>

              <div className="flex items-center gap-2 m-2">
                  <p className={cn('text-green-500', {'hidden': !linkCopied})}>Link copied!</p>
                  <button
                    onClick={handleShare}
                    className="h-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                      Get Link
                  </button>
              </div>

          </div>
          <hr className="border-black"/>
          <div className="flex p-1 gap-2">
              <p>Github</p>
              <p>Linkedin</p>
          </div>

      </>
    );
}
