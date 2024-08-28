import React, { useEffect, useState } from 'react';
import abelha from '../../../../../public/abelha.png'

import { ArrowLongRightIcon } from '@heroicons/react/16/solid';

interface PersonProps {
    id: number;
    nome: string;
    codNome: string;
    funcao: string;
    descricao: string;
    linkLattes: string;
    onClick: (nome:string, codNome:string, funcao:string, descricao:string, linkLattes:string, index:number) => void;
    select: boolean;
}

const CardMember = ({id, nome, codNome, funcao, descricao, linkLattes, onClick, select}: PersonProps) => {
    // const [select, setSelect] = useState(false)
    const [image, setImage] = useState<string>('')

    useEffect(()=>{
        import(`../images/${id}.jpg`).then((img)=>{
            setImage(img.default)
        })
    },[])

    return(<>
    <img className='w-h-20 md:w-28 h-20 md:h-28' src={abelha} alt="Abelah" />
    <button 
        className='flex flex-col justify-center items-center'
        onClick={() => {onClick(nome, codNome, funcao, descricao, linkLattes, id)}}>

        <img className={`w-h-32 h-32 md:w-36 md:h-36 border-8 ${select ? 'border-amarelo' : 'border-azulClaro'}`} src={image} alt="" />

        <div className='relative flex flex-col justify-center items-center mt-5'>
            <div className={`absolute top-[-8px] w-5 h-5 rotate-45 ${select ? 'bg-amarelo' : 'bg-azulMedio'}`}></div>

            <p className={`${select ? 'text-azulMedio' : 'text-white'} text-lg ${select ? 'bg-amarelo' : 'bg-azulMedio'} font-bold w-28 h-11 rounded-2xl flex flex-row justify-center items-center gap-2`}>

                {nome.split(' ')[0]} <ArrowLongRightIcon className={`size-6 ${select ? 'text-azulMedio' : 'text-white'} bg-transparent`}/>
            </p>
        </div>
   
    </button>
    </>)
}

export default CardMember