import TicketCard from "../components/TicketCard"

const Dashboard = () =>{

    const tickets = [
        {
            category: 'q1 2022',
            color: 'red',
            title: 'c shark component implementation',
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
            title: 'database deployment',
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
            title: 'ddos attack vulnerability check',
            owner: 'roland',
            avatar: 'https://cdn-icons-png.flaticon.com/512/1090/1090806.png',
            status: 'done',
            priority: 3,
            progress: 10,
            description: 'make a video',
            timestamp: '2022-02-11T07:36:17'
        }
    ]

    /* each category has a unique color, more can be added */
    const colors = [
      'rgb(255,179,186)',
      'rgb(255,223,186)',
      'rgb(255,255,186)',
      'rgb(186,255,201)',
      'rgb(186,255,255)'
    ]

    /* getting each unique category from objects */
    const uniqueCategories = [
        /* ... spread operator */
        ...new Set(tickets?.map(({category}) => category))
    ]

    return (
        <div className="dashboard">
          <h1>My Projects</h1>
          <div className="ticket-container">
            {tickets &&
              uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3>{uniqueCategory}</h3>

                  {tickets.filter((ticket) => ticket.category === uniqueCategory)
                    .map((filteredTicket, _index) => (
                      <TicketCard
                        id={_index}
                        color={colors[categoryIndex] || colors[0]}
                        ticket={filteredTicket}
                      />
                    ))}

                </div>
              ))}
          </div>
        </div>
      )
}

export default Dashboard