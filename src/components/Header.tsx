"use client";

import { josefin } from "@/app/fonts";
import { DesktopNavigation, MobileNavigation } from "./Navigation";

export default function Header() {
	return (
		<header className="py-6 md:py-12">
			<div className="container mx-auto px-4">
				<div className="flex gap-4 justify-between lg:items-end">
					<div>
						<h1 className={`${josefin.className} text-2xl md:text-4xl`}>Charles Nightingale</h1>
						<h2 className={`${josefin.className} text-xl md:text-2xl font-thin`}>Artist & Author</h2>
					</div>

					<MobileNavigation />
					<DesktopNavigation />
				</div>
			</div>
		</header>
	);
}
