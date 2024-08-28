import { useState, useRef } from "react"
import CardMember from "./cardMember"
import DescMember from "./descMember";
import membros from "@/mocks/membros";

import bluBlockLeft from '../images/blue-blocks-l.png'
import bluBlockRight from '../images/blue-blocks-r.png'

import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/16/solid";

export default function Carrossel(){
    const carrossel = useRef(null)

    interface PersonProps {
        id: number,
        nome: string;
        codNome: string;
        funcao: string;
        descricao: string;
        linkLattes: string;}

    const [membroTarget, setMembroTarget] = useState<PersonProps>({
        id: 0,
        nome: '',
        codNome: '',
        funcao: '',
        descricao: '',
        linkLattes: '',
    })

    const handleClick = (nome:string, codNome:string, funcao:string, descricao:string, linkLattes:string, id:number) => {
        if(id === membroTarget.id){
            setMembroTarget({
                id: 0,
                nome: '',
                codNome: '',
                funcao: '',
                descricao: '',
                linkLattes: '',
            })
        } else {
            setMembroTarget({
                id: id,
                nome: nome,
                codNome: codNome,
                funcao: funcao,
                descricao: descricao,
                linkLattes: linkLattes,
            })
        }
    }

    const handleLeftClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const handleRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        carrossel.current.scrollLeft += carrossel.current.offsetWidth        
    }

    return <div className="flex flex-col-reverse md:flex-col justify-center items-center w-full">
        <span className="flex gap-2 sm:gap-5 justify-center w-11/12">
            <button onClick={handleLeftClick}>
                <ArrowLongLeftIcon className="size-6 sm:size-8 text-azulMedio bg-transparent"/>
            </button>

            <div ref={carrossel} className="overflow-auto scrollbar-hide w-full flex gap-2 sm:gap-6 overflow-x-auto scroll-smooth">
                {membros.map((membro, index) =>
                    <div className='flex flex-none flex-col-reverse md:flex-col justify-center items-center' key={index}>
                        <CardMember 
                        id={membro.id}
                        nome={membro.nome} 
                        codNome={membro.codNome} 
                        linkLattes={membro.linkLattes} 
                        descricao={membro.descricao}
                        funcao={membro.funcao}
                        onClick={handleClick}
                        select={membroTarget.id === membro.id}/>
                    </div>
                )}
            </div>

            <button onClick={handleRightClick}>
                <ArrowLongRightIcon className="size-6 sm:size-8 text-azulMedio bg-transparent"/>
            </button>
        </span>

        <span className="my-10 mx-0 flex justify-center md:justify-between items-center w-full">
            <img className="hidden md:block w-32 h-56 lg:w-48 lg:h-72" src={bluBlockLeft} alt="blocos azuis" />
            {(membroTarget.id !== 0) ? 
                <DescMember 
                id={membroTarget.id}
                nome={membroTarget.nome}  
                codNome={membroTarget.codNome} 
                linkLattes={membroTarget.linkLattes} 
                descricao={membroTarget.descricao}
                funcao={membroTarget.funcao}/>
                :
                <div className="flex flex-col gap-10 items-center">
                    <h3 className="text-laranja font-bold text-2xl">Conheça a nossa equipe!</h3>
                    <h4 className="text-azul text-center text-xl italic">Clique na foto de cada membro e conheça um pouco de cada um.</h4>
                </div>
                        
            }
            <img className="hidden md:block w-52 h-56 lg:w-64 lg:h-72" src={bluBlockRight} alt="blocos azuis" />
        </span>
    </div>
}