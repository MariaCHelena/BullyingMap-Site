import { useState, useRef } from "react"
import membros from "@/mocks/membros";
import CardMember from "./cardMember"

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

    return <span className="flex flex-col justify-center">
        <div className="flex gap-5 justify-center">
            <button onClick={handleLeftClick}>
                <ArrowLongLeftIcon className="size-8 text-blue-500 bg-transparent"/>
            </button>

            <div ref={carrossel} className="overflow-auto scrollbar-hide w-[80%] flex gap-10 overflow-x-auto scroll-smooth">
                {membros.map((membro) =>
                    <CardMember 
                    id={membro.id}
                    nome={membro.nome} 
                    foto={membro.foto} 
                    codNome={membro.codNome} 
                    linkLattes={membro.linkLattes} 
                    descricao={membro.descricao}
                    funcao={membro.funcao}
                    onClick={handleClick}/>
                )}
            </div>

            <button onClick={handleRightClick}>
                <ArrowLongRightIcon className="size-8 text-blue-500 bg-transparent"/>
            </button>
        </div>
        
        <div className="flex justify-center items-center mt-28">
            {
                (membroTarget.id !== 0) && <div className="flex flex-col w-2/3">
                    <h3 className="text-azul font-bold text-2xl">{membroTarget.codNome}</h3>
                    <h4 className="text-azul text-xl italic">{membroTarget.nome}</h4>
                    <h4 className="text-azul text-xl italic">{membroTarget.funcao}</h4>
                    <p className="my-2 text-preto text-xl text-justify">{membroTarget.descricao}</p>
                    <a className="text-laranja font-bold text-lg" href={membroTarget.linkLattes}>LINK LATTES</a>
                </div>
            }
        </div>
    </span>
}