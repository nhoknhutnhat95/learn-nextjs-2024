'use client'

import React from 'react';
// import './card.css'
import styled from 'styled-components'

const CardStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    background-color: ${props => props.primary ? 'white' : 'blue'};
`

function Card(props) {
    return (
        <CardStyled className='card text-4xl font-thin' primary>
            Card
        </CardStyled>
    );
}

export default Card;