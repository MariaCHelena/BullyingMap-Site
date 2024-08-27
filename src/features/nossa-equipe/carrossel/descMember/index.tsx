import React, { useEffect, useState } from "react";

import sol from '../../../../../public/sol.png'

interface PersonProps {
    id: number;
    foto: string;
    nome: string;
    codNome: string;
    funcao: string;
    descricao: string;
    linkLattes: string;
    onClick: (nome:string, codNome:string, funcao:string, descricao:string, linkLattes:string, index:number) => void;
    select: boolean;
}

const DescMember:React.FC<PersonProps> = ({id, nome, codNome, funcao, descricao, linkLattes}) => {
    const [image, setImage] = useState<string>('')

    useEffect(()=>{
        import(`../images/${id}.jpg`).then((img)=>{
            setImage(img.default)
        })
    },[id])
    
    return <div className="flex flex-col w-full mx-12">
        <div className="relative md:hidden flex justify-center items-center w-full">
            <img className="w-h-48 h-48 sm:w-60 sm:h-60 border-8 border-amarelo" src={image} alt="" />
            <img src={sol} alt="Sol" className="absolute top-center right-0 w-1/6 sm:w-1/5" />
        </div>
        <h3 className="text-azul font-bold text-2xl text-center md:text-start">{codNome}</h3>
        <h4 className="text-azul text-xl italic text-center md:text-start">{nome}</h4>
        <h4 className="text-azul text-xl italic text-center md:text-start">{funcao}</h4>
        <p className="my-2 text-preto text-base md:text-xl text-center md:text-justify">{descricao}</p>
        <a className="text-laranja font-bold text-lg text-center md:text-start" href={linkLattes}>LINK LATTES</a>
</div>
}

export default DescMember