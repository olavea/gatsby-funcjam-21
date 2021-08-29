
const PiRATE_PRiNCESS = {
    age: "11",
    hairColor: "Yellow"
}

export default async function timeShipLandingInHandler(req, res) {
    const {city, year, price} = req.query;

    const message = `You TimeShipped yourself to the city of ${city}, in the year ${year} and
    burned $ ${price} worth of gold fuel, but where is the Pirate

    `
    res.json({Yo: message, princess: PiRATE_PRiNCESS});
};