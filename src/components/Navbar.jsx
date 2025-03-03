import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setActiveLink(location.pathname); // Update active link on route change
    }, [location.pathname]);

    return (
        <nav className=" p-3 bg-black">
            <div className="text-white flex justify-between items-center">
                <div className="logo w-full sm:w-auto flex  justify-center sm:justify-start  font-bold text-2xl px-3">Yash.me
                </div>
                {/* for medium and large screen */}
                <div className=" flex max-sm:hidden  text-white  gap-x-5 p-1 ">
                    {[
                        { Name: "Home", path: "/" },
                        { Name: "AboutMe", path: "/aboutme" },
                        { Name: "MyProjects", path: "/myprojects" },

                    ].map((route, index) => (
                        <Link
                            key={index}
                            to={route.path}

                            className={` duration-300 ${activeLink === route.path ? "scale-115" : "scale-100"
                                }`}
                        >
                            {route.Name}
                        </Link>
                    ))}
                </div>
                <div className=" max-sm:hidden px-3">
                    <Link
                        to="/Contacts"
                        onClick={() => setActiveLink("/Contacts")}
                        className={`duration-300 ${activeLink === "/Contacts" ? "scale-115" : "scale-100"
                            }`}
                    >
                        MyContact
                    </Link>
                </div>
                {/* For Mobile Screen */}
                <button className="sm:hidden text-2xl cursor-pointer hover:scale-110 duration-150" onClick={() =>setIsOpen(!isOpen) }>
                ☰
                </button>

                {/* for hamburger functionality  */}
                {isOpen && (
                    <div className="absolute top-14 border-t right-0 flex flex-col w-full bg-black text-center items-center duration-300 sm:hidden ">
                        <Link to="/" className="py-2 text-white hover:text-gray-400 border-b-[1px] w-full  "onClick={() => setIsOpen(false)} >Home</Link>
                        <Link to="/aboutme" className="py-2 text-white hover:text-gray-400 border-b-[1px] w-full"onClick={() => setIsOpen(false)} >AboutMe</Link>
                        <Link to="/myprojects" className="py-2 text-white hover:text-gray-400 border-b-[1px] w-full" onClick={() => setIsOpen(false)}>MyProjects</Link>
                        <Link to="/contacts" className="py-2 text-white hover:text-gray-400 border-b-[1px] w-full" onClick={() => setIsOpen(false)}>ContactMe</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
