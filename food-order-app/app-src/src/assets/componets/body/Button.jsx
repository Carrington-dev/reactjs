function Button({ children, textOnly, className, ...props }) {
    let newClass = textOnly ? 'text-button': 'button';
    newClass += " " + className
    return ( <button className={ newClass } {...props}>
        { children }
    </button> );
}

export default Button;