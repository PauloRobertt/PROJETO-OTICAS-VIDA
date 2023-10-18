import React from 'react';
import './style.css';

export default function Header(){
    return(
        <header className='secao-limitada'>
            <img className="logo-img" src="assets/logo.png" alt="Logo"/>
            <div className="links-topo">
                <a href="#produto">PRODUTOS</a>
                <a href="#sobre">SOBRE</a>
                <a href="#contato">CONTATO</a>
            </div>
        </header>
    );
}