// Add your code here
 // write method submitData that takes two strings as argument
 // string one = user's name
 // string two = user's email
 // returns fetch to access requests inside submitData

 function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
         "Accept": "application/json" 
         },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object.id;
    })
    .catch(function(error){
        document.body.innerHTML = error.message;
    });
 }