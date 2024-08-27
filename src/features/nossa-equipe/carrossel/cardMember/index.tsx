import React, { useEffect, useState } from 'react';
import abelha from '../../../../../public/abelha.png'

interface PersonProps {
    id: number,
    foto: string;
    nome: string;
    codNome: string;
    funcao: string;
    descricao: string;
    linkLattes: string;
    onClick: (nome:string, codNome:string, funcao:string, descricao:string, linkLattes:string, index:number) => void;
}

const CardMember: React.FC<PersonProps> = ({id, foto, nome, codNome, funcao, descricao, linkLattes, onClick}) => {
    const [image, setImage] = useState<string>(foto)

    useEffect(()=>{
        import(`../../../../assets/membros/${id}.jpg`).then((img)=>{
            setImage(img.default)
        })
    },[])

    return(<div className='flex flex-none flex-col justify-center items-center'>
    <img className='w-28 h-28' src={abelha} alt="" />
    <button onClick={() => onClick(nome, codNome, funcao, descricao, linkLattes, id)}>
        <img className='w-[150px] h-[150px]' src={image} alt="" />
        <p className='text-xl'>{nome.split(' ')[0]}</p>
    </button>
    </div>)
}

export default CardMember