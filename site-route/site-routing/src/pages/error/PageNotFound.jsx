import NavigationBar from "../../componets/NavigationBar";
import { Link } from "react-router-dom";

function PageNotFound() {
    return ( <>
        <NavigationBar />
        <main>
            <h1>Page not found</h1>
            <p>The link you were looking for no longer exists.</p>
            <p>Head back to the Homepage or takealook at our deals and trending products below.</p>
            <div>
                <button>Home</button>
                <Link to={`/products`}><button>Products</button></Link>
            </div>
        </main>
    </> );
}

export default PageNotFound;