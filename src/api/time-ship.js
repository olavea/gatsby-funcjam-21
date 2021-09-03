// The PiRATE_PRiNCESS we are looking for to team up with
const PiRATE_PRiNCESS = {
    age: "11",
    hairColor: "gold",
    skill: "gatsby_function_programming"
}
const stripe = require('stripe')(process.env.STRIPE_KEY);

async function timeShipHandler(req, res) {
    // Get the data from the query of req-the-bat 🦇
    const { city, year, price, cancelUrl } = req.query;
    // Create a Stripe checkout session
    // Copy / paste from stripe docs node.js thing
    const session = await stripe.checkout.sessions.create({
        success_url: `https://timeship.gatsbyjs.io/api/time-ship-landing-in?city=${city}&year=${year}&price=333${price}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: "http://localhost:8000/?payment=cancelled",
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    unit_amount: price * 100,
                    currency: "usd",
                    product: "prod_K7EsOmDy6JLRgx",
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
      });
      // Get the url to send back to Ruby's TimeShip
      // Give the data to res-the-cat 😺 and
      res.status(200).json({
        message: `Copy this url into the browser, to test-pay $${price} for TimeShip gold-fuel ( 🏴‍☠️😺👍 $${price} are free-test-$s). ${session.url}`,
    });
}

export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            await timeShipHandler(req, res);
        } else {
            res.status(405).json({ message: "Method not supported" });
        }
    } catch (error) {
        // Something went wrong, log it
        console.error(error.message);
        // if something went wrong
        res.status(500).json({
            message: `Faulty TimeShip`,
        });
    }
}