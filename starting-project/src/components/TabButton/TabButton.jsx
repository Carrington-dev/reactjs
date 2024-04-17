const TabButton = ({title, onSelect}) => {
    const onSelectHandler = (event) => { 
        //  onSelect("The"); 
        onSelect()
    }
    return (<li><button onClick={onSelectHandler}>{ title }</button></li>);
}

export default TabButton