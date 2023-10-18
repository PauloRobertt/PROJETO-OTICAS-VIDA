import React from 'react';
import './style.css';

export default function Contato(){
    return(
        <section id='contato' className="section-contato">
            <div className='secao-limitada'>
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="redecontato">
                    <div className="contatos">
                        <h4>Contato</h4>
                        <div className='secao-info'>
                            <img className="icone" src="assets/local.png" alt="icone-local"/>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className='secao-info'>
                            <img className="icone" src="assets/telefone.png" alt="icone-telefone"/>
                            <p>(21)9999-9999</p>
                        </div>
                        <div className='secao-info'>
                            <img className="icone" src="assets/email.png" alt="icone-email"/>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className="contatos">
                        <h4>Nossas Redes Sociais</h4>
                        <div>
                            <div className='secao-info'>
                                <img className="icone" src="assets/fb.png" alt="icone-facebook"/>
                                <p>/OticaVida</p>
                            </div>
                            <div className='secao-info'>
                                <img className="icone" src="assets/ig.png" alt="icone-instagram"/>
                                <p>@oticavidarj</p>
                            </div>
                            <div className='secao-info'>
                                <img className="icone" src="assets/tt.png" alt="icone-tt"/>
                                <p>@oticavidarj</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}