import { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Privacy-First Code Sharing Tool',
  description: 'Learn about Tiny Code Share, the open-source privacy-focused code snippet sharing tool that never stores your code on servers.',
  openGraph: {
    title: 'About Tiny Code Share - Privacy-First Code Sharing',
    description: 'Learn about our privacy-focused approach to code snippet sharing with no server storage.',
  },
};

export default function About() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Tiny Code Share</h1>
        <p className="text-lg text-gray-600">
          The privacy-first code snippet sharing tool built for developers who value security and simplicity.
        </p>
      </header>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Tiny Code Share was created to solve a simple problem: sharing code snippets quickly and securely 
            without compromising your privacy. Unlike traditional code sharing platforms that store your code 
            on their servers, we take a different approach - your code never leaves your browser.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Privacy-First Design</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
            <p className="text-green-800">
              <strong>Zero Server Storage:</strong> Your code is never stored on our servers or any external database.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We use URL fragments (the part after #) to store your code directly in the browser URL. This means 
            your sensitive code snippets remain completely private and are only accessible to those you share 
            the link with.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">🔒 Complete Privacy</h3>
                <p className="text-gray-600">No server storage, no logging, no tracking of your code.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">⚡ Instant Sharing</h3>
                <p className="text-gray-600">Share code snippets with a single URL - no accounts required.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">🎨 Syntax Highlighting</h3>
                <p className="text-gray-600">Automatic language detection with beautiful syntax highlighting.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">📱 Mobile Responsive</h3>
                <p className="text-gray-600">Works perfectly on desktop, tablet, and mobile devices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">🌐 Client-Side Only</h3>
                <p className="text-gray-600">Everything happens in your browser - no backend required.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">🔓 Open Source</h3>
                <p className="text-gray-600">MIT licensed and available on GitHub for transparency.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <p className="text-gray-700 mb-4">Built with modern web technologies for optimal performance:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Next.js 15</strong> - React framework for production</li>
            <li><strong>Monaco Editor</strong> - VS Code&apos;s editor for the web</li>
            <li><strong>highlight.js</strong> - Syntax highlighting for 200+ languages</li>
            <li><strong>LZ-String</strong> - Efficient compression for URL storage</li>
            <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Code reviews and collaboration</li>
              <li>Sharing debugging snippets</li>
              <li>Educational code examples</li>
              <li>Quick prototyping</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Interview coding challenges</li>
              <li>Open source contributions</li>
              <li>Technical discussions</li>
              <li>Documentation examples</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Sharing Code →
          </Link>
        </div>
      </footer>
    </main>
  );
}
