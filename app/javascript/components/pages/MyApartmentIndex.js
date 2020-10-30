import React, { useState } from "react"
import { Link } from 'react-router-dom'
import {
    Container
} from 'reactstrap';
import Modal from 'react-modal'
import apartmentImage from "../assets/homeimg.jpg"

const MyApartmentIndex = (props) => {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    return (
        <>
            <div id="apt-index" style={{
                backgroundImage: `url(${apartmentImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }}>
                <h3 className="pageh3"><em>Your Apartments</em></h3>
                <Container className="index-apts">
                    <div id="index-body">
                        {props.apartments.map((apartment, index) => {
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
                                    <Link to={`/apartmentedit/${apartment.id}`}
                                        className="button">
                                        Edit Info
                                </Link>

                                    <button onClick={() => { this.props.deleteApartment(apartment.id) && setmodalIsOpen(true) }} className="button">
                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={() => setmodalIsOpen(false)}
                                            style={
                                                {
                                                    content: {
                                                        backgroundColor: 'grey',
                                                        marginTop: '25vh',
                                                        color: "black",
                                                        height: "200px",
                                                        width: "400px"
                                                    }
                                                }
                                            }>
                                            <h2>Delete Posting</h2>
                                            <p>Are you sure you want to delete this posting?</p>
                                            <button onClick={() => setmodalIsOpen(false)}>Close</button>
                                        </Modal>
                                            Remove Listing
                                </button>

                                </div>
                            )
                        })}
                    </div>
                </Container>
            </div>
        </>
    )
}



export default MyApartmentIndex