import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 0.1rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:1000px;
    
    @media (min-width: 992px) {
        margin-top: 15rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 3.5rem;
        &::before {
            content: open-quote;
            font-size: 8rem;
            color: black;
            position: absolute;
            left: -0.5rem;
            top: -1.5rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.2rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 1.2rem;
    }
`;
const Frase  = ({frase}) => {


    return ( 
        <ContenedorFrase>
            <h1>{frase.quote} </h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
     );
}
 
export default Frase;
