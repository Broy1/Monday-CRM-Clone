const TicketPage = () =>{

    const editMode = false;
    const handleSubmit = () => {
        console.log('submitted')
    }

    return (
        <div className="ticket">
            <h1>{editMode ? 'Update your ticket':'Create a ticket'}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>

                </form>
            </div>
        </div>
    )
}

export default TicketPage