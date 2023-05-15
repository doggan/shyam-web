import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faBars } from '@fortawesome/free-solid-svg-icons';

interface INavBarProps {}

import React from 'react';

export default function Navbar(_: INavBarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {/* Ref: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars#pablo */}
      <nav className="fixed w-full top-0 z-20 flex flex-wrap items-center justify-between py-2 lg:py-3 bg-zinc-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
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
              'lg:flex flex-grow items-center justify-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className="flex flex-col lg:flex-row list-none place-items-center justify-center lg:space-x-8 space-y-4 lg:space-y-0 text-zinc-400 font-bold uppercase tracking-widest text-sm">
              <li className="nav-item">
                <Link
                  onClick={() => setNavbarOpen(false)}
                  className="hover:text-white flex items-center"
                  scroll={false}
                  href="#home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setNavbarOpen(false)}
                  className="hover:text-white flex items-center"
                  scroll={false}
                  href="#experience"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setNavbarOpen(false)}
                  className="hover:text-white flex items-center"
                  scroll={false}
                  href="#projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
