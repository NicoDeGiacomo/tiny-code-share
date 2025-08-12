import NoSSRCodeDetector from './ui/no-ssr-code-detector';

export default function TinyCodeShare() {
  return (
    <main className="min-h-screen p-2 sm:p-4">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-1 text-center">TINY CODE SHARE</h1>
      <hr className="border-black my-2 sm:my-1" />
      <div className="max-w-full overflow-hidden">
        <NoSSRCodeDetector />
      </div>
      <hr className="border-black mt-2" />
    </main>
  );
}
