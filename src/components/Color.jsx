import React from 'react'
import { Container } from '@mantine/core'
import { useParams } from 'react-router-dom';


function Color() {
    const { color } = useParams();
    const { hello } = useParams();
    const { color1 } = useParams();

    const CheckColor = (props) => {
        if (isNaN(hello)) {
            return (<h1 style={{ color }}>The word is: {hello}</h1>);
        } else {
            return (<h1>The number is: {hello}</h1>);
        }
    }

    return (
        <Container style={{ background: color1 }} sx={{ marginTop: 20 }}>
            <CheckColor />
        </Container>
    )
}

export default Color;