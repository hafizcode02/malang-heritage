import Hero from "@/components/Home/Hero";
import TouristSlider from "@/components/Home/TouristSlider";
export default function Home() {
  return (
    <div>
      <Hero />

      {/* History of Malang City */}
      <div className="w-full bg-[#edece9] text-[#847C65]">
        <div className="flex flex-col items-center justify-center gap-2 py-10">
          <h1 className="text-xl italic">STADSKAART</h1>
          <h1 className="text-2xl lg:text-4xl italic text-center font-semibold">
            <span className="hidden md:inline">—&nbsp;&nbsp;&nbsp;&nbsp;</span>
            HISTORY OF MALANG CITY
            <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;—</span>
          </h1>
          <div className="flex flex-row gap-2 py-10">
            <div className="flex gap-10 flex-col lg:flex-row px-6 lg:px-40">
              <img
                src="/history.webp"
                alt="history"
                className="w-full lg:w-1/2"
              />
              <p className="text-md text-justify">
                Malang is a charming city in East Java province, Indonesia,
                celebrated for its cool highland climate, stunning natural
                landscapes, and vibrant cultural heritage. Nestled among rolling
                hills and lush mountains, it offers a refreshing escape from
                tropical heat, with attractions like historical sites, ancient
                temples, and educational institutions that highlight its
                Javanese traditions and Dutch colonial influences.
                <br />
                As a major hub for tourism and agriculture, Malang blends modern
                life with rich history, drawing visitors for its markets,
                festivals, and famous apple orchards. Beyond its natural and
                cultural appeal, Malang thrives as an economic center driven by
                manufacturing, education, and farming, making it a popular
                destination for adventure and relaxation. The city's community
                spirit shines through local cuisine, bustling markets, and
                outdoor activities, positioning it as a hidden gem in Indonesia
                that attracts students, travelers, and nature lovers alike. With
                its mix of scenic beauty and historical depth, Malang continues
                to enchant those seeking a balanced getaway.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tourist Attraction */}
      <div className="w-full bg-[#D5D4D1] text-[#847C65]">
        <div className="flex flex-col items-center justify-center gap-2 py-10">
          <h1 className="text-2xl lg:text-4xl italic text-center font-semibold">
            <span className="hidden md:inline">—&nbsp;&nbsp;&nbsp;&nbsp;</span>
            TOURIST ATTRACTION
            <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;—</span>
          </h1>
          <div className="w-full flex flex-row gap-2 lg:pt-12">
            <TouristSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
