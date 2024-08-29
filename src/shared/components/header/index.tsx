import { useNavigate } from "react-router-dom";
import logo from "@/assets/wireframe2_bullyingmap_mobile_SOBRE-06.png";
import redeDeApoio from "@/assets/Icone_RedeApoio-03.png";

export default function Header(){

  const navigate = useNavigate();

  const route = window.location.href.split("/").slice(3).join("/");

  console.log(route)

  return (
    <header className="w-full">
      <ul className="px-56 flex w-full justify-between items-center">
        <li>
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
        <li>
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
        <li>
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
        <li className="self-start">
          <img src={logo} className="h-20 object-cover object-bottom"/>
        </li>
        <li>
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
        <li>
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
          <img src={redeDeApoio} className="h-24"/>
        </li>
      </ul>
    </header>
  )
}
