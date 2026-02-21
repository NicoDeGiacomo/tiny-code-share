import Link from 'next/link';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/privacy', label: 'Privacy Policy' },
];

export default function FooterNav({ currentPath }: { currentPath: string }) {
  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
      <nav className="mb-6" aria-label="Site navigation">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {pages
            .filter((p) => p.href !== currentPath)
            .map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {p.label}
              </Link>
            ))}
        </div>
      </nav>
      {currentPath !== '/' && (
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Sharing Code →
          </Link>
        </div>
      )}
    </footer>
  );
}
