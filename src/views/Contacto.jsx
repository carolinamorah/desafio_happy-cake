import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import cookies from '../assets/img/cookies.jpg';


const Contacto = () => {
    return (
        <div className='contacto'>
            <div className=''>
                <img className='contacto-img' src={cookies} alt="pastel-contacto" />
            </div>
            <Form className='formulario '>
                <h1 className='title-contacto text-center'>Contáctanos</h1>
                <h4 className='subtitle-contacto text-center'>Solo debes ingresar tus datos y hacer tus pedidos</h4>
                <Form.Group className="nombre mb-3 mt-5" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Juan Pérez" />
                </Form.Group>
                <Form.Group className="email mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="nombre@example.com" />
                </Form.Group>
                <Form.Group className="texto mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Texto</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className='btn-submit w-100 rounded-5' variant="primary" type="submit">
                    Enviar pedido
                </Button>
            </Form>
        </div>
    )
}

export default Contacto
