import React from "react";
import './style.css';

import Capa from '../Capa';
import Contato from '../Contato';
import Produtos from '../Produtos';
import Sobre from '../Sobre';

export default function Conteudo(){
    return(
        <div className="section-conteudo">
            <Capa/>
            <Produtos/>
            <Sobre/>
            <Contato/>
        </div>
    );
}
