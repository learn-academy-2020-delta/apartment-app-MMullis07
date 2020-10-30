import React from "react"
import {
    Button,
    Form,
    Col,
    Row,
    FormGroup,
    Input,
    Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                street: this.props.apartment.street,
                city: this.props.apartment.city,
                state: this.props.apartment.state,
                manager: this.props.apartment.manager,
                email: this.props.apartment.email,
                price: this.props.apartment.price,
                bedrooms: this.props.apartment.bedrooms,
                bathrooms: this.props.apartment.bathrooms,
                pets: this.props.apartment.pets
            },
            success: false
        }
    }
    handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = (e) => {
        // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        this.props.updateApartment(this.state.form, this.props.apartment.id)
        this.setState({ success: true })
    }
    render() {
        return (
            <>
                <h3 className="pageh3"><em>Edit your Apartment</em></h3>
                <div className="form-body">
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Price</Label>
                                    <Input
                                        type="number"
                                        name="price"
                                        onChange={this.handleChange}
                                        value={this.state.form.price}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Number of Bedrooms</Label>
                                    <Input
                                        type="number"
                                        name="bedrooms"
                                        onChange={this.handleChange}
                                        value={this.state.form.bedrooms}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Number of Bathrooms</Label>
                                    <Input
                                        type="number"
                                        name="bathrooms"
                                        onChange={this.handleChange}
                                        value={this.state.form.bathrooms}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Street</Label>
                                    <Input
                                        type="text"
                                        name="street"
                                        onChange={this.handleChange}
                                        value={this.state.form.street}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>City</Label>
                                    <Input
                                        type="text"
                                        name="city"
                                        onChange={this.handleChange}
                                        value={this.state.form.city}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>State</Label>
                                    <Input
                                        type="text"
                                        name="state"
                                        onChange={this.handleChange}
                                        value={this.state.form.state}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Pets</Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="radio"
                                                name="pets"
                                                value="yes"
                                                checked={this.state.form.pets === "yes"}
                                                onChange={this.handleChange}
                                            />
                                                Yes
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="radio"
                                                name="pets"
                                                value="no"
                                                checked={this.state.form.pets === "no"}
                                                onChange={this.handleChange}
                                            />
                                                No
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Manager's Name</Label>
                                    <Input
                                        type="text"
                                        name="manager"
                                        onChange={this.handleChange}
                                        value={this.state.form.manager}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Manager's Email</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.form.email}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button
                            name="submit"
                            color="secondary"
                            onClick={this.handleSubmit}
                        >
                            Update Apartment
                            </Button>
                    </Form>
                    {this.state.success && <Redirect to="/myapartmentindex" />}
                </div>

            </>
        )
    }
}

export default ApartmentEdit