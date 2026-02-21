import Link from 'next/link';
import NoSSRCodeDetector from './ui/no-ssr-code-detector';
import FooterNav from './ui/footer-nav';

export default function TinyCodeShare() {
  return (
    <main className="min-h-screen p-2 sm:p-4">
      <header className="text-center mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-1">
          TINY CODE SHARE
          <span className="block text-base sm:text-lg md:text-xl font-medium text-gray-600 mt-1">
            Private Code Snippet Sharing
          </span>
        </h1>
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

      <section className="max-w-4xl mx-auto mt-8 space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">How It Works</h2>
          <p className="text-gray-700 leading-relaxed">
            Paste or type your code into the editor above. Tiny Code Share compresses it with LZ-String,
            encodes the result into the URL fragment (the part after #), and generates a shareable link
            instantly. Because URL fragments are never sent to web servers, your code stays completely
            private. The recipient opens the link, and their browser decodes the snippet client-side
            with full syntax highlighting.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Why Tiny Code Share?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-1">Complete Privacy</h3>
              <p className="text-sm text-gray-600">
                Your code never touches a server. Everything is processed client-side in your browser,
                so sensitive snippets stay between you and whoever you share the link with.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">No Account Required</h3>
              <p className="text-sm text-gray-600">
                Start sharing immediately - no sign-ups, no email verification, no profiles. Just paste
                your code and copy the URL.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Syntax Highlighting</h3>
              <p className="text-sm text-gray-600">
                Powered by the Monaco editor (the same engine behind VS Code) with automatic language
                detection for 200+ programming languages.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Perfect For</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Code reviews, debugging help, and pair-programming sessions</li>
            <li>Sharing configuration files, scripts, and quick prototypes</li>
            <li>Interview coding challenges and teaching examples</li>
            <li>Any situation where you need fast, private snippet sharing</li>
          </ul>
          <p className="text-sm text-gray-600 mt-3">
            Explore all capabilities on the{' '}
            <Link href="/features" className="text-blue-600 hover:text-blue-800 hover:underline">
              Features
            </Link>{' '}
            page, or learn the technical details on{' '}
            <Link href="/how-it-works" className="text-blue-600 hover:text-blue-800 hover:underline">
              How It Works
            </Link>.
          </p>
        </div>
      </section>

      <FooterNav currentPath="/" />
    </main>
  );
}
