import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar>
            <Nav>
                <Nav.Link href="/" className="navbar">Home |</Nav.Link>
                {isAuthenticated &&
                    <>
                        <Nav.Link href="/profile" className="navbar"> Profile |</Nav.Link>
                        <Nav.Link href="/protected" className="navbar"> Protected</Nav.Link>
                    </>
                }
            </Nav>
        </Navbar>
    );
};

export default NavBar;