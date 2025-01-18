import PageFive from "@/components/PageFive";
import PageFour from "@/components/PageFour";
import PageOne from "@/components/PageOne";
import PageThree from "@/components/PageThree";
import PageTwo from "@/components/PageTwo";


export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-[#2b2b2b]">
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
