"use client"
import { MdDarkMode , MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";
export default function DarkModeSwitch() {
  const {theme , setTheme , systemTheme} = useTheme()
  const [mounted , setMounted] = useState(false)
  useEffect(()=>
    setMounted(true)
  ,[])
  const currenTheme = theme === "system" ? systemTheme:theme;
  return (
    <div>{
      mounted && currenTheme === "dark" ? <MdDarkMode className={`text-xl cursor-pointer hover:text-amber-500`} onClick={()=>{
        setTheme("ligth")
      }} />:<MdLightMode onClick={()=>{
        setTheme("dark")}}  className={`text-xl cursor-pointer hover:text-amber-500`}/>
    }</div>
  )
}

