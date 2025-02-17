import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";

const HomePage: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Col>
                <h1>Task Management App</h1>
                <LoginButton />
                <LogoutButton />
            </Col>
        </Container>
    );
};

export default HomePage;