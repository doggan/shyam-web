import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faBars } from "@fortawesome/free-solid-svg-icons";

interface INavBarProps { }

import React from "react";

export default function Navbar(_: INavBarProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="fixed w-full top-0 z-20 flex flex-wrap items-center justify-between py-3 bg-zinc-800 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center justify-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >

                        {/* hidden space-x-8 lg:flex justify-center text-zinc-400 font-bold uppercase tracking-widest text-sm */}
                        <ul className="flex flex-col lg:flex-row list-none justify-center space-x-8 text-zinc-400 font-bold uppercase tracking-widest text-sm">
                            <li className="nav-item">
                                <Link className="hover:text-white flex items-center" scroll={false} href="#home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hover:text-white flex items-center" scroll={false} href="#experience">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hover:text-white flex items-center" scroll={false} href="#projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}


// export default function NavBar(_: INavBarProps) {
//     const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


//     return (
//         <div className="fixed w-full top-0 z-20 bg-zinc-800 py-3">
//             <nav>
//                 <section className="MOBILE-MENU flex lg:hidden">
//                     <div
//                         className="HAMBURGER-ICON space-y-2"
//                         onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
//                     >
//                         <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//                         <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//                         <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
//                     </div>

//                     <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> // toggle class based on isNavOpen state
//                         <div
//                             className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
//                             onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
//                         >
//                             <svg
//                                 className="h-8 w-8 text-gray-600"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             >
//                                 <line x1="18" y1="6" x2="6" y2="18" />
//                                 <line x1="6" y1="6" x2="18" y2="18" />
//                             </svg>
//                         </div>
//                         <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
//                             <li className="border-b border-gray-400 my-8 uppercase">
//                                 <a href="/about">About</a>
//                             </li>
//                             <li className="border-b border-gray-400 my-8 uppercase">
//                                 <a href="/portfolio">Portfolio</a>
//                             </li>
//                             <li className="border-b border-gray-400 my-8 uppercase">
//                                 <a href="/contact">Contact</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </section>

//                 {/* Desktop menu */}
//                 <ul className="hidden space-x-8 lg:flex justify-center text-zinc-400 font-bold uppercase tracking-widest text-sm">
//                     <li>
//                         <Link className="hover:text-white" scroll={false} href="#home">Home</Link>
//                     </li>
//                     <li>
//                         <Link className="hover:text-white" scroll={false} href="#projects">Projects</Link>
//                     </li>
//                     <li>
//                         <Link className="hover:text-white" scroll={false} href="#experience">Experience</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: absolute;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: white;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style>
//         </div>
//     );
// }
