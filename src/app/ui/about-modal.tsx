import { useState } from 'react';

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start relative">
      <button
        className="inline-flex items-center cursor-pointer border border-black p-1"
        onClick={() => setIsOpen(true)}
      >
        <span className="mr-1 ml-1 text-sm font-medium">About</span>
      </button>

      <div>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              {/* Dark overlay */}
              <div
                className="fixed inset-0 bg-black opacity-30"
                onClick={() => setIsOpen(false)}
              ></div>

              {/* Modal content */}
              <div className="bg-white z-10 p-6 rounded-lg shadow-xl w-11/12 max-w-2xl border-2 border-black relative">
                <button
                  className="absolute top-2 right-2 text-2xl leading-none"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>

                <h2 className="text-3xl font-bold mb-4">
                  About Tiny Code Share
                </h2>

                <div className="prose prose-sm max-w-none">
                  <h3 className="text-xl font-semibold">The Mission</h3>
                  <p className="my-2">
                    Tiny Code Share was created with a simple philosophy in
                    mind: code sharing should be
                    <span className="font-bold">
                      {' '}
                      fast, private, and straightforward
                    </span>
                    .
                  </p>

                  <h3 className="text-xl font-semibold mt-4">Key Features</h3>

                  <h4 className="text-lg font-medium mt-3">
                    1. Private By Design
                  </h4>
                  <p className="my-2">
                    Your code snippets are{' '}
                    <span className="font-bold">never logged or stored</span> on
                    any backend. Everything happens client-side in your browser,
                    ensuring your code remains private and secure. Your code is
                    never tracked, stored, or analyzed in any way.
                  </p>

                  <h4 className="text-lg font-medium mt-3">
                    2. Fast & Straightforward
                  </h4>
                  <p className="my-2">
                    No sign-ups, no accounts, no complications. Just paste your
                    code and share the link. The focus is on simplicity and
                    speed, allowing you to share code snippets effortlessly.
                  </p>

                  <h4 className="text-lg font-medium mt-3">3. How It Works</h4>
                  <p className="my-2">
                    Tiny Code Share uses URL fragment identifiers (the part
                    after the # in the URL) to store and share your code. This
                    means your code never leaves your browser when you create a
                    share, and it&apos;s never sent to a server when someone
                    views it.
                  </p>

                  <h3 className="text-xl font-semibold mt-4">Open Source</h3>
                  <p className="my-2">
                    Tiny Code Share is completely open source. You can view the
                    code, contribute, or fork the project on{' '}
                    <a
                      href="https://github.com/NicoDeGiacomo/tiny-code-share"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
