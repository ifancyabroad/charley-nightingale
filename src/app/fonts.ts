import { Caveat, Josefin_Sans, Poppins } from "next/font/google";

export const caveat = Caveat({
	weight: "400",
	subsets: ["latin"],
});

export const josefin = Josefin_Sans({
	weight: ["300", "400"],
	subsets: ["latin"],
});

export const poppins = Poppins({
	weight: ["300", "400"],
	subsets: ["latin"],
});
