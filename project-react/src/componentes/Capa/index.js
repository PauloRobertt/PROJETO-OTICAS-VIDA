import React from "react";
import './style.css'

export default function Capa(){
    return(
        <div className="section-Capa">
            <img className="img-capa" src="assets/capa.png" alt="Imagem Capa"/>
            <div className="conteudo-Capa">
                <p>Preços baixos em</p>
                <h1>
                    ÓCULOS DE GRAU E DE SOL
                </h1>
                <p>Você só encontra aqui</p>
            </div>
        </div>
    )
}