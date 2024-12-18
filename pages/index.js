import Image from "next/image";
import FullScreenImageGallery from "@/components/Images";
import PageOne from "@/components/PageOne";
import PageTwo from "@/components/PageTwo";
import PageThree from "@/components/PageThree";
import PageFour from "@/components/PageFour";
import PageFive from "@/components/PageFive";



export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <PageOne />
      <hr className="border border-white" />
      {/* new page ............................................................................................................ */}
      <PageTwo />
      <hr className="border border-white" />
      <PageThree />
      <PageFour />
      <hr className="border border-white" />
      <PageFive />
    </div>
  );
}
