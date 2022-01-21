import { FaRegBell } from "react-icons/fa";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container
} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" expand="md" variant="dark" className="px-3 shadow">
            <Navbar.Brand className="mr-3" href="#">Contact Manager</Navbar.Brand>
        </Navbar>
    )
}

export default Header
