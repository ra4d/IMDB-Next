import Menuitems from "./Menuitems";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";


export default function Header() {
  return (
    <div className={`flex items-center justify-between max-w-6xl mx-auto p-3 `}>
        <div className={`flex gap-4`}>
					<Menuitems title={"Home"} address={'/'} Icon={FaHome}/> 
					<Menuitems title={"About"} address={'/about'} Icon={BsFillInfoCircleFill}/> 
        </div>
				<Link href={'/'} className={`flex items-center gap-1`}>
					<span className={`bg-amber-500 py-1 px-2 text-2xl font-bold rounded-lg`}>IMDB</span>
					<span className={`text-xl hidden sm:inline`}>clone</span>
				</Link>
    </div>
  )
}
