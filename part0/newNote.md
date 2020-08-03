# Creating new note in SPA


## browser -> server
- send request for to the server using GET method 
## browser <- server 
- send HTML code
## browser -> server
- browser render HTML
- send request to the server for get the CSS file attached in the HTML code 
## browser <- server 
- send CSS code
## browser -> server
- browser render CSS
- send request to the server for get the JS file attached in the HTML code 
## browser <- server 
- send JS code
## browser -> server
- browser render JS
- send request to the server for get the JSON file attached in the JS code 
## browser 
- type a new note in the form then save
- because of the JS code from the server, it prevented the form from 
    the default of submitting data to the server and the use of GET method 
    that will send request for the files (html, css, js) in the server again
- new note is created from the value of the form and date is saved when 'save' button is clicked
- the new note is added/pushed in the list by manipulating the DOM using JS
- rerender the list with the new note, without reloading the whole page
## browser -> server
- send the new note in the server using the POST method as a JSON.string