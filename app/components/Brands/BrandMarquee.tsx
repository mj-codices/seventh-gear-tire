// Sample tire brands to populate the loop
const brands = [
  { name: 'FALKEN', style: 'font-sans tracking-widest font-black' },
  { name: 'SAMSON', style: 'font-serif tracking-wider font-extrabold italic' },
  { name: 'MICHELIN', style: 'font-sans tracking-tight font-black uppercase' },
  { name: 'GOODYEAR', style: 'font-sans tracking-wide font-extrabold italic' },
  { name: 'TOYO', style: 'font-sans tracking-widest font-bold' },
];

export default function BrandMarquee() {
  return (
    // Bottom Layer: The deeper base background
    <div className="relative w-full bg-stone-900 pb-9 pt-1 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap min-w-full pt-10">
          
          {/* First Loop Pass */}
          <div className="flex items-center gap-20 pr-20">
            {brands.map((brand, idx) => (
              <span
                key={`track1-${idx}`}
                className={`${brand.style} text-3xl text-stone-500 select-none transition-colors duration-300 hover:text-stone-300`}
              >
                {brand.name}
              </span>
            ))}
          </div>

          {/* Second Loop Pass (Perfect Duplicate for Seamless Loop) */}
          <div className="flex items-center gap-20 pr-20" aria-hidden="true">
            {brands.map((brand, idx) => (
              <span
                key={`track2-${idx}`}
                className={`${brand.style} text-3xl text-stone-500 select-none transition-colors duration-300 hover:text-stone-300`}
              >
                {brand.name}
              </span>
            ))}
          </div>

        </div>
      {/* THE SHADOW: Drops perfectly from the black section above onto this gray section */}
      {/* <div 
        className="absolute top-0 left-0 right-0 h-120 bg-gradient-to-b from-stone-950 via-stone-900 to-transparent pointer-events-none" 
        aria-hidden="true"
      /> */}
          {/* <div 
        className="absolute bottom-0 left-0 right-0 h-120 bg-gradient-to-t from-stone-950 via-stone-900 to-transparent pointer-events-none" 
        aria-hidden="true"
      /> */}
      {/* 
        Top Layer: The main card container. 
        Instead of a fixed height, we let content dictate it to prevent text clipping on small screens.
      */}
      <div className="relative mx-auto mt-20 w-[calc(100%-3rem)] rounded-md bg-stone-950 pb-9 pt-80 shadow-xl border-l border-r border-stone-800/50">
        
        {/* 
          The Brand Carousel Wrapper 
          Positioned absolutely to overflow the top of the card as requested.
          Uses a linear-gradient mask to create the seamless fade-in/fade-out effect on the edges.
        */}
        {/* <div 
          className="absolute -top-10 left-0 right-0 w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)'
          }}
        > */}
          {/* Flex container that moves using an infinite loop animation */}
          {/* <div className="flex w-max animate-marquee gap-8 py-2"> */}
            {/* Double the array length to ensure a seamless continuous loop gap-free */}
            {/* {[...BRANDS, ...BRANDS].map((brand, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 border border-stone-800 shadow-lg"
              >
                <span className="text-xl">{brand.logo}</span>
                <span className="font-semibold tracking-wide text-stone-200 text-sm">{brand.name}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Card Content Placeholder */}
        <div className="space-y-3">
          {/* <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Premium Sourcing
          </span>
          <h3 className="text-xl font-bold tracking-tight text-stone-100">
            World-Class Standards
          </h3>
          <p className="text-sm leading-relaxed text-stone-400">
            We partner directly with leading manufacturers to guarantee every tire passes rigorous performance, safety, and tread-life inspections before it ever reaches your vehicle.
          </p> */}
        </div>

      </div>
    </div>
  );
}
