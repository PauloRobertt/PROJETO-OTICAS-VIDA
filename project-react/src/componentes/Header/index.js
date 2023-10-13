import React from 'react';
import './style.css';

export default function Header(){
    return(
        <header>
            <img className="logo-img" src="assets/logo.png" alt="Logo"/>
            <div className="links-topo">
                <a href="">PRODUTOS</a>
                <a href="">SOBRE</a>
                <a href="">CONTATO</a>
            </div>
        </header>
    );
}