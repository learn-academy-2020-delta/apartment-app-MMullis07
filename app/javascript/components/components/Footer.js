import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'

class Footer extends React.Component {
    render() {
        return (
            <>
                <div id="footer">
                    <Nav>
                        <NavItem>
                            <a href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            <a href="/apartmentindex">All Apartments</a>
                        </NavItem>
                        {this.props.logged_in &&
                            <NavItem>
                                <a href={this.props.sign_out_route}>Sign Out</a>
                            </NavItem>
                        }
                        {!this.props.logged_in &&
                            <>
                                <NavItem>
                                    <a href={this.props.sign_in_route}>Log In</a>
                                </NavItem>
                                <NavItem>
                                    <a href={this.props.sign_up_route}>Sign Up</a>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </div>
            </>
        )
    }
}

export default Footer