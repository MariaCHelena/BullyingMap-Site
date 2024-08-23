import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return<header>
        <Link to={'/BullyingMap-Site'}></Link>
        <Link to={'*'}></Link>
        <Link to={'*'}></Link>
        <Link to={'*'}></Link>
        <Link to={'*'}></Link>
    </header>
}