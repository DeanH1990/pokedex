import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../pokeApi";

const OnePokemon = () => {
    const {pokemonId} = useParams();
    
    const [onePoke, setOnePoke] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const next = async () => {
        try {
            setIsLoading(true);
            let nextId = parseInt(pokemonId) + 1;
            const newPoke = await getPokemonById(nextId);
            setOnePoke(newPoke);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const back = async () => {
        try {
            setIsLoading(true);
            let nextId = parseInt(pokemonId) - 1;
            const newPoke = await getPokemonById(nextId);
            setOnePoke(newPoke);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const loadOne = async () => {
        try {
            setIsLoading(true);
            const justOne = await getPokemonById(pokemonId);
            
            setOnePoke(justOne);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadOne();
    }, [pokemonId])

    return isLoading ? <>Loading...</> : (
        <div className="whole-view">
            {parseInt(pokemonId) > 1 ?
            <Link to={`/pokemon/${parseInt(pokemonId) - 1}`}>
                <button onClick={back}>Back</button>
            </Link>
            : null}
            <section className="individual-pokemon">
                <div className="one-poke-header">
                    <h3>{onePoke.name.charAt(0).toUpperCase() + onePoke.name.slice(1)}</h3>
                    <img className="poke-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={onePoke.name}/>
                </div>
                <div className="one-poke-info">
                    <div className="types-and-moves">
                        <h4 className="types">Types: {onePoke.types.map(({type}) => <p key={type.name}>{type.name}</p>)}</h4>
                        <h4>No. of moves: {onePoke.moves.length}</h4>
                    </div>
                    <div className="stats">
                        <h4>Stats: {onePoke.stats.map(({stat, base_stat}) => {
                            return <p key={stat.name}>{stat.name} {base_stat} </p>
                        })}</h4>
                    </div>
                </div>
            </section>
            {parseInt(pokemonId) < 151 ?
            <Link to={`/pokemon/${parseInt(pokemonId) + 1}`}>
                <button onClick={next}>Next</button>
            </Link>
            : null}
        </div>
    )

}

export default OnePokemon;