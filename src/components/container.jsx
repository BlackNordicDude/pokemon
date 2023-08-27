import { Box, Chip } from "@mui/material";
import { useState } from "react"
import PokemonCard from "./card";

const PokeCard = ({pokemons}) => {

    const [currentPokemon, setCurrentPokemon] = useState(null)

    return (
        <Box sx={{
            width: 980, 
            height: 500,
            display: 'flex',
            gap: '12px'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flex: '1 1 484px',
            }}> 
                <Box>
                    {pokemons.map(pokemon => {
                    let name = pokemon.name;
                    return (
                        <Chip 
                            key={name}
                            label={name}
                            sx={{
                                bgcolor: '#1986EC',
                                color: '#ffffff',
                                fontSize: 20,
                                mr: '6px',
                                mb: '10px',
                                py: '30px',
                                px: 1,
                                borderRadius: 11,

                            }}
                            onClick={() => setCurrentPokemon(name)}
                        />
                    )
                })}
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5.5,
                flex: '1 1 484px',
                bgcolor: '#000000',
                p: 5.5,
                pb: 0,
                boxSizing: 'border-box',
                color: '#A0A0A0',
            }}>
                {
                    currentPokemon && 
                    <PokemonCard pokemon={currentPokemon}/>
                }
            </Box>
        </Box>
    )
} 

export default PokeCard