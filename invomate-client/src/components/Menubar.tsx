import { Link } from "react-router";
import Logo from "./Logo";

const Menubar = () => {
  return (
    <div className="shadow-sm bg-white">
      <div className="container mx-auto py-2">
        <Link className="flex items-center" to={{pathname: "/"}}>
          <Logo />
          <span className="font-bold text-2xl mx-3 tracking-tight text-[#3507b4]">InvoMate</span>
        </Link>
      </div>
    </div>
  )
}

export default Menubar;
