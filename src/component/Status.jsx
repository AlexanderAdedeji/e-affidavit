



const Status = ({text, color})=>{

    return (
        <span className={`status status-${color}`}>
            {text}
        </span>
    )
}


export default Status;