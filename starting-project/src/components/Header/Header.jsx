import imageData from '../../assets/react-core-concepts.png'

function Header() {
    console.log("Running from Child")

    return (
      <header>
        <img src={imageData} />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }

  
export default Header;