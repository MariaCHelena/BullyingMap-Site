import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return<header className="flex gap-5">
        <Link to={'/BullyingMap-Site'}>O PROJETO</Link>
        <Link to={'/BullyingMap-Site/nossaequipe'}>NOSSA EQUIPE</Link>
        <Link to={'*'}></Link>
        <Link to={'*'}></Link>
        <Link to={'*'}></Link>
    </header>
}