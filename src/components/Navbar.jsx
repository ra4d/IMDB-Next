import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className={`lg:text-lg font-bold flex gap-6 justify-center items-center dark:bg-gray-600 bg-amber-100 p-4`}>
        <NavbarItems title={"Trending"} param={"fetchTrending"} />
        <NavbarItems title={"Top Rated"} param={"fetchTopRated"} />
    </div>
  )
}
