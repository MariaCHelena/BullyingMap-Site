import React, { useEffect, useState } from 'react';
import abelha from '../../../../public/abelha.png'


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
        import(image).then((img)=>{
            setImage(img.default)
        })
    },[image])

    return(<>
    <img className='w-10 h-10' src={abelha} alt="" />
    <button onClick={() => onClick(nome, codNome, funcao, descricao, linkLattes, id)}>
        <img className='w-10 h-10' src={image} alt="" />
        <p>{nome.split(' ')[0]}</p>
    </button>
    </>)
}

export default CardMember