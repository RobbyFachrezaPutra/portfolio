export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-14 md:h-14 flex justify-end p-6 items-center shadow-lg cursor-pointer backdrop-blur-lg border-b-2 border-[#fffdf6]">
      <ul className="flex gap-2 text-[#fffdf6] ">
        <li><a href="#hero" className="hover:line-through hover:text-[#6bd2fd] transition-all duration-500 ease-in-out">Home,</a></li>
        <li><a href="#about" className="hover:line-through hover:text-[#6bd2fd] transition-all duration-500 ease-in-out">About,</a></li>
        <li><a href="#portfolio" className="hover:line-through hover:text-[#6bd2fd] transition-all duration-500 ease-in-out">Portfolio,</a></li>
        <li><a href="#" className="hover:line-through hover:text-[#6bd2fd] transition-all duration-500 ease-in-out">Contact</a></li>
      </ul>
    </nav>
  );
}
