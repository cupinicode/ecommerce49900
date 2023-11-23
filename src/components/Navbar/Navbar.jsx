import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.container}>
            <h1 className={classes.rojo}>Todos los vinos en un solo lugar</h1> 
            <section className={classes.categorias}>
                <button className={classes.boton}>Tintos</button>
                <button className={classes.boton}>Rosados</button>
                <button className={classes.boton}>Blancos</button>
            </section>
        </nav>
    )
}

export default Navbar