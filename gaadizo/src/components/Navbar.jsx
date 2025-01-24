
import { Car, Menu } from "lucide-react"
import { Button } from "../components/ui/button"
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-16">
     {/* Navigation */}
     <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="https://www.gaadizo.com/images/logo.png" alt="Gaadizo" className="w-32" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
