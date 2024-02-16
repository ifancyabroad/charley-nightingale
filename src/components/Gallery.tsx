"use client";

import { josefin } from "@/app/fonts";
import { ImageType } from "@/utils/enums";
import { getImageData } from "@/utils/helpers";
import Image from "next/image";
import { Fragment, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import "yet-another-react-lightbox/styles.css";

interface IProps {
	type: ImageType;
}

export default function Gallery({ type }: IProps) {
	const images = getImageData(type);
	const [index, setIndex] = useState(-1);

	return (
		<Fragment>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry gutter="10px">
					{images.map((image, index) => (
						<button key={index} className="relative" onClick={() => setIndex(index)}>
							<Image className="align-middle" src={image.src} alt={image.name} placeholder="blur" />
							<div className={`${josefin.className} image-backdrop`}>
								<p>{image.name}</p>
							</div>
						</button>
					))}
				</Masonry>
			</ResponsiveMasonry>

			<Lightbox
				index={index}
				open={index >= 0}
				close={() => setIndex(-1)}
				slides={images.map((image) => image.src)}
				render={{ slide: NextJsImage }}
			/>
		</Fragment>
	);
}
