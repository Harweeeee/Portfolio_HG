import React from 'react'
import Nav from './Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css'

function About() {
    return (
        <div className="About">
            <Nav />
            <h1 className="secondaryFont">About</h1>
            <Container className="aboutContent" fluid>
                <Row>
                    <Col className="aboutText">
                        <div className="lhContainer">
                            <div className="secondaryFont subtitle">
                                <div>Book Worm</div>
                                <div>Traveller</div>
                                <div>Animal Lover</div>
                            </div>
                            <div className="aboutDescription primaryFont">
                                My name is Harleigh, and I'm currently 26 years
                                old. I'm a proud Aussie and currently live in SE
                                Queensland 🦘. <br />
                                <br />
                                Professionally, I have worked in Administration
                                and Property Mangement over the last 8 years; as
                                you could imagine this has given me quite the
                                skill set surrounding organisation and people.
                                Two years ago, I was introduced to coding and
                                software development. I instantlty knew that it
                                was something I wanted to learn more about.
                                <br />I attended a free coding basics workshop
                                through 'SheCodes' and that solidified my
                                decision to keep learning. I was certainly
                                intimidated at first, but quickly eased into it
                                and completed the remaining workshops. Recently,
                                I graduated and obtained my SheCodes Diploma 🎉
                                <br />
                                <br />I have enjoyed exploring the creative side
                                of myself as well, and fortunately I could
                                express this in my administration job by
                                creating aestetically pleasing documents and
                                social media posts. Little did I know that my
                                creative skills would become invaluable when it
                                came to web design as well.
                                <br />
                                <br /> Personality wise, I'm certainly more an
                                introvert than an extrovert, but I do like a fun
                                time. I enjoy reading and I have also been
                                fortunate enough to have travelled to multiple
                                countries (with plenty more to see!). I
                                absolutely love animals, and aspire to one day
                                buy lots of land so I can own as many as I can.
                                At the moment we have a rottweiler called Duke
                                and he is super cute.
                                <br />
                                <br /> I'm keen to keep improving my coding
                                skills and working on various projects. Watch
                                this space for more to come!
                            </div>
                        </div>
                    </Col>
                    <Col className="aboutImg">
                        <img
                            src="./assets/aboutimg.jpg"
                            alt="Harleigh at Madame Tussauds, on a bicycle exhibit with 'ET' in the front basket"
                        />
                        <p>Madame Tussauds, London</p>
                        <img
                            src="./assets/duke.jpg"
                            alt="Duke, the rottweiler"
                        />
                        <p>Duke, our rottie</p>
                        <img
                            src="./assets/sydney2022.jpeg"
                            alt="Harleigh in Sydney, Australia"
                        />
                        <p>Sydney, NSW - Where I was born!</p>
                    </Col>
                </Row>
            </Container>
            <img
                className="imgShow"
                src="./assets/duke.jpg"
                alt="Duke, our rottweiler dog"
            />
        </div>
    )
}

export default About
