import React from 'react'
import Card from 'react-bootstrap/Card';

function Card(props){
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
        </Card>
        
    
    );
}

