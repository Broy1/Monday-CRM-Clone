import TicketCard from "../components/TicketCard"

const Dashboard = () =>{

    const tickets = [
        {
            category: 'q1 2022',
            color: 'red',
            title: 'nft safety video',
            owner: 'roland',
            avatar: 'https://cdn-icons-png.flaticon.com/512/1090/1090806.png',
            status: 'done',
            priority: 2,
            progress: 40,
            description: 'make a video showcase',
            timestamp: '2022-02-11T07:36:17'
        },
        {
            category: 'q1 2022',
            color: 'red',
            title: 'asdf safety video',
            owner: 'roland',
            avatar: 'https://cdn-icons-png.flaticon.com/512/1090/1090806.png',
            status: 'in-progress',
            priority: 5,
            progress: 40,
            description: 'make a video tutorial about smthg',
            timestamp: '2022-02-11T07:36:17'
        },
        {
            category: 'q2 2022',
            color: 'blue',
            title: 'build a bot',
            owner: 'roland',
            avatar: 'https://cdn-icons-png.flaticon.com/512/1090/1090806.png',
            status: 'done',
            priority: 3,
            progress: 10,
            description: 'make a video',
            timestamp: '2022-02-11T07:36:17'
        }
    ]

    /* getting each unique category from objects */
    const uniqueCategories = [
        /* ... spread operator */
        ...new Set(tickets?.map(({category}) => category))
    ]

    return (
        <div className="dashboard">
            <h1>My projects</h1>
            <div className="ticket-container">
                <TicketCard/>
            </div>
        </div>
    )
}

export default Dashboard