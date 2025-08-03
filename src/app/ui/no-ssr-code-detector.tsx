"use client"

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic import without redundant loading screen
const CodeDetector = dynamic(
  () => import('../ui/code-detector').then(mod => ({ default: mod.default })),
  { 
    ssr: false
  }
);

// Separate loading component for better control and performance
function LoadingPlaceholder() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center bg-gray-800 rounded border border-gray-700">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-2 text-white">Loading editor...</p>
      </div>
    </div>
  );
}

export default function NoSSRCodeDetector() {
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <CodeDetector />
    </Suspense>
  );
}
