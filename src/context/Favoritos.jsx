import { createContext, useState, useContext } from 'react';

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

const FavoritosProvider = ({ children }) => {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
        value={{favorito, setFavorito}} >
            {children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosProvider;

export const useFavoritoContext = () => {
    const {favorito, setFavorito} = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        console.log(favorito)

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista = favorito.filter(favorito => favorito.id !== novoFavorito.id); 

        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}