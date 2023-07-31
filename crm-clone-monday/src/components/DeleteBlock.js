const DeleteBlock = () =>{

    const deleteTicket = () => {
        console.log("deleted")
    }


    return (
        <div className="delete-block">
            <div className="delete-cross" onClick={deleteTicket}>
                x
            </div>
        </div>
    )
}

export default DeleteBlock