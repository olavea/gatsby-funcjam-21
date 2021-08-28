// The PiRATE_PRiNCESS we are looking to team up with
const PiRATE_PRiNCESS = {
    age: "11",
    hairColor: "gold",
    skill: "gatsby_function_programming"
}
// STRIPE_KEY
const stripe = require('stripe')(process.env.STRIPE_KEY);

async function timeShipHandler(req, res) {
    // Get the data from the query of req-the-bat 🦇
    const { city, year, price } = req.query;
    // Create a Stripe checkout session
    // Copy / paste from stripe docs node.js thing
    const session = await stripe.checkout.sessions.create({
        success_url: 'https://timeship.gatsbyjs.io/success',
        cancel_url: 'https://timeship.gatsbyjs.io/cancel',
        payment_method_types: ['card'],
        line_items: [

            {
                quantity: 1,
                // price data object in stripe docs
                price_data: {
                    unit_amount: req.query.price * 100,
                    currency: "usd",
                    product: "prod_K7EsOmDy6JLRgx",
                }
            },


        ],
        mode: 'payment',
      });
    //   // Get the url to send back to Ruby's TimeShip
      // Give the data to res-the-cat 😺 and
      // then the TimeShip is on a test trip! With you inside it!
      //urlTimeShip: session.url,
      res.status(200).json({

        message: `Copy this url into a new browsertab ${session.url} You time travelled to the city of ${city}, in year ${year} and burned ${price} cents in gold fuel. To go back home, build your own serverless Gatsby function TimeShip with the help of a Pirate`,
        princess: PiRATE_PRiNCESS
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
            message: `Faulty 🗼 TimeShip`,
        });
    }
}