import styles from "./Banner.module.css"

const Banner = ({ imagem }) => {
    return (
        <div
            className={styles.bannerImagem}
            style={{
                backgroundImage: `url('/imagens/banner-${imagem}.png')`
            }}>
        </div>
    )
}

export default Banner