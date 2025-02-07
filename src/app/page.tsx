"use client"

import {useState, useEffect} from 'react';
import hljs from 'highlight.js';
import {Editor} from '@monaco-editor/react';
import LZString from 'lz-string';

export default function CodePing() {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [autoDetect, setAutoDetect] = useState(true);
    const [isEditable, setIsEditable] = useState(true);

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const encodedSnippet = hashParams.get('code');
        const langParam = hashParams.get('lang');

        if (encodedSnippet) {
            const decompressedCode = LZString.decompressFromEncodedURIComponent(encodedSnippet);
            if (decompressedCode) {
                setCode(decompressedCode);
            }
            setAutoDetect(false);
            setIsEditable(false);
        }

        if (langParam) {
            setLanguage(langParam);
        }
    }, []);

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

    const toggleAutoDetect = () => {
        setAutoDetect(!autoDetect);
        if (!autoDetect) {
            const detectedLang = hljs.highlightAuto(code).language || 'javascript';
            setLanguage(detectedLang);
        }
    };

    const toggleEditable = () => {
        setIsEditable(!isEditable);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-black">CodePing</h1>
            <div className="w-full max-w-4xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        disabled={autoDetect}
                        className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                    >
                        {hljs.listLanguages().map(
                            (lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            )
                        )}
                    </select>
                    <label className="ml-4 flex items-center text-black">
                        <input
                            type="checkbox"
                            checked={autoDetect}
                            onChange={toggleAutoDetect}
                            className="mr-2"
                        />
                        Auto-detect
                    </label>
                    <label className="ml-4 flex items-center text-black">
                        <input
                            type="checkbox"
                            checked={isEditable}
                            onChange={toggleEditable}
                            className="mr-2"
                        />
                        Editable
                    </label>
                </div>
                <Editor
                    height="60vh"
                    language={language}
                    value={code}
                    onChange={handleCodeChange}
                    theme="vs-dark"
                    className="rounded-lg overflow-hidden border border-gray-300"
                    options={{readOnly: !isEditable}}
                />
                <button
                    onClick={handleShare}
                    className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-xl text-lg font-medium hover:bg-indigo-700 transition"
                >
                    Share Code
                </button>
            </div>
        </div>
    );
}
