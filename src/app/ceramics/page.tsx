import { ImageType } from "@/utils/enums";
import dynamic from "next/dynamic";

const Gallery = dynamic(
  () => {
    return import("@/components/Gallery");
  },
  { ssr: false }
);

export default async function Ceramics() {

  return (
    <main>
      <div className="container mx-auto px-4">
        <Gallery type={ImageType.Ceramics} />
      </div>
    </main>
  );
}
