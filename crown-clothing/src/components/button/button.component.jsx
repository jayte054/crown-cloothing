import "./button.component.styles.scss"
// types of button
// default
// inverted
// google signin

export const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
}


export const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className = {`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
        { ...otherProps } 
        >
            {children}
        </button>
    )
}