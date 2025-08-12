"use client";

import Banner from "./components/banner";
import Image from "next/image";
import Bannerbelow from "./components/marqueeleft";
import Bannerabove from "./components/marqueeright";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />

      {/* Main Content */}
      <main className="max-w-7xl lg:max-w-full mx-auto px-4 py-4 sm:px-8 sm:py-8">
        {/* Text and Image Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-[58%]">
            <h1 className="font-hind text-[48px] sm:text-[64px] lg:text-[108px] mt-12 font-medium">
              कॉफी किनारा
            </h1>
            <p className="font-manrope font-regular text-base sm:text-lg lg:text-xl text-justify leading-relaxed">
              From aromatic brews to cozy vibes, Hyderabad&apos;s cafes have
              something for everyone. We&apos;ve brought together the finest
              cafes for every mood and moment. Whether you&apos;re a coffee
              connoisseur or just looking for a place to relax, this is your
              guide to it all. Enjoy the best of the city, one cup at a time.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center w-full md:w-auto">
            <Image
              src="/log.svg"
              alt="Coffee Cup"
              width={180}
              height={80}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
            />
          </div>
        </div>

        {/* Featured Cafes and Brew Guides Section */}
        <div className="flex flex-col md:flex-row items-stretch justify-between mt-14 gap-8">
          {/* Left Box */}
          <div className="w-full md:w-[49%] border-2 md:border-3 border-black rounded-xl p-6 min-h-[300px] md:min-h-[450px] lg:min-h-[550px] flex flex-col justify-between items-start">
            <Image
              src="/logo1.svg"
              alt="Kofi Kinara Logo 1"
              width={180}
              height={80}
              className="mx-auto my-auto w-full max-w-[180px] md:max-w-[220px] lg:max-w-[290px]"
            />
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-left w-full">
              Featured Cafes
            </p>
          </div>

          {/* Right Box */}
          <div className="w-full md:w-[49%] border-2 md:border-3 border-black rounded-xl p-6 min-h-[300px]  lg:min-h-[550px] flex flex-col justify-between items-start">
            <Image
              src="/cups1.svg"
              alt="Kofi Kinara Logo 2"
              width={180}
              height={80}
              className="mx-auto my-auto w-full max-w-[180px] md:max-w-[220px]  lg:max-w-[290px]"
            />
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-left w-full">
              Brew Guides
            </p>
          </div>
        </div>

        {/* Community Section */}
        <section className="mt-20 md:mt-40 text-center max-w-[90%] mx-auto ">
          {/* Logo Section */}
          <div className="mb-8">
            <Image
              src="/croissant.svg"
              alt="Kofi Kinara Logo"
              width={180}
              height={80}
              className="mx-auto w-full max-w-[140px] md:max-w-[180px]  lg:max-w-[200px]"
            />
          </div>

          {/* Title Section */}
          <h1 className="text-2xl sm:text-6xl lg:text-7xl font-manrope font-bold mb-6 ">
            Your Community-Crafted Guide to Hyderabad&apos;s Coffee Culture
          </h1>

          {/* Subtitle Section */}
          <p className="text-sm sm:text-xl lg:text-2xl font-manrope font-medium mb-16 px-4 sm:px-12 lg:px-20">
            A place where coffee lovers connect, share their favorite spots, and
            help others discover the perfect brew. Join us in building
            Hyderabad&apos;s most trusted café community.
          </p>

          {/* Coffee Cup Card Section */}
          <div>
            <Image
              src="/mainpage1.svg"
              alt="Coffee Cup Illustration"
              width={1200}
              height={600}
              className="mx-auto w-full max-w-[95%] my-20 md:my-40"
            />
          </div>
        </section>

        {/* Marquee Sections */}
        <Bannerabove />
        <Bannerbelow />

        {/* Join Community Section */}
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-[#BEC1A7] text-black font-manrope mb-10">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-center ">
            {/* Left Text Column */}
            <div className="flex flex-col items-center sm:items-end">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Join Our
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Enthusiasts
              </span>
            </div>

            {/* Coffee Pot Image */}
            <div className="flex-shrink-0">
              <Image
                src="/pot.svg"
                alt="Coffee Pot"
                width={120}
                height={120}
                className="object-contain w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px]"
              />
            </div>

            {/* Right Text Column */}
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Coffee
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Community!
              </span>
            </div>
          </div>

          {/* Subtitle Section */}
          <p className="text-base sm:text-lg lg:text-xl font-medium mb-8 mt-8 text-center max-w-[800px]">
            Discover, Share, and Celebrate Coffee Together.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-row gap-2 sm:gap-10 justify-center items-center font-bold mt-6 w-full max-w-[800px]">
            <Link href="/share">
              <button className="px-6 sm:px-12 md:px-24 py-4 sm:py-6 bg-black text-[#bebfa8] text-sm sm:text-base md:text-2xl rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap">
                Review a Cafe!
              </button>
            </Link>
            <Link href="/cafe">
              <button className="px-6 sm:px-12 md:px-24 py-4 sm:py-6 bg-black text-[#bebfa8] text-sm sm:text-base md:text-2xl rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap">
                Add a New Cafe
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
