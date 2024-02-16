"use client";

import { josefin } from "@/app/fonts";
import { DesktopNavigation, MobileNavigation } from "./Navigation";

export default function Header() {
	return (
		<header className="py-6 md:py-12">
			<div className="container mx-auto px-4">
				<MobileNavigation />

				<div className="flex gap-4 flex-col items-center lg:flex-row lg:items-end lg:justify-between">
					<div className="text-center lg:text-left">
						<h1 className={`${josefin.className} text-2xl md:text-4xl`}>Charles Nightingale</h1>
						<h2 className={`${josefin.className} text-xl md:text-2xl font-thin`}>Artist & Author</h2>
					</div>

					<DesktopNavigation />
				</div>
			</div>
		</header>
	);
}
