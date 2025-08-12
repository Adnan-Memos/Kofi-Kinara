export default function Banner() {
  return (
    <div className="bg-black text-[#bebfa8] text-md pb-8 pt-3 overflow-hidden whitespace-nowrap relative">
      <div className="inline-flex absolute animate-scroll">
        {/* Duplicate content multiple times to ensure seamless loop */}
        {[...Array(8)].map((_, i) => (
          <span key={i} className="font-manrope tracking-wider mx-0">
            KOFI KINARA → YOUR CURATED COFFEE GUIDE → DISCOVER THE BEST BREWS NEAR YOU → 
          </span>
        ))}
      </div>
      {/* Clone of the content to ensure smooth transition */}
      <div className="inline-flex absolute animate-scroll2" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="font-manrope tracking-wider mx-0">
            KOFI KINARA → YOUR CURATED COFFEE GUIDE → DISCOVER THE BEST BREWS NEAR YOU → 
          </span>
        ))}
      </div>
    </div>
  );
}
