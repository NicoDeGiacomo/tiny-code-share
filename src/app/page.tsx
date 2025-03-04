"use client"

import {Editor} from "@monaco-editor/react";
import LZString from "lz-string";
import {useState} from "react";
import hljs from "highlight.js";

export default function TinyCodeShare() {
    const [code, setCode] = useState('');
    const [isEditable, setIsEditable] = useState(true);
    const [autoDetect, setAutoDetect] = useState(true);
    const [language, setLanguage] = useState('javascript');

    const handleShare = () => {
        const compressedCode = LZString.compressToEncodedURIComponent(code);
        const shareableURL = `${window.location.origin}#code=${compressedCode}&lang=${language}`;
        navigator.clipboard.writeText(shareableURL)
            .then(() =>
                console.log('Copied')
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

    const toggleEditable = () => {
        setIsEditable(!isEditable);
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
                        <input type="checkbox" onChange={toggleEditable} className="sr-only peer"/>
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

                <div className="">
                    <button
                        onClick={handleShare}
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        Get Link
                    </button>
                </div>

            </div>

            <div>
                <hr className="border-black"/>
                Github, Linkedin
            </div>

        </>
    );
}
