import { useNavigate } from 'react-router-dom';
import cross from "@/assets/wireframe2_bullyingmap_mobile_SOBRE-07.png";

export default function HeaderModal({
  isOpen,
  handleClose,
  route
}: {
  isOpen: boolean,
  handleClose(): void,
  route: string
}) {
  const navigate = useNavigate();

  if (!isOpen)
    return null;

  return (
    <div className='absolute top-0 w-screen h-screen bg-[#00000048] z-50 flex 2xl:hidden'>
      <div className='h-full w-fit bg-fundo p-12'>
        <ul className="flex flex-col gap-7">
          <li onClick={handleClose} className='w-20 h-20 object-cover -mb-10 -ml-5 -mt-5' >
            <img src={cross} className='w-40 object-cover'/>
          </li>
          <li>
            <span
              onClick={() => {
                navigate("/BullyingMap-Site");
                handleClose();
              }}
              className="cursor-pointer font-bold hover:border-b-2 px-3"
              style={{
                borderBottom: route === 'BullyingMap-Site' ? '2px solid #F6A414' : '',
              }}
            >
              O PROJETO
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                navigate("/BullyingMap-Site/nossaequipe");
                handleClose();
              }}
              className="cursor-pointer font-bold hover:border-b-2 px-3"
              style={{
                borderBottom: route === 'BullyingMap-Site/nossaequipe' ? '2px solid #F6A414' : '',
              }}
            >
              NOSSA EQUIPE
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                navigate("/BullyingMap-Site/edital/cotacao-publica-precos-No-001/2024");
                handleClose();
              }}
              className="cursor-pointer font-bold hover:border-b-2 px-3"
              style={{
                borderBottom: route === 'BullyingMap-Site/edital/cotacao-publica-precos-No-001/2024' ? '2px solid #F6A414' : '',
              }}
            >
              EDITAL
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
