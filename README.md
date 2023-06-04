# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Weekend React Gallery

    - Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.
        - Added axios.get request to App.jsx in getGallery function, created state variable to set and hold gallery information, rendering gallery properties using .map in return of App function in App.jsx

    - Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
    - Iterate (loop over) the list of gallery data
    - Make GalleryItems
        - Created component folder GalleryList and file GalleryList.jsx in component folder, moved .map to return of GalleryList.jsx, passing props gallery, getGallery, and addLike through GalleryList component in return of App.jsx.

    - Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`. 
    - Update the `GalleryList` to use this component to display an image.
        - Created component folder GalleryItem and file GalleryItem.jsx in component folder, passing image path as prop to GalleryItem, .map remains in GalleryList, GalleryItem function renders image to DOM.

    - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
        - Created state variable for display in GalleryItem with default state set to false, toggleDisplay function will change boolean value of variable to opposite value when called.  Added ternary operator to return of GalleryItem that will render either picture or picture description depending on value of display variable, added onClick functionality to picture and description in ternary operator in return to run toggleDisplay function when clicked.


Duration: Weekend challenge

Prerequisites
Link to software that is required to install the app (e.g. node).

Node.js
Postgres
express
React
pg
axios

Installation
    - Upon cloning repo run npm install, 
    - Copy database information into postico with database name react_gallery, copy sql queries from database.sql into newly created database.
    - npm run server
    - npm run client

Usage
    - User is able to interact with pictures and like buttons on DOM - upon click of picture, picture description will appear (clicking again on description will revert back to picture display), and upon click of like button, like total for that picture will be increased on DOM.


Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. (Thank your people) - felt appropriate to leave this be for now

