import { useContext } from "react";
import currencyFormatter from "../../../utils/currency-fomatter";
import Button from "./Button";
import { CartContext } from "../../store/cart-context";

function MealItem({ item }) {
    const context = useContext(CartContext)
    function handleOnClick(){
        console.log(item.id)
        context.addToCart(item)
    }
    return (<li className="meal-item">
        <article>
            <img src={ `http://localhost:3000/${ item.image }`} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p className="meal-item-price">{ currencyFormatter.format(item.price) } </p>
                <p className="meal-item-description"> {item.description} </p>
                <p className="meal-item-actions">
                    <Button onClick={handleOnClick }>Add to cart</Button>
                </p>
            </div>
        </article>
    </li>);
}

export default MealItem;