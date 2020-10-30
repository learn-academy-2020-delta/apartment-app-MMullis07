import React from "react"
import { Link } from 'react-router-dom'
import {
    Col,
    Row,
    Container
} from 'reactstrap'
import apartmentImage from "../assets/homeimg.jpg"

class ApartmentIndex extends React.Component {
    render() {
        console.log(this.props.apartments)
        return (
            <>
                <div id="apt-index" style={{
                    backgroundImage: `url(${apartmentImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh'
                }}>
                    <h3 className="pageh3"><em>Available Apartments</em></h3>
                    <Container className="index-apts">
                        <div id="index-body">
                            {this.props.apartments.map((apartment, index) => {
                                return (

                                    <div key={index} className="index-card">
                                        <h3>{apartment.bedrooms} BD/{apartment.bathrooms} BA</h3>
                                        <h3>${apartment.price}</h3>
                                        <h3>{apartment.street}</h3>
                                        <h3>{apartment.city}</h3>
                                        <br />
                                        <Link to={`/apartmentshow/${apartment.id}`}
                                            className="button">
                                            More Info
                                                </Link>
                                    </div>

                                )
                            })}
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}

export default ApartmentIndex