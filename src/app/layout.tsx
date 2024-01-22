import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/app/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
				{children}
				<Footer />
			</body>
		</html>
	);
}
