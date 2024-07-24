# re-furnish


_Where pre-loved furniture finds a new home!_

re-furnish is a full stack, multi-page web application that allows users to post furniture that they want to sell and contact sellers for items they are interested in. Our company aims to promote sustainability and buying secondhand by offering affordable and local options for our customers

Users:

- can browse a list of featured furniture on the home page
- can filter items by a price range
- can "like" items to refer to later
- can send an email to the seller for an item listed

Admins:

- can post items for sale
- can delete items from the site
- can mark items as "Sold" or "Unsold"
- can send a message by email to negotiate with buyers

# Final Product

## View all items, and search by price
Users can view all the items on the homepage and filter them by price.

!["View items on homepage and filter listings by price."](https://github.com/rebecca-romeo/midterm-group-1/blob/master/docs/1%20-%20homepage%20and%20filter%20feature.gif)

## View more information, and contact the seller
Users can view an item's description and contact the seller.

!["View item description and contact seller."](https://github.com/rebecca-romeo/midterm-group-1/blob/master/docs/2%20-%20item%20description.gif)

## Like and unlike photos
Users can "like" items and refer to them later in the favorites page. They can also remove items from favourites.

!["Like items and view it in favorites page."](https://github.com/rebecca-romeo/midterm-group-1/blob/master/docs/3%20-%20add%20item%20to%20favorites.gif)

## Sell an item
Users can create a new listing to sell their items.

!["Create a new listing to sell an item."](https://github.com/rebecca-romeo/midterm-group-1/blob/master/docs/4%20-%20create%20a%20new%20listing.png)

## View your listings, mark them sold, or delete a listing
Users can view their listings, mark items as sold or unsold, or delete the listing from the site.

!["View listings to mark items as sold or unsold, or delete it from the site."](https://github.com/rebecca-romeo/midterm-group-1/blob/master/docs/5%20-%20listings%20page%20features.gif)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
6. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/home`

## Warnings & Tips

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- bootstrap
- chalk
- cookie-session
- dotenv
- ejs
- express
- morgan
- pg
- sass
- typewriter-effect
