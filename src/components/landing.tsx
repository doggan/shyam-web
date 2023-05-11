import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCircleDown } from "@fortawesome/free-regular-svg-icons";

// @ts-ignore
import Obfuscate from 'react-obfuscate';

interface ILandingProps { }

export default function Landing(_: ILandingProps) {
    return (
        <section id="home" className="top-0 w-full h-screen bg-landing bg-center bg-cover">
            <div className="relative h-full w-full text-center">
                <div className="absolute top-[8%] inset-x-0 font-bold text-6xl text-white drop-shadow-lg">
                    Hello.
                </div>
                <div className="absolute bottom-[4%] inset-x-0 text-white drop-shadow-lg">
                    <p className="font-bold text-5xl">I'm Shyam.</p>
                    <p className="tracking-wide font-light text-lg pt-2">I'm a Software Engineer and Developer.</p>
                    <ul className="flex justify-center text-3xl">
                        <li className="p-3">
                            <a className="hover:text-sky-600" href="https://www.linkedin.com/in/shyamguth" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li className="p-3">
                            <a className="hover:text-sky-600" href="https://github.com/doggan" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="p-3">
                            <Obfuscate className="hover:text-sky-600" email="shyamguth@gmail.com" aria-label="Email Me">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Obfuscate>
                        </li>
                    </ul>
                    <Link href="#projects" scroll={false} className="hover:text-sky-600">
                        <FontAwesomeIcon className="text-4xl pt-6" icon={faCircleDown} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
