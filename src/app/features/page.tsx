import { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features - Complete Code Sharing Solution',
  description: 'Explore all features of Tiny Code Share: privacy-first design, syntax highlighting, mobile support, and more developer-friendly capabilities.',
  openGraph: {
    title: 'Tiny Code Share Features - Everything You Need',
    description: 'Privacy-first code sharing with syntax highlighting, mobile support, and developer-friendly features.',
  },
};

export default function Features() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-6xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Features</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need for secure, fast, and beautiful code sharing. 
          Built with privacy and developer experience in mind.
        </p>
      </header>

      <section className="space-y-12">
        {/* Privacy & Security */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">🔒 Privacy & Security</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-green-800">Zero Server Storage</h3>
              <p className="text-green-700">
                Your code never touches our servers. Everything is processed client-side in your browser 
                for maximum privacy and security.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-green-800">No Data Collection</h3>
              <p className="text-gray-600">Your code isn&apos;t stored on our servers - it&apos;s encoded directly in the URL for maximum privacy.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-green-800">URL Fragment Security</h3>
              <p className="text-green-700">
                Uses URL fragments that are never sent to web servers, ensuring your code 
                remains completely private during sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Developer Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">👨‍💻 Developer Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">Monaco Editor</h3>
              <p className="text-blue-700">
                The same powerful editor used in VS Code, with IntelliSense, code completion, 
                and familiar keyboard shortcuts.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">200+ Languages</h3>
              <p className="text-blue-700">
                Automatic language detection and syntax highlighting for JavaScript, Python, 
                Java, C++, Go, Rust, and many more.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">Smart Formatting</h3>
              <p className="text-blue-700">
                Intelligent code formatting, bracket matching, and syntax error highlighting 
                to keep your code clean and readable.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">Instant Sharing</h3>
              <p className="text-blue-700">
                Generate shareable URLs instantly as you type. No save buttons, 
                no waiting - just paste and share.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">Copy to Clipboard</h3>
              <p className="text-blue-700">
                One-click copying of code or URLs. Quick and efficient workflow 
                for busy developers.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-blue-800">Keyboard Shortcuts</h3>
              <p className="text-blue-700">
                Full keyboard navigation support with familiar shortcuts for 
                power users and accessibility.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Features */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">⚡ Technical Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Smart Compression</h3>
              <p className="text-purple-700">
                Advanced LZ-String compression reduces code size by 50-90%, 
                creating shorter, more manageable URLs.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Lazy Loading</h3>
              <p className="text-purple-700">
                Monaco editor loads only when needed, ensuring fast initial page loads 
                and optimal performance.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Progressive Web App</h3>
              <p className="text-purple-700">
                PWA capabilities allow installation on devices and offline functionality 
                for better user experience.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">SEO Optimized</h3>
              <p className="text-purple-700">
                Comprehensive meta tags, structured data, and semantic HTML 
                for better search engine visibility.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Fast Performance</h3>
              <p className="text-purple-700">
                Built with Next.js 15 for optimal performance, with static generation 
                and efficient bundling.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Open Source</h3>
              <p className="text-purple-700">
                MIT licensed and available on GitHub. Transparent, auditable, 
                and community-driven development.
              </p>
            </div>
          </div>
        </div>

        {/* User Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">📱 User Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-orange-800">Mobile Responsive</h3>
              <p className="text-orange-700">
                Perfect experience on desktop, tablet, and mobile devices. 
                Touch-friendly interface with adaptive layouts.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-orange-800">No Registration</h3>
              <p className="text-orange-700">
                Start sharing immediately without creating accounts, providing emails, 
                or going through signup processes.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-orange-800">Clean Interface</h3>
              <p className="text-orange-700">
                Minimalist design that focuses on your code. No distractions, 
                no clutter - just clean, beautiful code sharing.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-orange-800">Accessibility</h3>
              <p className="text-orange-700">
                Full keyboard navigation, screen reader support, and WCAG compliance 
                for inclusive code sharing.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-orange-800">Dark/Light Theme</h3>
              <p className="text-orange-700">
                Automatic theme detection based on system preferences, 
                with support for both dark and light modes.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-orange-800">Fast Loading</h3>
              <p className="text-orange-700">
                Optimized for speed with efficient loading, minimal JavaScript, 
                and smart caching strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">🎯 Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Development & Collaboration</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Code reviews and peer feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Debugging help and troubleshooting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Sharing configuration files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Quick prototypes and demos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Open source contributions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Education & Learning</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-gray-700">Teaching code examples</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-gray-700">Interview coding challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-gray-700">Technical documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-gray-700">Student assignment sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-gray-700">Code snippet libraries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">🆚 Why Choose Tiny Code Share?</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-2">Feature</th>
                    <th className="text-center py-3 px-2 text-green-700 font-bold">Tiny Code Share</th>
                    <th className="text-center py-3 px-2 text-gray-600">Traditional Platforms</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium">Server Storage</td>
                    <td className="text-center py-3 px-2 text-green-600">❌ None</td>
                    <td className="text-center py-3 px-2 text-red-600">✓ Required</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium">Registration</td>
                    <td className="text-center py-3 px-2 text-green-600">❌ Not needed</td>
                    <td className="text-center py-3 px-2 text-red-600">✓ Often required</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium">Data Collection</td>
                    <td className="text-center py-3 px-2 text-green-600">❌ Zero</td>
                    <td className="text-center py-3 px-2 text-red-600">✓ Extensive</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium">Sharing Speed</td>
                    <td className="text-center py-3 px-2 text-green-600">⚡ Instant</td>
                    <td className="text-center py-3 px-2 text-yellow-600">⏳ Upload required</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-2 font-medium">Privacy</td>
                    <td className="text-center py-3 px-2 text-green-600">🔒 Maximum</td>
                    <td className="text-center py-3 px-2 text-red-600">⚠️ Limited</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-medium">Open Source</td>
                    <td className="text-center py-3 px-2 text-green-600">✓ MIT License</td>
                    <td className="text-center py-3 px-2 text-red-600">❌ Proprietary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Start Sharing?</h3>
          <p className="text-gray-600 mb-6">
            Experience the fastest, most private way to share code snippets.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Try It Now →
          </Link>
        </div>
      </footer>
    </main>
  );
}
