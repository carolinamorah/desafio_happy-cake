import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pastel from '../assets/img/pastel.jpg';
import cookies from '../assets/img/cookies.jpg';
import cupcakes from '../assets/img/cupcakes.jpg';
import torta from '../assets/img/torta.png';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
        <section className="spikes container-fluid justify-content-center text-center pe-5 ">
            <div className='hero d-flex flex-nowrap'>
            <div className='hero_title col-xl-8 col-xs-12 col-sm-8 mt-5'>
                <h1 className='title'>Bienvenidos a Happy Cake</h1>
                <h3 className='subtitle'>El lugar de los pasteles felices</h3>
                <Link to="/contacto" className="text-decoration-none"> <button className='btn-header rounded-5'>Haz tu pedido</button></Link>
            </div>
            <img src={torta} className='hero-img col-4 ' alt="pastelheader" />
            </div>
        </section>

        <main className='main mb-5'>
            <h1 className='productos text-center my-5'>Nuestros Productos</h1>
            
            <CardGroup className='cards'>
            <Card>
                <Card.Img className='card-img' variant="top" src={pastel} />
                <Card.Body>
                <Card.Title className="card-title text-center">Tortas a pedido</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img className='card-img' variant="top" src={cookies} />
                <Card.Body>
                <Card.Title className="card-title text-center">Galletas</Card.Title> 
                </Card.Body>     
            </Card>
            <Card>
                <Card.Img className='card-img' variant="top" src={cupcakes} />
                <Card.Body>
                <Card.Title className="card-title text-center">Cupcakes</Card.Title>  
                </Card.Body>   
            </Card>
            </CardGroup>
        </main>
    </div>
    )
}

export default Home
