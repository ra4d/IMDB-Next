"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItems({title , param}) {
     const searchparams = useSearchParams() 
    const genre = searchparams.get("genre")
    
  return (
    <div >
        <Link href={`/?genre=${param}`}
        className={`hover:text-amber-500 ${genre == param ?"underline underline-offset-8 rounded-lg decoration-amber-500 decoration-4 ":""}`}
        >{title}</Link>
    </div>
  )
}
