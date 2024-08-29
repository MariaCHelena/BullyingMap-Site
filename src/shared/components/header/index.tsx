import { useNavigate } from "react-router-dom";
import logo from "@/assets/wireframe2_bullyingmap_mobile_SOBRE-06.png";
import redeDeApoio from "@/assets/Icone_RedeApoio-03.png";
import burger from "@/assets/wireframe2_bullyingmap_mobile_SOBRE-08.png";
import HeaderModal from "@/shared/components/header-modal";
import { useState } from "react";

export default function Header(){

  const navigate = useNavigate();
  const route = window.location.href.split("/").slice(3).join("/");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderModal
        isOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
        route={route}
      />
      <header className="flex w-full mt-2">
        <ul className="px-4 flex flex-1 justify-between items-center
        lg:px-8 2xl:px-80">
          <li className="hidden md:block">
            <span
              onClick={() => navigate("/BullyingMap-Site")}
              className="cursor-pointer font-bold hover:border-b-2 hover:!border-azul px-3 transition-colors"
              style={{
                borderBottom: route === 'BullyingMap-Site' ? '2px solid #F6A414' : '',
              }}
            >
              O PROJETO
            </span>
          </li>
          <li className="hidden md:block">
            <span
              onClick={() => navigate("/BullyingMap-Site/nossaequipe")}
              className="cursor-pointer font-bold hover:border-b-2 hover:!border-azul px-3 transition-colors"
              style={{
                borderBottom: route === 'BullyingMap-Site/nossaequipe' ? '2px solid #F6A414' : '',
              }}
            >
              NOSSA EQUIPE
            </span>
          </li>
          <li className="hidden md:block">
            <span
              onClick={() => navigate("/BullyingMap-Site/edital/cotacao-publica-precos-No-001/2024")}
              className="cursor-pointer font-bold hover:border-b-2 hover:!border-azul px-3 transition-colors"
              style={{
                borderBottom: route === 'BullyingMap-Site/edital/cotacao-publica-precos-No-001/2024' ? '2px solid #F6A414' : '',
              }}
            >
              EDITAL
            </span>
          </li>
          <li className="block md:hidden cursor-pointer">
            <img src={burger} className="h-8" onClick={() => setModalOpen(true)}/>
          </li>
          <li className="flex-start mb-5">
            <img src={logo} className="md:h-16 h-12 w-full object-cover"/>
          </li>
          <li className="hidden md:block">
            <span
              onClick={() => navigate("/BullyingMap-Site")}
              className="cursor-pointer font-bold hover:border-b-2 hover:!border-azul px-3 transition-colors"
              style={{
                borderBottom: route === 'mudar depois' ? '2px solid #F6A414' : '',
              }}
            >
              RECURSOS
            </span>
          </li>
          <li className="hidden md:block">
            <span
              onClick={() => navigate("/BullyingMap-Site")}
              className="cursor-pointer font-bold hover:border-b-2 hover:!border-azul px-3 transition-colors"
              style={{
                borderBottom: route === 'mudar depois' ? '2px solid #F6A414' : '',
              }}
            >
              CONTATO
            </span>
          </li>
          <li>
            <img src={redeDeApoio} className="md:h-24 h-12 w-full"/>
          </li>
        </ul>
      </header>
    </>
  )
}
