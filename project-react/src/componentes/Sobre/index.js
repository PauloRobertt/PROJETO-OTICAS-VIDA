import React from "react";

export default function Sobre(){
    return(
        <div className="section-sobre">
            <h2>QUEM SOMOS NÓS?</h2>
            <p>
                Fundada em 2001, em Nova Iguaçu - Rio de Janiero, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
            </p>
            <div className="section-cards">
                <img src="assets/loja.png" alt="Imagem loja"/>
                <div className="cards">
                    <h3>NOSSAS FILIAIS</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div>
                    <h3>ATENDIMENTO FLEXIVEL</h3>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>
                <img src="assets/atendimento.png" alt="Imagem atendimento"/>
            </div>
        </div>
    );
}