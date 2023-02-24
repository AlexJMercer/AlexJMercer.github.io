import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithubSquare,
  faMedium,
  faBehanceSquare,
  faInstagram,
  faBehance,
  faGithub,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="max-w-full pt-4 px-6 pb-12 background-texture">
        <div className="container mx-auto">
          <div className="flex items-center justify-center py-2 mb-4 border-b border-b-dark-500 dark:border-b-light-500">
            <Link href="/" className="">
              <img
                src="/images/ultimate-logo-red.svg"
                className="hidden dark:block"
                width="120"
                height="120"
                alt="Ultimate Mercer Logo"
              />
            </Link>

            <Link href="/" className="">
              <img
                src="/images/ultimate-logo-dark.svg"
                className="block dark:hidden"
                width="120"
                height="120"
                alt="Ultimate Mercer Logo"
              />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="py-1 px-2">
              <p className="text-xl mb-4">
                Se gostou do que viu, fique a vontade para entrar em contato
                através das minhas redes sociais!
              </p>
              <p className="text-xl">Um abraço e até mais!!</p>
            </div>

            <div className="px-2">
              <h4 className="text-2xl font-bold mb-3">Contatos</h4>
              <div className="flex flex-wrap gap-2">
                <Link href="mailto:juliancunha2010@hotmail.com" target="_blank">
                  <div className="px-3 py-1 text-lg font-medium bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 flex items-center justify-center rounded-full my-1 leading-normal">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Email
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/ultimatemercer/"
                  target="_blank"
                >
                  <div className="px-3 py-1 text-lg font-medium bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 flex items-center justify-center rounded-full my-1 leading-normal">
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                    Instagram
                  </div>
                </Link>
                <Link
                  href="https://www.behance.net/ultimatemercer"
                  target="_blank"
                >
                  <div className="px-3 py-1 text-lg font-medium bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 flex items-center justify-center rounded-full my-1 leading-normal">
                    <FontAwesomeIcon icon={faBehance} className="mr-2" />
                    Behance
                  </div>
                </Link>
                <Link href="https://medium.com/@ultimatemercer" target="_blank">
                  <div className="px-3 py-1 text-lg font-medium bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 flex items-center justify-center rounded-full my-1 leading-normal">
                    <FontAwesomeIcon icon={faMedium} className="mr-2" />
                    Medium
                  </div>
                </Link>
                <Link href="https://github.com/UltimateMercer" target="_blank">
                  <div className="px-3 py-1 text-lg font-medium bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 flex items-center justify-center rounded-full my-1 leading-normal">
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    Github
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
