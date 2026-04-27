import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-[#d6b8fc] tracking-widest">
        MAGAZINE WITH ELLYNETO
      </h1>

      <div className="flex gap-6 text-sm text-gray-300">

        <Link to="/" className="hover:text-[#d6b8fc] transition">
          Home
        </Link>

        <Link to="/gallery" className="hover:text-[#d6b8fc] transition">
          Galeria
        </Link>

      </div>

    </nav>
  )
}