import React from "react";
import './style.css';

export default function Produtos(){
    return(
        <section className="section-produtos">
            <h2>NOSSOS PRODUTOS</h2>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            <div className="secao-oculos secao-limitada">
                <div className="produto-oculos">
                    <h3>Óculos de grau</h3>
                    <img src="assets/oculos01.png" alt="Óculos de grau"/>
                    <p>R$ 500,00</p>
                </div>
                <div className="produto-oculos">
                    <h3>Óculos transition</h3>
                    <img src="assets/oculos02.png" alt="Óculos transition"/>
                    <p>R$ 750,00</p>
                </div>
                <div className="produto-oculos">
                    <h3>Óculos de sol</h3>
                    <img src="assets/oculos03.png" alt="Óculos de Sol"/>
                    <p>R$ 700,00</p>
                </div>
                <div className="produto-oculos">
                    <h3>Óculos infantil</h3>
                    <img src="assets/oculos04.png" alt="Óculos infantil"/>
                    <p>R$ 500,00</p>
                </div>
            </div>
            <ul className="lista">
                <p>Todos os nossos produtos incluem:</p>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </section>
    );
}