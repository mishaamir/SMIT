// Sample ticket records
const tickets = [
    { id: "T101", customer: "Ali", status: "Open" },
    { id: "T102", customer: "Sara", status: "In Progress" },
    { id: "T103", customer: "Ahmed", status: "Resolved" }
];

// Retrieve ticket after 2 seconds
function getTicket(ticketId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const ticket = tickets.find(function (item) {
                return item.id === ticketId;
            });

            if (ticket) {
                resolve(ticket);
            } else {
                reject(new Error("Ticket ID not found."));
            }
        }, 2000);
    });
}

// Check selected ticket
async function checkTicket() {
    const ticketId = document.getElementById("ticketId")
        .value.trim().toUpperCase();

    const result = document.getElementById("result");

    if (ticketId === "") {
        result.textContent = "Please enter a ticket ID.";
        return;
    }

    result.textContent = "Loading ticket details...";

    try {
        const ticket = await getTicket(ticketId);

        result.textContent =
            "Ticket ID: " + ticket.id +
            " | Customer: " + ticket.customer +
            " | Status: " + ticket.status;

    } catch (error) {
        result.textContent = error.message;
    }
}