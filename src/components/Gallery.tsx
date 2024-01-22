"use client";

import { ImageType } from "@/utils/enums";
import { getImageData } from "@/utils/helpers";
import Masonry from "masonry-layout";
import { useEffect, useRef } from "react";

interface IProps {
	type: ImageType;
}

export default function Gallery({ type }: IProps) {
	const images = getImageData(type);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref && ref.current) {
			new Masonry(ref.current, {
				itemSelector: ".grid-item",
				columnWidth: ".grid-sizer",
				percentPosition: true,
				gutter: 5,
			});
		}
	}, []);

	return (
		<div ref={ref} className="grid" id="grid">
			<div className="grid-sizer"></div>
			{images.map((image, index) => (
				<div className="grid-item" key={index}>
					<img src={`/gallery${image.src}`} alt={image.name} />
				</div>
			))}
		</div>
	);
}
