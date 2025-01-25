import "@/styles/globals.css";
import { Anton, Rubik_Glitch, Rubik_Vinyl } from "next/font/google";
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-anton", 
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
    variable: "--font-rubik-glitch",
});

const rubikVinyl = Rubik_Vinyl({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-rubik-vinyl", 
});



export default function App({ Component, pageProps }) {
  return(
  <main className={`${anton.variable} ${rubikGlitch.variable} ${rubikVinyl.variable} bg-[#2b2b2b]`}>
   <Component {...pageProps} />;
  </main>
  )
}
