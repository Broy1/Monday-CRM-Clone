import {useState} from 'react'

const TicketPage = () =>{
    
    const [formData, setFormData] = useState({
        status: 'not started',
        progress: 0,
        timestamp: new Date().toISOString()
    })

    const editMode = false;

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = () => {
        console.log('changed')
    }

    return (
        <div className="ticket">
            <h1>{editMode ? 'Update your ticket':'Create a ticket'}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                     <section>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={FormData.title}
                        />
                     </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage