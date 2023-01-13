import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const PokeSearch = (props) => {
    const { inputValue, setInputValue, setPokeSearch } = props; 

    const handleChange = event => {
        setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setPokeSearch(inputValue.toLowerCase());
        console.log(inputValue)
    };

    return (
        <Form onSubmit={handleSubmit} className='form'>
            <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Find a Pokemon</Form.Label>
                <Form.Control type="text" placeholder="Name" value={inputValue} onChange={handleChange} />
                <Link to={`/pokemon/${inputValue}`}>
                    <Button variant="primary" type="submit">
                        Find
                    </Button>
                </Link>
            </Form.Group>
        </Form>
    )

}

export default PokeSearch