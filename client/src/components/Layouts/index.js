import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header/Header'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout
