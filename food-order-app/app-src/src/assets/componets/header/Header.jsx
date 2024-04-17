import { useContext } from "react";
import imgLogo from "../../../assets/logo.jpg"
import Button from "../body/Button";
import { CartContext } from "../../store/cart-context";

function Header() {
    const context =  useContext(CartContext)

    const totalItems = context.items.reduce((acc, item, index, list) => acc + item.quantity, 0)

    return (
    <header id="main-header">
        <div id="title">
            <img src={imgLogo} alt="" />
            <h1>Wana Eats</h1>
        </div>
        <nav>
            <Button textOnly={true}>
                Cart ({  totalItems })
            </Button>
        </nav>
    </header>
    );
}

export default Header;