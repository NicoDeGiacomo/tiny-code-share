import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - URL Fragment Code Sharing Technology',
  description: 'Learn how Tiny Code Share uses URL fragments and client-side compression to share code snippets without server storage.',
  openGraph: {
    title: 'How Tiny Code Share Works - Technical Details',
    description: 'Discover the technology behind privacy-first code sharing with URL fragments.',
  },
};

export default function HowItWorks() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-gray-600">
          The technical magic behind privacy-first code sharing using URL fragments.
        </p>
      </header>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Core Concept</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tiny Code Share leverages a fundamental property of web browsers: <strong>URL fragments</strong> 
            (the part after #) are never sent to web servers. This means your code stays completely private 
            while still being shareable via a simple URL.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800">
              <strong>Example:</strong> https://tiny-code-share.vercel.app/#your-compressed-code-here
            </p>
            <p className="text-blue-700 text-sm mt-2">
              Everything after # stays in your browser and is never sent to our servers.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Step-by-Step Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Code Input</h3>
                <p className="text-gray-700">
                  You paste or type your code into the Monaco editor (the same editor used in VS Code). 
                  The editor provides syntax highlighting and language detection.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Compression</h3>
                <p className="text-gray-700">
                  Your code is compressed using LZ-String, a powerful compression algorithm that can 
                  reduce code size by 50-90%, making URLs more manageable.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">URL Encoding</h3>
                <p className="text-gray-700">
                  The compressed code is encoded into a URL-safe format and placed in the URL fragment. 
                  This happens entirely in your browser using JavaScript.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Share the URL</h3>
                <p className="text-gray-700">
                  You copy and share the generated URL. The recipient can open it in any browser 
                  to view your code with full syntax highlighting.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Code Restoration</h3>
                <p className="text-gray-700">
                  When someone opens your link, their browser extracts the code from the URL fragment, 
                  decompresses it, and displays it with proper syntax highlighting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Technical Architecture</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Frontend Technologies</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Next.js 15:</strong> React framework for optimal performance</li>
                <li><strong>Monaco Editor:</strong> Professional code editor component</li>
                <li><strong>highlight.js:</strong> Syntax highlighting for 200+ languages</li>
                <li><strong>LZ-String:</strong> Efficient string compression library</li>
                <li><strong>Tailwind CSS:</strong> Responsive styling framework</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Automatic Language Detection:</strong> Recognizes 50+ programming languages</li>
                <li><strong>Real-time Compression:</strong> Instant URL generation as you type</li>
                <li><strong>Mobile Responsive:</strong> Works on all device sizes</li>
                <li><strong>Lazy Loading:</strong> Monaco editor loads only when needed</li>
                <li><strong>Accessibility:</strong> Keyboard navigation and screen reader support</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Why URL Fragments?</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🔒 Privacy by Design</h3>
              <p className="text-gray-700">
                URL fragments are never sent to web servers. This is a fundamental browser behavior 
                that ensures your code remains completely private.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">⚡ No Backend Required</h3>
              <p className="text-gray-700">
                Since everything happens client-side, there's no need for databases, user accounts, 
                or server-side processing. This keeps the service simple and fast.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🌐 Universal Compatibility</h3>
              <p className="text-gray-700">
                Works in any modern web browser without plugins or special software. 
                The shared URLs work everywhere.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Limitations & Considerations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">URL Length Limits</h3>
              <p className="text-gray-700">
                While compression helps significantly, very large code files may create URLs that 
                exceed browser limits (typically 2,000-8,000 characters). For most code snippets, 
                this isn't an issue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Browser History</h3>
              <p className="text-gray-700">
                URLs may be stored in browser history, bookmarks, or server logs of intermediate 
                services. Consider this when sharing sensitive code.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">No Persistence</h3>
              <p className="text-gray-700">
                Code is only accessible via the URL. If the URL is lost, the code cannot be recovered. 
                This is by design for maximum privacy.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Perfect Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Development</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Code reviews and feedback</li>
                <li>Debugging help requests</li>
                <li>Sharing configuration files</li>
                <li>Quick prototypes and demos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Education & Collaboration</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Teaching code examples</li>
                <li>Interview coding challenges</li>
                <li>Technical documentation</li>
                <li>Open source contributions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center">
          <a 
            href="/" 
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try It Now →
          </a>
        </div>
      </footer>
    </main>
  );
}
