import Image from "next/image";
import { josefin } from "../fonts";
import profilePic from "../../../public/bio-picture.jpg";

export default async function About() {
	return (
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
				<figure className="w-full">
					<Image className="mb-1" src={profilePic} alt="Self Portrait" placeholder="blur" />
					<figcaption className="text-xs">
						The self-portrait shows me in contemplative mood thinking of my life, past and future.
					</figcaption>
				</figure>

				<div className="w-full">
					<h3 className={`${josefin.className} text-2xl mb-4`}>Biography</h3>
					<p className="mb-4">
						I am an oil-painter, watercolourist, printmaker and ceramicist, living in Felixstowe, a
						container port on the Suffolk coast in England, who exhibits with the Ipswich Art Society, the
						Society of East Anglian Watercolourists and Inky Fingers, a Suffolk based group of printmakers.
					</p>
					<p className="mb-4">
						As an oil painter my interests are in Surrealism and social comment. The best description of my
						work would be Social Surrealism, which is also a large element of my printmaking. My watercolour
						leanings are more general – landscape and still life, with a recent interest in urban landscape,
						which also figures heavily in my printmaking.
					</p>
					<p className="mb-4">
						In printmaking, as well as the idioms mentioned above, I produce prints featuring black humour.
						Although I don&apos;t paint abstracts, I have a great love of colour and shape of an abstract
						nature which informs a large part of my ceramics output.
					</p>
					<p>
						If you would like to get in touch with me, please email me at{" "}
						<a href="mailto:info@charleynightingale.co.uk" className="text-blue-600">
							info@charleynightingale.co.uk
						</a>
						.
					</p>
				</div>
			</div>

			<h3 className={`${josefin.className} text-2xl mb-4`}>Video Interview</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<iframe
					className="youtube-video"
					src="https://www.youtube.com/embed/jfd05KTdPmI?si=IxP8qh_Jr54-tNhh"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>

				<iframe
					className="youtube-video"
					src="https://www.youtube.com/embed/IPEemVvtbRw?si=GL_wesr2h-G2dtfd"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
