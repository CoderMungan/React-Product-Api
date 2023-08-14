import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Cards({ id, data, title, description, img }) {

    // Obje olarak aldığımız veriyi Link to ile yollayamadık eğer ki komponenti çağırdığımızda tek sayfa veriye ulaşamadık
    // Bu sebepten dolayı Route kütüphanesi aklımıza geldi onda da hata aldık.

    return (

        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Link to={`/urunler/${id}`}>
                        <Card.Title>{title}</Card.Title>
                    </Link>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/urunler/${id}`}><Button variant="primary">Detaya Git</Button></Link>
                </Card.Body>
            </Card>
        </>


    )
}
