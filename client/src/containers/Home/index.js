import React, { useEffect } from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layouts'

const Home = () => {
    return (
        <div>
            <Layout>
                <Jumbotron className="text-center">
                    <h1>Welcome Admin Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad excepturi facilis consequuntur architecto cum ut, id laboriosam sequi sint, repudiandae rerum. Doloribus adipisci nihil, officia laborum deleniti eligendi iure aliquam.</p>
                </Jumbotron>
            </Layout>
        </div>
    )
}

export default Home
