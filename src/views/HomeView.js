import React from 'react';
import '../styles/homeView.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Row, Col, Container } from 'react-bootstrap';
import img_home_1 from '../img/img_home_1.jpg';
import IndexCarousel from '../components/IndexCarousel';
import ButtonIndex from '../components/ButtonIndex';

class HomeView extends React.Component{

    render(){
        return (
            <>
               
                <NavBar/>
                <Container>
                <section className="testimony">
                    <Row>
                        <Col md={7}>
                            
                                <h1 className="testimony-title">Testimonios</h1>
                                <p>Te invitamos a conocer testimonios reales de pacientes y familias que 
                                    conviven a diario con Lupus. 
                                </p>
                                <div className="div-testimony">
                                <a className="a-testimony" href="/testimonios">>Leer mas</a>
                                </div>
                        </Col>  
                        <Col md={5}>
                            <div className="img-container">
                                <img className="img-home" src={img_home_1} alt="Sobre Nosotros" />
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="work-approach">
                    <Row>
                        <Col>
                        <h1 className="work-approach-title">Enfoque de trabajo</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <IndexCarousel/>
                        </Col>
                    </Row>
                </section>
                <div className="get-involved">
                    <Row>
                        <Col>
                            
                                    <h1 className="get-involved-title">Involúcrate</h1>
                                    <p>¡A Lupus Chile nunca le sobran manos! Si quieres apoyarnos con tu trabajo 
                                        o aportes no dudes en contactarnos.
                                    </p>
                                
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}>
                        </Col>
                        <Col md={4}>
                            <ButtonIndex class="button" name="Participa" link="suscribete"/>
                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col md={4}>
                            <ButtonIndex class="button" name="Dona" link="dona"/>
                        </Col>
                        <Col md={1}>
                        </Col>
                    </Row>

                </div>

                </Container>
                <Footer/>
            </>
        )
    }
}

export default HomeView;