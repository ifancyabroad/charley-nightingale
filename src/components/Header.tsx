"use client";

import { josefin } from "@/app/fonts";
import { DesktopNavigation, MobileNavigation } from "./Navigation";

export default function Header() {
	return (
		<header className="py-4 mb-8">
			<div className="container mx-auto px-4">
				<MobileNavigation />
				<div className="header-image">
					<h1 className={`${josefin.className} text-center text-4xl md:text-6xl font-bold`}>
						Charles Nightingale
					</h1>
					<h2 className={`${josefin.className} text-center text-2xl md:text-4xl font-thin`}>Artist</h2>
				</div>

				<DesktopNavigation />
			</div>
		</header>
	);
}
