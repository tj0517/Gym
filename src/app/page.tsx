import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-stone-950">
      {/* Tło z logo i hasłem */}
      <div className="w-full relative h-[90vh] overflow-hidden">
        <Image
          src="/b1.jpg"
          width={4933}
          height={2927}
          alt="tło"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 top-5 sm:left-10 sm:top-10">
          <Image src="/logo.svg" width={350} height={350} alt="logo" className="w-[150px] sm:w-[250px] md:w-[300px]" />
        </div>
        <div className="absolute w-[90%] sm:w-[70%] top-[35%] left-[5%] sm:left-[15%] text-[48px] sm:text-[64px] md:text-[96px] lg:text-[125px] font-black text-white text-center italic">
          BE YOUR <span className="text-yellow-200">BEST</span>
          <div
            id="inter"
            className="text-[16px] sm:text-[18px] text-black bg-yellow-200 w-[60%] sm:w-[30%] py-2 mx-auto mt-5 font-normal not-italic hover:cursor-pointer"
          >
            JOIN TODAY
          </div>
        </div>
      </div>

      {/* Sekcja "About" */}
      <div className="flex flex-col lg:flex-row w-full mt-[100px] pb-[100px] px-5 lg:px-0">
        <div className="lg:w-[30%] lg:ml-[10%] mt-[50px] flex flex-col">
          <div className="text-yellow-200 text-[42px] sm:text-[56px] lg:text-[70px] leading-tight italic">
            ABOUT OUR FIT FAMILY
          </div>
          <div id="inter" className="text-white text-[16px] sm:text-[18px] mt-[20px]">
            Astraeus was founded in 2001 by a group of friends, Bobby and Ben. Since then, we have expanded to over 115 locations nationwide!
          </div>
          <div id="inter" className="text-white text-[16px] sm:text-[18px] underline mt-[40px]">Learn more</div>
        </div>
        <div className="lg:w-[50%] lg:mx-[10%] mt-10 lg:mt-0 flex flex-row justify-center lg:justify-between gap-5">
          <Image
            src="/men_gym1.avif"
            width={900}
            height={1500}
            alt="men1"
            className="w-[45%] h-auto object-cover object-top"
          />
          <Image
            src="/men_gym2.avif"
            width={987}
            height={1481}
            alt="men2"
            className="w-[45%] h-auto mt-5 lg:mt-[100px] object-cover object-top"
          />
        </div>
      </div>

      {/* Co oferujemy */}
      <div className="w-full py-[80px] bg-stone-900 px-5">
        <div className="text-yellow-200 text-[42px] sm:text-[56px] lg:text-[70px] leading-tight mb-[40px] italic text-center">
          WHAT WE OFFER
        </div>
        <div id="inter" className="text-[16px] sm:text-[18px] text-white font-light text-center">
          We&apos;re committed to bringing you the best workout experience.
        </div>
        <div className="mt-[60px] flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-5">
          {[
            { src: "/gym1.avif", text: "TOUR OUR GYM" },
            { src: "/gym2.avif", text: "CHECK OUT OUR\nGROUP CLASSES" },
            { src: "/gym3.avif", text: "ASK ABOUT PERSONAL TRAINING" },
          ].map(({ src, text }, i) => (
            <div key={i} className="w-full sm:w-[90%] lg:w-[30%] relative">
              <Image
                src={src}
                width={987}
                height={1481}
                alt={`gym${i + 1}`}
                className="w-full h-[400px] object-cover object-top"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl text-center italic px-2 whitespace-pre-line">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full py-[80px] px-5">
        <div className="text-yellow-200 text-[42px] sm:text-[56px] lg:text-[70px] leading-tight mb-[40px] italic text-center">
          WHAT PEOPLE SAY
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-around">
          {[
            { src: "/people1.avif", name: "Ben Bleaker, 31" },
            { src: "/people2.avif", name: "Lauren Cross, 28" },
            { src: "/people3.avif", name: "Thomas Xue, 44" },
          ].map(({ src, name }, i) => (
            <div key={i} className="w-full md:w-[30%] h-[500px] bg-yellow-200 flex flex-col">
              <div className="w-full h-[65%] overflow-hidden relative">
                <Image
                  src={src}
                  width={987}
                  height={1481}
                  alt={`person${i + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                id="inter"
                className="mt-[25px] w-[85%] mx-auto text-black text-[15px] text-center"
              >
                Testimonials are short quotes from people who love your brand. It&apos;s a great way to convince customers to try your services.
                <div className="text-left text-lg mt-[25px]">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner kontaktowy */}
      <div className="w-full relative">
        <Image
          src="/gym_landscape.avif"
          width={987}
          height={1481}
          alt="gym landscape"
          className="w-full h-[400px] sm:h-[600px] object-cover object-top"
        />
        <div className="absolute top-[20%] left-[5%] w-[90%] sm:w-[60%] text-[36px] sm:text-[64px] lg:text-[80px] text-yellow-200 italic leading-tight">
          GET IN TOUCH TODAY
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-yellow-200 py-[50px] flex flex-col sm:flex-row justify-around items-start px-5 sm:px-0 gap-10">
        {[
          {
            title: "MAILING ADDRESS",
            text: "123 Anywhere St., Any City, ST 12345",
          },
          {
            title: "EMAIL ADDRESS",
            text: "hello@reallygreatsite.com",
          },
          {
            title: "PHONE NUMBER",
            text: "(123) 456-7890",
          },
        ].map(({ title, text }, i) => (
          <div key={i} className="sm:w-[30%] text-black text-2xl lg:text-3xl italic sm:text-center">
            {title}
            <div
              id="inter"
              className="text-lg lg:text-xl mt-[15px] font-light"
            >
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
