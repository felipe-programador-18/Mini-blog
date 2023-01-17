
import React from 'react'
//this case i am create all context, but give two parameter!!
// lot interesting!
//here i am create two context to passed it and save favorites called favoritepoke, updating pokemon
const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updatefavoritePokemons : (id) => null
})
export const FavoriteProvider = FavoriteContext.Provider
export default FavoriteContext
