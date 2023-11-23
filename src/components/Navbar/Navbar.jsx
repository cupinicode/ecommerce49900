import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.container}>
            <h1 className={classes.rojo}>Ecommerce</h1> 
            <section className={classes.categorias}>
                <button className={classes.boton}>Celulares</button>
                <button className={classes.boton}>Tablets</button>
                <button className={classes.boton}>Notebboks</button>
            </section>
        </nav>
    )
}

export default Navbar