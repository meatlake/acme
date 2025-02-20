import Link from "next/link";
import AcmeLogo from "./ui/acme-logo";
import { lusitana } from "./ui/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      <div className="flex h-20 shrink-0 items-end rounded-md p-2 bg-green-600 md:h-52">
        <AcmeLogo />
      </div>
      <div className="flex mt-4 grow flex-col gap-4 md:flex-row">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>Welcome to Acme</strong> {', '} where dreams become reality.
        </p>
        <Link 
        href="/login"
        className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
      </div>
    </main>
  );
}
