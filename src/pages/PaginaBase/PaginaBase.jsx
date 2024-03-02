import Cabecalho from "components/Cabecalho/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape/Rodape";
import FavoritosProvider from "context/Favoritos";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;