import Link from "next/link";
import NoSSRCodeDetector from "./ui/no-ssr-code-detector";

export default function TinyCodeShare() {
    return (
        <main>
            <h1 className="text-5xl font-bold mt-1 text-center">TINY CODE SHARE</h1>
            <hr className="border-black my-1" />
            <div className="">
                <NoSSRCodeDetector />
            </div>
            <hr className="border-black" />

        </main>
    );
}
