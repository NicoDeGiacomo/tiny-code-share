import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - No Data Collection, Complete Privacy',
  description: 'Tiny Code Share privacy policy: We collect no data, store no code, and track nothing. Your privacy is guaranteed by design.',
  openGraph: {
    title: 'Privacy Policy - Tiny Code Share',
    description: 'Complete privacy guaranteed: No data collection, no server storage, no tracking.',
  },
};

export default function Privacy() {
  return (
    <main className="min-h-screen p-4 sm:p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Your privacy is our priority. Here's exactly what we do and don't collect.
        </p>
      </header>

      <section className="space-y-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">TL;DR - Complete Privacy</h2>
          <ul className="space-y-2 text-green-700">
            <li>✅ <strong>Zero data collection</strong> - We collect nothing</li>
            <li>✅ <strong>No server storage</strong> - Your code never touches our servers</li>
            <li>✅ <strong>No tracking</strong> - No analytics, cookies, or user tracking</li>
            <li>✅ <strong>Client-side only</strong> - Everything happens in your browser</li>
            <li>✅ <strong>No accounts</strong> - No registration, no personal information</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tiny Code Share uses a unique approach called "URL fragment storage" to ensure complete privacy:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>Your code stays in your browser:</strong> When you paste code, it's processed entirely 
              client-side using JavaScript.
            </li>
            <li>
              <strong>Compressed and encoded:</strong> Your code is compressed using LZ-String and encoded 
              into the URL fragment (the part after #).
            </li>
            <li>
              <strong>Shared via URL:</strong> The shareable link contains your code in the URL fragment, 
              which never gets sent to any server.
            </li>
            <li>
              <strong>Decoded in recipient's browser:</strong> When someone opens your link, their browser 
              decodes the code from the URL fragment.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">What We Don't Collect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>No names or email addresses</li>
                <li>No IP addresses</li>
                <li>No device information</li>
                <li>No location data</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Usage Data</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>No analytics or tracking</li>
                <li>No page views or clicks</li>
                <li>No usage patterns</li>
                <li>No performance metrics</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Technical Details</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">URL Fragments</h3>
              <p className="text-gray-700">
                URL fragments (everything after #) are never sent to web servers. This is a fundamental 
                property of how browsers work, ensuring your code remains completely private.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">No Server Processing</h3>
              <p className="text-gray-700">
                Our application is a static website with no backend processing. There are no databases, 
                no server logs, and no data processing on our end.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Open Source Transparency</h3>
              <p className="text-gray-700">
                Our entire codebase is open source and available on GitHub. You can verify exactly 
                how the application works and confirm our privacy claims.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            We use minimal third-party services, all of which respect privacy:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Vercel (Hosting):</strong> Static file hosting with no server-side processing. 
              Standard web server logs may apply.
            </li>
            <li>
              <strong>Google Fonts:</strong> Font delivery service. No personal data is shared.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            Since we collect no data about you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>There's no data to access, modify, or delete</li>
            <li>There are no accounts to manage</li>
            <li>There's no personal information to port</li>
            <li>There are no privacy settings to configure</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-gray-700 leading-relaxed">
            While we don't store your code, we recommend being cautious when sharing sensitive information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
            <li>Don't share API keys, passwords, or secrets</li>
            <li>Be mindful of proprietary code</li>
            <li>Consider the audience who will have access to your shared link</li>
            <li>Remember that URLs can be logged by browsers, proxies, or other services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">
            If you have questions about this privacy policy or our practices, you can reach out via 
            our GitHub repository or contact the maintainer directly.
          </p>
        </div>

        <div className="text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>Last updated: December 2024</p>
          <p>This privacy policy may be updated to reflect changes in our practices or for legal compliance.</p>
        </div>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center">
          <a 
            href="/" 
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Sharing Code →
          </a>
        </div>
      </footer>
    </main>
  );
}
