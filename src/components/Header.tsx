"use client";

import { caveat, josefin } from "@/app/fonts";
import { navigation } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="p-4">
			<div className="container mx-auto px-4">
				<h1 className="text-center text-6xl font-bold mb-4">Charles Nightingale</h1>
				<h2 className={`${josefin.className} text-center text-2xl mb-8`}>Artist</h2>

				<div className={`${caveat.className} flex justify-center items-center gap-16`}>
					{navigation.map((item) => {
						const active = pathname === item.href ? "active" : "";

						return (
							<Link key={item.label} className="text-2xl" href={item.href}>
								<span className={`${active} link link-underline`}>{item.label}</span>
							</Link>
						);
					})}
				</div>
			</div>
		</header>
	);
}
