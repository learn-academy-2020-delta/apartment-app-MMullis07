import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap'

class Header extends React.Component {
    render() {
        const {
            logged_in,
            sign_in_route,
            sign_up_route,
            sign_out_route,
        } = this.props
        return (
            <>
                <div id="header">
                    <h1 className="display-4"><em>Apartment Finder </em></h1>
                    <Nav>
                        <NavItem>
                            <a href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            <a href="/apartmentindex">All Apartments</a>
                        </NavItem>
                        {logged_in &&
                            <>
                                <NavItem>
                                    <a href={sign_out_route}>Sign Out</a>
                                </NavItem>
                                <NavItem>
                                    <a href="apartmentnew">Post your apartment</a>
                                </NavItem>
                            </>
                        }
                        {!logged_in &&
                            <>
                                <NavItem>
                                    <a href={sign_in_route}>Sign In</a>
                                </NavItem>
                                <NavItem>
                                    <a href={sign_up_route}>Sign Up</a>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </div>
            </>
        )
    }
}

export default Header