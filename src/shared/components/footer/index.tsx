import logo from "@/assets/Bullying Map_Wireframe_Sobre_v5-03.png"
// import arvore from '../../../features/edital/images/arvore.png'

export default function Footer() {
  return (
    <footer className="w-full p-14 flex justify-between items-center bg-azulClaro md:mt-24 flex-col xl:flex-row gap-4">
        <div className="hidden flex-col xl:flex flex-1">
          <span className="font-bold text-white">EMAIL</span>
          <span className="text-white">BULLYINGMAP.FAPDF@GMAIL.COM</span>
        </div>
        <div className="flex justify-center gap-6 flex-1">
          <div className="w-20 h-20 -mt-[136px] bg-azulClaro hidden md:block"></div>
          <img src={logo} className="h-40"/>
          <div className="w-20 h-20 bg-fundo -mt-14 hidden md:block"></div>
        </div>
        <div className="flex flex-col xl:hidden items-center">
          <span className="font-bold text-white">EMAIL</span>
          <span className="text-white">BULLYINGMAP.FAPDF@GMAIL.COM</span>
        </div>
        <div className="flex flex-col flex-1 xl:items-end items-center">
          <span className="font-bold text-white">INSTAGRAM</span>
          <span className="text-white">@BULLYINGMAP</span>
        </div>
      {/* <img className='absolute -top-[8.5rem] left-[60%] w-1/3' src={arvore} alt="Arvore" /> */}
    </footer>
  )
}
