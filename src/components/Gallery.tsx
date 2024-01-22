"use client";

import { ImageType } from "@/utils/enums";
import { getImageData } from "@/utils/helpers";
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
					<div key={index}>
						<img src={`/gallery${image.src}`} alt={image.name} loading="lazy" />
					</div>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
}
