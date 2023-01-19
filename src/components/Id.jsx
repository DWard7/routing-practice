import React from 'react'
import { Container } from '@mantine/core'
import { useParams } from 'react-router-dom';


function Id() {
    const { id } = useParams();


    const CheckValue = (props) => {
        if (isNaN(id)) {
            return(<h1>the word is: {id}</h1>);
        } else {
            return(<h1>the number is: {id}</h1>);
        }
    }

    return (
        <Container size={200} px={0} sx={{ marginTop: 20 }}>
            <CheckValue />
        </Container>
    )
}

export default Id;