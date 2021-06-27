const Form = (props) => {
    

return(

    <form onSubmit={props.submit} className={props.style}>
        {props.children}
    </form>
)

}


export default Form;