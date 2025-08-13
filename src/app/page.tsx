import NoSSRCodeDetector from './ui/no-ssr-code-detector';

export default function TinyCodeShare() {
  return (
    <main className="min-h-screen p-2 sm:p-4">
      <header className="text-center mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-1">TINY CODE SHARE</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
          Share code snippets instantly with complete privacy. No server storage, no accounts needed. 
          Your code stays in your browser and is shared via URL fragments.
        </p>
      </header>
      
      <hr className="border-black my-2 sm:my-1" />
      
      <section className="max-w-full overflow-hidden" aria-label="Code sharing interface">
        <NoSSRCodeDetector />
      </section>
      
      <hr className="border-black mt-2" />
      
      <nav className="mt-6 mb-4" aria-label="Additional information">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a 
            href="/about" 
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            About
          </a>
          <a 
            href="/features" 
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            Features
          </a>
          <a 
            href="/how-it-works" 
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            How It Works
          </a>
          <a 
            href="/privacy" 
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </nav>

      <footer className="mt-4 text-center">
        <div className="text-xs sm:text-sm text-gray-500 space-y-1">
          <p>
            <strong>Privacy-First:</strong> Your code is never stored on our servers. 
            Everything happens client-side in your browser.
          </p>
          <p>
            <strong>Features:</strong> Syntax highlighting • Automatic language detection • 
            Mobile responsive • Open source
          </p>
          <p>
            Built with ❤️ for developers who value privacy and simplicity.
          </p>
        </div>
      </footer>
    </main>
  );
}
