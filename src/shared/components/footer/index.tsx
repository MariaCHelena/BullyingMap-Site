import logo from "@/assets/Bullying Map_Wireframe_Sobre_v5-03.png";
import instagram from "@/assets/instagram.png";
import email from "@/assets/email.png";

export default function Footer() {
  return (
    <footer className="w-full px-14 py-20 flex justify-between items-center bg-azulClaro mt-24 flex-col-reverse md:flex-row gap-4">
      <div className="flex-1 flex flex-col gap-2 md:self-start">
        <div className="flex-row flex flex-1 items-center">
          <img
            src={email}
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm">INSTAGRAM</span>
            <span className="text-white text-sm">BULLYINGMAP.FAPDF@GMAIL.COM</span>
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center">
          <img
            src={instagram}
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm">EMAIL</span>
            <span className="text-white text-sm">@BULLYINGMAP</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 md:flex-1 self-center relative">
        <div className="w-20 h-20 md:-mt-[164px] lg:-mt-40 -mt-40 md:left-0 bg-azulClaro absolute"></div>
        <img src={logo} className="md:h-32 lg:h-40 h-40 pt-5 lg:pt-0"/>
        <div className="w-20 h-20 bg-fundo -mt-[84px] lg:-mt-20 hidden md:block absolute -right-24 xl:-right-0"></div>
      </div>
      <div className="flex-1 hidden md:flex"></div>
    </footer>
  )
}
