import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand as={'h1'} >Pokedex</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={`/pokemon/${Math.floor(Math.random() * 151) + 1}`}>Individuals</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;