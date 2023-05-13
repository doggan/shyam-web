import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleUp } from '@fortawesome/free-regular-svg-icons';
import Obfuscate from 'react-obfuscate';

interface IFooterProps {}

export default function Footer(_: IFooterProps) {
  return (
    <section className="bg-white text-center">
      <hr className="border-zinc-100 " />
      <Link href="#home" scroll={false} className="hover:text-sky-600">
        <FontAwesomeIcon className="text-4xl pt-10" icon={faCircleUp} />
      </Link>
      <br />
      <FontAwesomeIcon icon={faEnvelope} />{' '}
      <Obfuscate email="shyamguth@gmail.com" />
      {/* // TODO(shyam): more icon links here? */}
    </section>
  );
}
