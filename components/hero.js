/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
    return (
        <section className="section position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="pr-lg-5">
                            <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Lorem Ipsum</p>
                            <h1 className="mb-4 font-wight-normal line-height-1_4">Simply <span className="text-primary font-weight-medium">Name</span></h1>
                            <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
                            <a href="#" className="btn btn-warning">
                                Find Out How <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="/images/Adenike Ogunlesi.jpg" alt="" className="img-fluid mx-auto d-block"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;