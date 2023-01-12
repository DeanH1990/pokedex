import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../pokeApi";

const OnePokemon = () => {
    const {pokemonId} = useParams();
    
    const [onePoke, setOnePoke] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
    )

}

export default OnePokemon;