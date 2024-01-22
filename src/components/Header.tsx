import { josefin } from "@/app/fonts";
import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-6xl font-bold mb-4">Charles Nightingale</h1>
                <h2 className={`${josefin.className} text-center text-2xl mb-8`}>Artist</h2>

                <div className="flex justify-center items-center gap-16">
                    <Link className="text-2xl" href="/">
                        <span className="link link-underline">Oils</span>
                    </Link>
                    <Link className="text-2xl" href="/prints">
                        <span className="link link-underline">Prints</span>
                    </Link>
                    <Link className="text-2xl" href="/watercolours">
                        <span className="link link-underline">Watercolours</span>
                    </Link>
                    <Link className="text-2xl" href="/ceramics">
                        <span className="link link-underline">Ceramics</span>
                    </Link>
                    <Link className="text-2xl" href="/about">
                        <span className="link link-underline">About</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}