import React, { useEffect } from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/Layouts'
import './style.css'

const Home = () => {
    return (
        <div>
            <Layout>
            <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">
                        Sidebar
                    </Col>
                    <Col md={10} style={{ marginLeft: 'auto'}}>
                        Container
                    </Col>
                </Row>
            </Container>
            </Layout>
        </div>
    )
}

export default Home
