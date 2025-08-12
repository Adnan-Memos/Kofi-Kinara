import Image from "next/image";

export default function Bannerbelow() {
  const cards = [
    {
      description:
        "The garden vibe is beautiful and calming. The food is tasty, though the service can get a bit slow when it's crowded. Still worth it for the ambiance!",
      name: "Adnan Siddiqui",
      cafe: "Autumn Leaf Café",
      profileImg: "/profile.png",
    },
    {
      description:
        "Such a fun and quirky place! I always come here for the masala chai and cheese fries combo. It's perfect for chilling with friends.",
      name: "Adnan Siddiqui",
      cafe: "Chit Chat Chai",
      profileImg: "/profile.png",
    },
    {
      description:
        "This place is iconic! Their plum cake is unbeatable, and I always pair it with Irani chai. Great for a quick snack break during the day.",
      name: "Adnan Siddiqui",
      cafe: "Karachi Bakery Café",
      profileImg: "/profile.png",
    },
    {
      description:
        "Great platform for discovering Hyderabad cafés! It's easy to navigate, with detailed info on menus, hours, and ratings. Love the bookmark feature to save favorites. Adding a map view and user reviews would make it even better. Perfect for café hopping enthusiasts!",
      name: "Adnan Siddiqui",
      cafe: "Aaromale",
      profileImg: "/profile.png",
    },
  ];

  return (
    <div className="text-[#bebfa8] text-md pb-8 pt-3 mb-40 sm:mb-48 md:mb-56 lg:mb-72 whitespace-nowrap relative overflow-x-clip group -mx-4 sm:-mx-8">
      <div className="inline-flex absolute animate-scroll-rtl group-hover:paused">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {cards.map((card, index) => (
              <div
                key={index}
                className="mx-3 md:mx-4 border-2 border-[#000000] rounded-lg p-6 flex flex-col justify-between  min-h-44 min-w-80 sm:min-h-52 sm:min-w-90  md:min-h-60 md:min-w-100 lg:min-h-72 lg:min-w-104"
              >
                <p className="font-manrope font-normal text-black text-xs sm:text-sm md:text-base lg:text-xl whitespace-normal my-auto flex">
                  &quot;{card.description}&quot;
                </p>
                <div className="flex items-center justify-between  text-sm md:text-base lg:text-xl">
                  <div className="flex items-center gap-2">
                    <Image
                      src={card.profileImg}
                      alt=""
                      width={50}
                      height={50}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                    />
                    <span className="font-manrope font-medium text-black">
                      {card.name}
                    </span>
                  </div>
                  <span className="font-manrope text-gray-600">
                    {card.cafe}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className="inline-flex absolute animate-scroll2-rtl group-hover:paused"
        aria-hidden="true"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {cards.map((card, index) => (
              <div
                key={index}
                className="mx-3 md:mx-4 border-2 border-[#000000] rounded-lg p-6 flex flex-col justify-between  min-h-44 min-w-80 sm:min-h-52 sm:min-w-90  md:min-h-60 md:min-w-100 lg:min-h-72 lg:min-w-104"
              >
                <p className="font-manrope font-normal text-black text-xs sm:text-sm md:text-base lg:text-xl whitespace-normal my-auto flex">
                  &quot;{card.description}&quot;
                </p>
                <div className="flex items-center justify-between text-sm md:text-base lg:text-xl">
                  <div className="flex items-center gap-2">
                    <Image
                      src={card.profileImg}
                      alt=""
                      width={50}
                      height={50}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                    />
                    <span className="font-manrope font-medium text-black">
                      {card.name}
                    </span>
                  </div>
                  <span className="font-manrope text-gray-600">
                    {card.cafe}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
