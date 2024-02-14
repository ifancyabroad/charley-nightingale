import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Charles Nightingale",
	description: "A showcase of the work of Charles Nightingale, an artist based in Felixstowe, Suffolk, UK.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header />
				<main className="min-h-[calc(100vh-157px)] md:min-h-[calc(100vh-212px)] lg:min-h-[calc(100vh-168px)]">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
