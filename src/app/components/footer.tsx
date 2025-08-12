"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#BEC1A7] font-manrope">
      <div className="w-full mx-auto px-4 pt-4 sm:px-8 sm:pt-8 pb-9">
        {/* Top Section */}
        <div className="flex flex-row justify-between items-start md:items-center mb-12 gap-5 ">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              We&apos;d love to hear from you!
            </h2>
            <p className=" text-xs sm:text-sm md:text-base">
              Created by Adnan Memos & Sanjana Masam
            </p>
          </div>
          <div className="self-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-0"
            >
              <Image
                src="/above.svg"
                alt="Scroll to top"
                width={60}
                height={10}
              />
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-6">
          <h3 className="text-base sm:text-lg underline decoration-1 underline-offset-2 mb-2">
            Contribute to our Project
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline decoration-1 underline-offset-2 flex items-center"
            >
              <span>Github</span>
              <Image
                src="/crossarrow.svg"
                alt="External link"
                width={10}
                height={10}
                className="ml-1"
              />
            </a>
            <a
              href="https://ko-fi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline decoration-1 underline-offset-2 flex items-center "
            >
              <span>Buy us a Kofi</span>
              <Image
                src="/crossarrow.svg"
                alt="External link"
                width={10}
                height={10}
                className="ml-1"
              />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-6 mt-16">
          <h3 className=" text-base sm:text-lg underline decoration-1 underline-offset-2 mb-2">
            Sign up for our newsletter (No spam)
          </h3>
          <form className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-[#BEC1A7] focus:outline-none text-sm md:text-base py-1 w-full pr-10 placeholder-[#555555]"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Image
                src="/arrow.svg" // Replace with your actual image path
                alt="Submit"
                width={14}
                height={10}
              />
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline decoration-1 underline-offset-2 flex items-center text-sm md:text-base"
          >
            <span>Instagram</span>
            <Image
              src="/crossarrow.svg"
              alt="External link"
              width={10}
              height={10}
              className="ml-1"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline decoration-1 underline-offset-2 flex items-center text-sm md:text-base break-all"
          >
            hello@kofikinara.com
            <Image
              src="/crossarrow.svg"
              alt="External link"
              width={10}
              height={10}
              className="ml-1"
            />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mt-16 sm:mt-24 space-y-6 lg:space-y-0 ">
          {/* Left Section */}
          <span className="text-7xl sm:text-8xl md:text-9xl lg:text-11xl max-w-[65%] md:max-w-[70%] font-extrabold text-[#BEC1A7] leading-none text-center lg:text-left ">
            Kofi Kinara
          </span>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center sm:items-start lg:items-end space-y-4 sm:space-y-0 sm:space-x-12 text-sm md:text-lg text-[#BEC1A7]">
            {/* Hyderabad - India */}
            <span className="text-center sm:text-left">Hyderabad - India</span>

            {/* ©2025 and Terms of Use */}
            <div className="flex flex-row gap-2 lg:flex-col items-center sm:items-start lg:items-end">
              <span>©2025</span>
              <a href="#" className="hover-underline">
                Terms of use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
