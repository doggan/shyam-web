import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Obfuscate from 'react-obfuscate';

interface IFooterProps {
  email: string;
  githubUrl: string;
  linkedInUrl: string;
}

export default function Footer({
  email,
  githubUrl,
  linkedInUrl,
}: IFooterProps) {
  return (
    <section className="bg-white text-center pt-14 pb-6">
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
      <div className="font-light pb-1">
        Built by Shyam Guthikonda
        <span className="text-zinc-700 text-sm">
          &nbsp;©&nbsp;{new Date().getFullYear()}
        </span>
      </div>
      <div className="font-light">
        <FontAwesomeIcon icon={faEnvelope} /> <Obfuscate email={email} />
      </div>
      <div className="pt-2">
        <a
          className="hover:text-sky-600 text-zinc-800 text-3xl px-2"
          href={linkedInUrl}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className="hover:text-sky-600 text-zinc-800 text-3xl px-2"
          href={githubUrl}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
}
