import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Obfuscate from 'react-obfuscate';

interface IFooterProps {}

export default function Footer(_: IFooterProps) {
  return (
    <section className="bg-white text-center pt-10 pb-6">
      <hr className="border-zinc-400 opacity-60 text-center text-2xl w-5/6 m-auto" />
      <div className="flex justify-center relative -top-[24px]">
        <Link
          href="#home"
          scroll={false}
          className="hover:bg-sky-600 text-white bg-zinc-800 w-[48px] h-[48px] block rounded-full"
        >
          <FontAwesomeIcon className="text-2xl pt-[10px]" icon={faChevronUp} />
        </Link>
      </div>
      <div className="font-light pb-1">Built by Shyam Guthikonda</div>
      <div className="font-light">
        <FontAwesomeIcon icon={faEnvelope} />{' '}
        <Obfuscate email="shyamguth@gmail.com" />
      </div>
    </section>
  );
}
