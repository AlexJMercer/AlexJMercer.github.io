import Image from "next/image";

import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/content/siteMetadata";
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
import Link from "next/link";

const Home = () => {
  const renderBackground = (images: Array<string>) => {
    const randomImage = Math.floor(Math.random() * images.length);
    return images[randomImage];
  };

  const images = [
    "https://i.imgur.com/p7kPVCN.jpg",
    "https://i.imgur.com/YFUEbBx.jpg",
    "https://i.imgur.com/Qw6LuRE.jpg",
    "https://i.imgur.com/KMN1KQ5.jpg",
  ];

  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="sticky top-16"></div>
      <section className="relative">
        <Image
          src={renderBackground(images)}
          className="object-cover max-w-full min-home-screen filter-cyberpunk-ix"
          width={10000}
          height={10000}
          alt="Ultimate Mercer Logo"
        />
        <div className="absolute p-4 inset-0 flex items-center">
          <div className="container mx-auto p-6 rounded-2xl max-w-5xl bg-dark-500/75">
            <Image
              src="/images/ultimate-logo-red.svg"
              className="mx-auto d-block mb-4"
              width={200}
              height={200}
              alt="Ultimate Mercer Logo"
            />
            <h1 className="text-light-500 text-5xl font-bold border-b border-b-light leading-normal tracking-wider mb-2">
              Oi! Eu sou o Julian Silva da Cunha
            </h1>
            <h3 className="text-3xl text-light-500 mb-4">
              Desenvolvedor Front-end
            </h3>
            <div className="">
              <Link href="/" target="_blank">
                <div className="text-lg bg-light-500 text-dark-500 inline-block py-1 px-3 rounded-lg m-1 leading-normal">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </Link>
              <Link href="/" target="_blank">
                <div className="text-lg bg-light-500 text-dark-500 inline-block py-1 px-3 rounded-lg m-1 leading-normal">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </Link>
              <Link href="/" target="_blank">
                <div className="text-lg bg-light-500 text-dark-500 inline-block py-1 px-3 rounded-lg m-1 leading-normal">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </Link>
              <Link href="/" target="_blank">
                <div className="text-lg bg-light-500 text-dark-500 inline-block py-1 px-3 rounded-lg m-1 leading-normal">
                  <FontAwesomeIcon icon={faBehance} />
                </div>
              </Link>
              <Link href="/" target="_blank">
                <div className="text-lg bg-light-500 text-dark-500 inline-block py-1 px-3 rounded-lg m-1 leading-normal">
                  <FontAwesomeIcon icon={faMedium} />
                </div>
              </Link>
              <Link href="/" target="_blank">
                <div className="text-lg bg-light-500 text-dark-500 inline-block py-1 px-3 rounded-lg m-1 leading-normal">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
