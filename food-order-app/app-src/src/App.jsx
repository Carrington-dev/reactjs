import Meals from "./assets/componets/body/Meals";
import Header from "./assets/componets/header/Header";
import CartContextProvider from "./assets/store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
      {/* <h1>You got this 💪</h1>
      <p>Stuck? Not sure how to proceed?</p>
      <p>Don't worry - we've all been there. Let's build it together!</p> */}
    </CartContextProvider>
  );
}

export default App;
