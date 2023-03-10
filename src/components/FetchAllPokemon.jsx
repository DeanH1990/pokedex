import { useEffect, useState } from "react"
import { getAllPokemon } from "../pokeApi";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const FetchAllPokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const loadPokemon = async () => {
        try {
           const allPokemon = await getAllPokemon();

           setPokemon(allPokemon)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadPokemon();
    }, [])

    return (
        <section className="card-container">
            {pokemon.map(({name}, index) => {
                return <Card key={index} style={{ width: '18rem', border: '1px solid black', borderRadius: '5px', margin: '5px' }}>
                    <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
                    <Card.Body>
                        <Card.Title as='h3'>{name.charAt(0).toUpperCase() + name.slice(1)}</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium nostrum commodi ullam vero.
                        </Card.Text>
                        <Card.Footer style={{fontSize: 'small'}}> Pokedex no: {index + 1}</Card.Footer>
                        <Link to={`/pokemon/${index + 1}`}>
                            <Button variant="primary" >View</Button>
                        </Link>
                    </Card.Body>
                </Card>
            })}
        </section>
    )
}

export default FetchAllPokemon