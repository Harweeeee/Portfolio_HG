import React from 'react'

import Col from 'react-bootstrap/Col'
import './ProjDisplay.css'

let projectDetails = [
    {
        link: `https://ssreact.netlify.app/`,
        thumbnail: 'Weatherapp.PNG',
        name: 'Weather Application',
        description: `Soltice Sky! This app not only spills todays weather beans but also peeks into the crystal ball to forecast the next week. Rain or shine, it's got your back with forecasts that are as reliable as your morning coffee!`,
        languages: [
            'html5.svg',
            'css.svg',
            'javascript.svg',
            'react.svg',
            'api.svg',
        ],
    },
    {
        link: `https://wordtome.netlify.app/`,
        thumbnail: 'Dictionaryapp.PNG',
        name: 'Dictionary Application',
        description: `From 'abracadabra' to 'zygote', this dictionary app doesn't just define words, but decodes them as well!`,
        languages: [
            'html5.svg',
            'css.svg',
            'javascript.svg',
            'react.svg',
            'api.svg',
        ],
    },
    {
        link: 'https://chapter-champion.netlify.app/',
        thumbnail: 'Bookgenerator.PNG',
        name: 'Book Recommendation Generator',
        description: `Discover your next literary adventure with Chapter Champion; it's the ultimate book matchmaker! Simply input the genre you're interested in, and it'll curate the perfect recommendation for you.`,
        languages: ['html5.svg', 'css.svg', 'javascript.svg', 'api.svg'],
    },
    {
        link: `https://hauntedaustralia.netlify.app/`,
        thumbnail: 'Haunted.PNG',
        name: 'Haunted Australia',
        description: `Read about three of Australias most haunted places, and check out their locations on the embedded maps.`,
        languages: ['html5.svg', 'css.svg'],
    },
]

function ProjDisplay() {
    return projectDetails.map((e) => (
        <Col className="projectDisplay">
            <div>
                <a href={e.link} target="_blank" rel="noreferrer">
                    <img
                        src={`./assets/${e.thumbnail}`}
                        alt="thumbnail"
                        className="projectImg"
                    />
                </a>
                <h4 className="secondaryFont">{e.name}</h4>

                <p className="primaryFont">{e.description}</p>
                <div>
                    {e.languages.map((l) => (
                        <div className="languagesUsed">
                            <img
                                className="languageIcon"
                                src={`./assets/${l}`}
                                alt="language logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Col>
    ))
}

export default ProjDisplay
