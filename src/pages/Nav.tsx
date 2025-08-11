import "animate.css";
import { Link } from "react-scroll";
import { NavLinks } from "../types";

export const Nav = () => {
  const navItems: NavLinks[] = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <header className="h-[8vh]  bg-primary sticky top-0">
      <nav className="relative xsm:p-2 flex flex-row items-center justify-between w-full h-full">

        <div className="text-center xsm:w-1/5 md:w-1/4">
          <Link to="home" spy={true} smooth={true} duration={500} offset={-55}>
            <h2 className="text-white cursor-pointer">
              <b className="text-secondary">Shelton </b>Styles
            </h2>
          </Link>
        </div>

        <div className="flex flex-row items-center justify-evenly h-full xsm:w-4/5">
          {navItems.map((item) => {
            return (
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-55}
                key={item.link}
              >
                <p className="text-white cursor-pointer nav-links">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
        
      </nav>
    </header>
  );
};
