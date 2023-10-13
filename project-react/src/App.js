import React from 'react';

import Header from './componentes/Header';
import Conteudo from './componentes/Conteudo';
import Footer from './componentes/Footer';

export default function App(){
    return(
        <div className="container">
            <Header/>
            <Conteudo/>
            <Footer/>
        </div>
    );
}