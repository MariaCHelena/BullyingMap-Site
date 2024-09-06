import { useEffect, useState } from "react";
// nada
import sol from '../../../../../public/sol.png'

interface PersonProps {
    id: number;
    foto?: string;
    nome: string;
    codNome: string;
    funcao: string;
    descricao: string;
    linkLattes: string;
    onClick?: (nome:string, codNome:string, funcao:string, descricao:string, linkLattes:string, index:number) => void;
    select?: boolean;
}

const DescMember = ({id, nome, codNome, funcao, descricao, linkLattes}: PersonProps) => {
    const [image, setImage] = useState<string>('')

    useEffect(()=>{
        import(`../images/${id}.jpg`).then((img)=>{
            setImage(img.default)
        })
    },[id])
    
    return <div className="flex flex-col w-11/12 mx-12">
        <div className="relative md:hidden flex justify-center items-center w-full">
            <img className="w-40 h-40 sm:w-60 sm:h-60 border-8 border-amarelo" src={image} alt="" />
            <img src={sol} alt="Sol" className="absolute top-center right-0 w-1/6 sm:w-1/5" />
        </div>
        <h3 className="text-azul font-bold text-2xl text-center md:text-start">{codNome}</h3>
        <h4 className="text-azul text-xl italic text-center md:text-start">{nome}</h4>
        <h4 className="text-azul text-xl italic text-center md:text-start">{funcao}</h4>
        <p className=" text-preto text-base sm:text-lg text-center md:text-justify">{descricao}</p>
        <a className="text-laranja font-bold text-lg text-center md:text-start" href={linkLattes} target="__blank">LINK LATTES</a>
</div>
}

export default DescMember