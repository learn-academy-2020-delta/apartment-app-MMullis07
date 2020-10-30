import React from "react"
import apartmentImage from "../assets/homeimg.jpg"
import Carousels from "../components/Carousels"

import {
    Container
} from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';


class Home extends React.Component {
    render() {
        return (
            <>
                <div id="home" style={{
                    backgroundImage: `url(${apartmentImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <p id="home-title"><em>Where to next?</em></p>
                    <br />
                    <Link to="/#carousel-body"
                        className="button">
                        <em>Find your next home!</em>
                    </Link>
                </div>
                <Container id="carousel-body">
                    <Carousels />
                </Container>
            </>
        )
    }
}

export default Home