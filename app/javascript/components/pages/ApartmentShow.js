import React from "react"
import { Link } from 'react-router-dom'

class ApartmentShow extends React.Component {
    render() {
        const { apartment } = this.props
        return (
            <>
                <div id="show-body">
                    <h3 className="pageh3"><em>Listing {apartment.street}</em></h3>
                    <p>{apartment.bedrooms} BD/{apartment.bathrooms}BA</p>
                    <p>{apartment.street}</p>
                    <p>{apartment.city}, {apartment.state}</p>
                    <p>{apartment.pets}</p>
                    <p>Manager: {apartment.manager}</p>
                    <p>Ask for more info: {apartment.email}</p>
                    <p>Price: ${apartment.price}</p>
                </div>
                { !this.props.logged_in &&
                    <Link to={"/apartmentindex"} className="button">
                        Back to Apartments
                    </Link>
                }
            </>
        )
    }
}

export default ApartmentShow