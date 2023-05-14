import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Obfuscate from 'react-obfuscate';

interface ILandingProps {}

export default function Landing(_: ILandingProps) {
  return (
    <section
      id="home"
      className="top-0 w-full h-screen bg-landing bg-center bg-cover"
    >
      <div className="relative h-full w-full text-center">
        <div className="absolute top-[8%] inset-x-0 font-bold text-6xl text-white drop-shadow-lg">
          Hello.
        </div>
        <div className="absolute bottom-[2%] inset-x-0 text-white drop-shadow-lg">
          <p className="font-bold text-5xl">I&#39;m Shyam.</p>
          <p className="tracking-wide font-light text-lg pt-2">
            I&#39;m a Software Engineer and Developer.
          </p>
          <ul className="flex justify-center text-3xl pb-2">
            <li className="p-2.5">
              <a
                className="hover:text-sky-600"
                href="https://www.linkedin.com/in/shyamguth"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="p-2.5">
              <a
                className="hover:text-sky-600"
                href="https://github.com/doggan"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="p-2.5">
              <Obfuscate
                className="hover:text-sky-600"
                email="shyamguth@gmail.com"
                aria-label="Email Me"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Obfuscate>
            </li>
          </ul>
          <div className="flex justify-center">
            <Link
              href="#experience"
              scroll={false}
              className="hover:bg-sky-600 text-white border-solid border-2 border-white w-[48px] h-[48px] block rounded-full"
            >
              <FontAwesomeIcon
                className="text-2xl pt-[10px]"
                icon={faChevronDown}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
