Creating new note in SPA

browser <- server
    - get the files from the server
browser 
    - type a new note using the form then save
    - because of the JS code from the server, it prevented the form from 
    the default of submitting data to the server and the use of GET method 
    that will send request for the files (html, css, js) in the server again
    - new note is added in the list by manipulating DOM using JS
    - rerender the list with the new note, without reloading the whole page
browser -> server
    - send the new note in the server using the POST method as a JSON.string