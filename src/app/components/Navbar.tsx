import Link from "next/link";
import {BsGithub} from 'react-icons/bs'
export default function Navbar() {
  return (
    <div className="h-16 text-gray-200 relative right-0 left-0 top-0 py-3 px-5 flex items-center justify-between">
      <p className="text-md font-semibold">ARNAB</p>
      <ul className="list-none md:flex gap-6 hidden text-gray-300">
        <li>
          <Link href={"/"} className="text-sm sm:text-md">
            Home
          </Link>
        </li>
        <li>
          <Link href={"#about"} className="text-sm sm:text-md">
            About Me
          </Link>
        </li>
        <li>
          <Link href={"#projects"} className="text-sm sm:text-md">
            My Projects
          </Link>
        </li>
        <li>
          <Link href={"#contact"} className="text-sm sm:text-md">
            Contact Me
          </Link>
        </li>
        <li>
          <Link
            href={"#resume"}
            className="text-sm bg-[#82C0CC] rounded py-1 px-2 text-white"
          >
            Resume
          </Link>
        </li>
      </ul>

      <div className="flex gap-4 items-center md:hidden">
      <Link href={'/github'}><BsGithub /></Link>
      <Link
        href={"/resume"}
        className="text-sm bg-[#82C0CC] rounded py-1 px-2 text-white"
      >
        Resume
      </Link>
      </div>
    </div>
  );
}
