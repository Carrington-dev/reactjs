import { Link } from "react-router-dom";
import styles from "./Navigationbar.module.css"

function NavigationBar() {
    return (
    <header className={styles.header}>
        <nav>
            <ul className={ styles.list }>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default NavigationBar;