import React from "react";
import { Link } from "react-router-dom";

import logoBm from '../../../public/logo-bullyingmap.png'
import logoRedeDeApoio from '../../../public/RedeApoio.png'

export default function Header(){
    return<header className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-5">
            <Link to={'/BullyingMap-Site'}>O PROJETO</Link>
            <Link to={'*'}>RECURSOS</Link>
            <Link to={'*'}>DEPOIMENTOS</Link>
        </div>

        <img className="w-[20rem] h-[10rem]" src={logoBm} alt="" />
        
        <div className="flex justify-center items-center gap-5">
            <Link to={'*'}>NOSSA EQUIPE</Link>
            <Link to={'*'}>CONTATO</Link>
            <button>
                <img className="w-[10rem] h-[10rem] m-0" src={logoRedeDeApoio} alt="" />
            </button>
        </div>

    </header>
}