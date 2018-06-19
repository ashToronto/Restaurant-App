# Restaurant App

![""](https://github.com/ashToronto/Restaurant-App/blob/master/docs/%5C--%5B%5B%5B%5D%5D%5D%5D''kkiooiiiio54377.png?raw=true)
![""](https://github.com/ashToronto/Restaurant-App/blob/master/docs/Screen%20Shot%202018-06-10%20at%205.55.37%20PM.png?raw=true)
![""](https://github.com/ashToronto/Restaurant-App/blob/master/docs/Screen%20Shot%202018-06-10%20at%205.55.52%20PM.png?raw=true)
## Web Project for Picking-up food from the Food express web appl 

Hungry clients of Food Express can visit its website, selecta food item and add it to their shopping cart. They then select a method of payment i.e Cash on pick-up or online payment. They will receive a notification when their order is ready.

The restaurant and client both need to be notified since this app serves as an intermediary.

When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

## Display
The Website features a revolving carosel displaying 6 dishes at a time. Additionally each dish is a flip card with the description and price labelled at the back.


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`


## Dependencies

- Node JS 5.10.x or above
- NPM 3.8.x or above
- morgan
- knex
- node-sass-middleware
- twilio
- Stripe 
- cookie-session
- body-parser

## Screenshots
!["Food-Express Pick-up your order"]
