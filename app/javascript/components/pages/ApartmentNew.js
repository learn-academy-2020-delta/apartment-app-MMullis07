import React from "react"
import {
    Button,
    Form,
    Row,
    Col,
    FormGroup,
    Input,
    Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "no",
                user_id: this.props.current_user.id
            },
            success: false
        }
    }
    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewApartment(this.state.form)
        this.setState({ success: true })
    }

    render() {
        return (
            <>
                <h3 className="pageh3"><em>Add your aparment</em></h3>
                <div className="body-container">
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
                                Add Apartment
                            </Button>
                        </Form>
                    </div>
                </div>
                {this.state.success && <Redirect to="/myapartmentindex" />}
            </>
        )
    }
}

export default ApartmentNew