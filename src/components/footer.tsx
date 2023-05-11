import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleUp } from "@fortawesome/free-regular-svg-icons";

// @ts-ignore
import Obfuscate from 'react-obfuscate';

interface IFooterProps { }

export default function Footer(_: IFooterProps) {
    return (
        <section className="bg-white">
            <Link href="#home" scroll={false} className="hover:text-sky-600">
                <FontAwesomeIcon className="text-4xl pt-10" icon={faCircleUp} />
            </Link>

            <FontAwesomeIcon icon={faEnvelope} /> <Obfuscate email="shyamguth@gmail.com" />
        </section>
    );
}
