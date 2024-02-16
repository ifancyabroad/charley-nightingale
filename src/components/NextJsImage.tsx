import Image, { StaticImageData } from "next/image";
import {
	RenderSlideProps,
	SlideImage,
	isImageFitCover,
	isImageSlide,
	useLightboxProps,
	useLightboxState,
} from "yet-another-react-lightbox";

function isNextJsImage(slide: SlideImage) {
	return isImageSlide(slide) && typeof slide.width === "number" && typeof slide.height === "number";
}

interface IProps {
	slide: SlideImage;
	offset: number;
	rect: DOMRect;
}

export default function NextJsImage({ slide, offset, rect }: RenderSlideProps<SlideImage>) {
	const {
		on: { click },
		carousel: { imageFit },
	} = useLightboxProps();

	const { currentIndex } = useLightboxState();

	const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

	if (!isNextJsImage(slide)) return undefined;

	const width = !cover ? Math.round(Math.min(rect.width, (rect.height / slide.height!) * slide.width!)) : rect.width;

	const height = !cover
		? Math.round(Math.min(rect.height, (rect.width / slide.width!) * slide.height!))
		: rect.height;

	return (
		<div style={{ position: "relative", width, height }}>
			<Image
				fill
				alt=""
				src={slide as StaticImageData}
				loading="eager"
				draggable={false}
				placeholder={"blurDataURL" in slide ? "blur" : undefined}
				style={{
					objectFit: cover ? "cover" : "contain",
					cursor: click ? "pointer" : undefined,
				}}
				sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
				onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
			/>
		</div>
	);
}
