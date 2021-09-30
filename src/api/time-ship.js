// The PiRATE_PRiNCESS we are looking for to team up with
const PiRATE_PRiNCESS = {
    age: "11",
    hairColor: "gold",
    skill: "gatsby_function_programming"
}
const createError = require("http-errors");

const stripe = require('stripe')(process.env.STRIPE_KEY);

export default async function timeShipPostsToStrip(req, res) {
    // Get the data from the query of req-the-bat 🦇
            const {
                city, year,
                price
            } = req.query;
    // 2. Do your thing
    // Create a Stripe checkout session
    // Copy / paste from stripe docs node.js thing
    // src / api / time-ship.js
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
        metadata: {
            year: year.trim(),
            city: city.trim(),


        },

      });
      // 3. Respond with res-the-cat 😺
                                       // Get the url to send back to Ruby's TimeShip
                                        // Give the data to res-the-cat 😺 and
      res.status(200).json({
        message: `Copy this url into the browser, to test-pay $${price} for TimeShip gold-fuel ( 🏴‍☠️😺👍 $${price} are free-test-$s). ${session.url}`,
    });
}

// export default async function handler(req, res) {
//     try {
//         if (req.method === "POST") {
//             await postHandler(req, res);
//         } else if (req.method === "GET") {
//             await timeShipPostsToStripe(req, res);
//         } else {
//           throw createError(405, `${req.method} not allowed` );
//         }
//     } catch (error) {
//         // Something went wrong, log it
//         console.error("Time Travel", error.message);

//         // Respond with error code and message
//         res.status(error.statusCode || 500).json({
//             message: error.expose ? error.message : "TimeShip is now a teaPot, not a coffeeMaker",
//         });

//     };

// };
// const postHandler = async (req, res) => {
//     // 1. Validate
//     // 2. Do your thing
//     // 3. Respond
//     res.status(200).json({});
// }

// const timeShipPostsToStripe = async (req, res) => {
//     // 1. Validate
// // Get the data from the query of req-the-bat 🦇
//     // Deconstruct the needed data 6:24
//     const { city, year, success_url, cancel_url } = req.body;

//     // Make sure we have the needed time travel data from the body of req-the-bat 🦇
//     if (!city || !year ) {
//         throw createError(422, "Oh Rats! Time travel data missing req-the-bat 🦇")
//     }

//     // Make sure we have the redirect urls travel data
//     if (!success_url || !cancel_url ) {
//         throw createError(422, "Oh Rats! Redirect urls missing req-the-bat 🦇")
//     }
//     // 2. Do your own time travel thing
//     // Create a Stripe checkout session
//     // Copy / paste from stripe docs node.js thing
//     const session = await stripe.checkout.sessions.create({
//         success_url: success_url,
//         cancel_url: cancel_url,
//         payment_method_types: ['card'],
//         line_items: [
//             {
//                 price_data: {
//                     unit_amount: price * 100,
//                     currency: "usd",
//                     product: "prod_K7EsOmDy6JLRgx",
//                 },
//                 quantity: 1,
//             },
//         ],
//         mode: 'payment',
//         metadata: {
//             // ta vekk whitspace og new line
//             year: year.trim(),
//             city: city.trim(),
//         },
//     });

//     // 3. Respond 7:11
//     res.status(200).json({
//         url: session.url,
//     });
// }



// const getHandler = async (req, res) => {
//     // 1. Validate that we have a session id 9:49
//     // Ask req-the-bat 🦇 to Validate that we have a session (query of)
//     //  req-the-bat 🦇 asks to Validate that we have a session (query of)
//     if (!req.query.session_id) {
//         throw createError(422, "Missing Stripe Session Id", { expose: false });
//     }

//     // 2. Do your thing

//     const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

//     const { city, year } = session.metadata || {};


//     // Make sure we are gettinge the correct data from stripe 9:59
//     // Make sure we have the time travel data needed 10:03
//     //On the session in case it's another session
//     // without any time travel data
//     // So we validate that that exists 10:07
//     // And if we do
//     // Grabbing the data from Stripe 10:07
//     // right
//     if (!city  || !year) {
//         throw createError(404, "Time travel data for payment not found");
//     }
//     // Something that is really important you need to
//     // Make sure that the time travel is paid for 10:13-10:18
//     if (session.payment_status !== "paid") {
//         throw createError(402, "Payment for time travel still required");
//     }

//     // 3. Respond. If everything is OK we'll respond 10:39
//     res.status(200).json({
//         message: `You time travelled to ${city} in the year ${year}. Check your email to see if you found the Pirate Princess.`
//     });
//     // Do localhost to see  "Payment for time travel still required" 11:18
// }

// // How are we going to send that email? 11:34