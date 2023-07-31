import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgessDisplay"
import DeleteBlock from "./DeleteBlock"
import {Link} from "react-router-dom"

const TicketCard = ({color, ticket}) =>{
    return (
        <div className="ticket-card">
            
            <Link to={'/ticket/${ticket.documentId}'} id="link">
                <div className="ticket-color"></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket={ticket}/>
                <StatusDisplay status={ticket.status}/>
                <PriorityDisplay/>
                <ProgressDisplay/>
            </Link>
            <DeleteBlock/>
        </div>
    )
}

export default TicketCard