import React from 'react'
import Nav from './Nav'
import './Projects.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import ProjDisplay from './ProjDisplay'

export default function Projects() {
    return (
        <div className="Projects">
            <Nav />
            <h1 className="secondaryFont heading">Projects</h1>
            <Container fluid className="projectDetails">
                <Row>
                    <ProjDisplay />
                </Row>
            </Container>
        </div>
    )
}
