import TicketNum from "./TicketNum";


export default function Ticket ({ticket}) {
    return (
        <div>
            {ticket.map((num, idex) => (
                <TicketNum num = {num} key={idex}/>
            ))}
        </div>
    )
}
