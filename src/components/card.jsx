import { Box, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const PokemonCard = ({pokemon}) => {
    console.log(pokemon);
    
    const [currentPokemon, setCurrentPokemon] = useState(null)

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => setCurrentPokemon(res.data))
    }, [pokemon])

    

    return (
        <>
            <Typography component='h1' sx={{
                fontSize: 48,
                lineHeight: '100%',
            }}>
                {pokemon[0].toUpperCase() + pokemon.slice(1)}
            </Typography>
            {   currentPokemon &&
            <>
                <Box
                component="img"
                sx={{
                  height: 200,
                  display: 'block',
                  m: '0 auto',
                  objectFit: 'cover'
                }}
                alt={currentPokemon.name}
                src={currentPokemon.sprites.front_default}
                />
                <Typography component='p'>
                    Снялся в {currentPokemon.moves.length} сериях <br/>
                    id: {currentPokemon.id} <br/>
                    height: {currentPokemon.height} <br/>
                    attack: {currentPokemon.stats[1].base_stat}
                </Typography>
            </>
            }        
        </>
        
    )
}

export default PokemonCard  