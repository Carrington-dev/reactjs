
function CoreConcepts(props){
    const { image, title, description} = props;
    return (
      <li>
        <img src={image} title={`${title}`} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
}


export default CoreConcepts