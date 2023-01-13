import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../pokeApi";
import ErrorPage from "./ErrorPage";

const OnePokemon = (props) => {
    const { pokeSearch } = props;
    
    const {pokemonId} = useParams();
    
    const [onePoke, setOnePoke] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

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
            const justOne = await getPokemonById(pokemonId || pokeSearch);
            setOnePoke(justOne);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setError(error);
        }
    }

    useEffect(() => {
        loadOne();
    }, [pokemonId, pokeSearch])

    return isLoading ? <>Loading...</> :
            error ? <h3><ErrorPage message={error.response} /></h3>  : (
        <div className="whole-view">
            {parseInt(onePoke.id) > 1 ?
            <Link to={`/pokemon/${parseInt(onePoke.id) - 1}`}>
                <button onClick={back}>Back</button>
            </Link>
            : null}
            <section className="individual-pokemon">
                <div className="one-poke-header">
                    <h3>{onePoke.name.charAt(0).toUpperCase() + onePoke.name.slice(1)}</h3>
                    <img className="poke-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${onePoke.id}.png`} alt={onePoke.name}/>
                    <p>Pokedex no. {onePoke.id}</p>
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
            {parseInt(onePoke.id) < 151 ?
            <Link to={`/pokemon/${parseInt(onePoke.id) + 1}`}>
                <button onClick={next}>Next</button>
            </Link>
            : null}
        </div>
    )

}

export default OnePokemon;