"use client";

import { josefin } from "@/app/fonts";
import { ImageType } from "@/utils/enums";
import { getImageData } from "@/utils/helpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface IProps {
	type: ImageType;
}

export default function Gallery({ type }: IProps) {
	const images = getImageData(type);

	return (
		<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
			<Masonry gutter="10px">
				{images.map((image, index) => (
					<div key={index} className="relative">
						<LazyLoadImage src={`/gallery${image.src}`} alt={image.name} effect="blur" />
						<div className={`${josefin.className} image-backdrop`}>
							<p>{image.name}</p>
						</div>
					</div>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
}
