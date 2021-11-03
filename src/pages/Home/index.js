import React, { useState}  from 'react';

import { ContainerPage, TitlePage } from "../../components/Main";

import BeenhereIcon from '@material-ui/icons/Beenhere';

const Page = () => {

 const [ valor, setValor] = useState(0);
 const [ user, setUser] = useState({
        id: 1,
        name: 'Fabinho Bitencourt',
        photo: 'https://img2.gratispng.com/20180331/eow/kisspng-computer-icons-user-clip-art-user-5abf13db298934.2968784715224718991702.jpg'
        
    });

function funcAumentar(){
    setValor(valor + 1);
}

function funcDiminuir(){
    setValor(valor - 1);
}

    return (

    

        <ContainerPage>
            <TitlePage> <BeenhereIcon /> Seja Bem Vindo!</TitlePage>
            <>
            <div>Quantidade de produtos no carrinho: <b>{ valor} </b></div>
            <button onClick={funcAumentar}>Adicionar + 1 no carrinho</button>
            <button onClick={funcDiminuir}>Remover -1 no carrinho</button>

            <hr />

            Nome do usuário: <b>{ user.name }</b><br />
            <img src={ user.photo }/> 





                </>
            
        </ContainerPage>
    );
}

export default Page;