import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import Layout from '../../components/Layouts'
import Input from '../../components/UI/Input'
const Signup = (props) => {

    const auth = useSelector(state => state.auth)
    if(auth.authenticate) {
        return <Redirect to={"/" }/>
    }
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="First Name"
                                            type="text"
                                            placeholder="First Name"
                                            onChange={()=>{}}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Last Name"
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={()=>{}}
                                        />
                                    </Col>
                                </Row>
                                <Input
                                    label="Email"
                                    placeholder="Email"
                                    value=""
                                    type="email"
                                    onChange={()=>{}}
                                />
                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    value=""
                                    type="password"
                                    onChange={()=>{}}
                                />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}

export default Signup
