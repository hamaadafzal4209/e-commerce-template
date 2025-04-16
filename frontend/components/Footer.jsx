"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../lib/data";

function Footer() {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt="Logo"
            className="w-32 mb-4"
            style={{ filter: "brightness(0) invert(1)" }}
            width={128}
            height={40}
          />
          <p className="text-gray-400 mb-4">
            The home and elements needed to create beautiful products.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 cursor-pointer"
            >
              <AiFillFacebook size={25} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 cursor-pointer"
            >
              <AiOutlineTwitter size={25} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 cursor-pointer"
            >
              <AiFillInstagram size={25} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 cursor-pointer"
            >
              <AiFillYoutube size={25} />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-white font-semibold mb-4">Company</h1>
          <ul>
            {footerProductLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.link}
                  className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-white font-semibold mb-4">Shop</h1>
          <ul>
            {footercompanyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.link}
                  className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-white font-semibold mb-4">Support</h1>
          <ul>
            {footerSupportLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.link}
                  className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t border-gray-500 py-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl">
          <span className="text-gray-400 text-sm mb-2 sm:mb-0">
            © 2024 E-Shop. All rights reserved.
          </span>
          <span className="text-gray-400 text-sm mb-2 sm:mb-0">
            Terms · Privacy Policy
          </span>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <Image
              src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
              alt="Payment Methods"
              className="w-40"
              width={160}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;