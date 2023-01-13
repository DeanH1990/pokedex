import { Navbar, Nav } from "react-bootstrap";
import PokeSearch from "./PokeSearch";

const Navigation = (props) => {
    const { inputValue, setInputValue, setPokeSearch } = props;

    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand as={'h1'} >Pokedex</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={`/pokemon/${Math.floor(Math.random() * 151) + 1}`}>Individuals</Nav.Link>
                </Nav>
                <PokeSearch inputValue={inputValue} setInputValue={setInputValue} setPokeSearch={setPokeSearch} />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;