"use client";

import { navigation } from "@/utils/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { josefin } from "@/app/fonts";
import { useState } from "react";

export function DesktopNavigation() {
	const pathname = usePathname();

	return (
		<div className={`${josefin.className} font-light hidden md:flex justify-center items-center gap-16`}>
			{navigation.map((item) => {
				const active = pathname === item.href ? "active" : "";

				return (
					<Link key={item.label} className="text-xl" href={item.href}>
						<span className={`${active} block link link-underline`}>{item.label}</span>
					</Link>
				);
			})}
		</div>
	);
}

export function MobileNavigation() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<label className="md:hidden relative z-40 cursor-pointer px-3 py-6" htmlFor="mobile-menu">
			<input onClick={toggleMenu} className="hidden" type="button" id="mobile-menu" />
			<div className={open ? "menu-button menu-button-open" : "menu-button"}></div>
			<div
				className={`fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm ${open ? "block" : ""}`}
			>
				&nbsp;
			</div>
			<div className={open ? "sidebar sidebar-open" : "sidebar"}>
				<div className="float-right min-h-full w-[85%] bg-white px-10 pt-12 shadow-2xl">
					<menu className={`${josefin.className} font-light`}>
						{navigation.map((item) => {
							const active = pathname === item.href ? "active" : "";

							return (
								<li key={item.label} className="mb-12">
									<Link onClick={closeMenu} className="text-2xl" href={item.href}>
										<span className={`${active} inline-block link link-underline`}>
											{item.label}
										</span>
									</Link>
								</li>
							);
						})}
					</menu>
				</div>
			</div>
		</label>
	);
}
