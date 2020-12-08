function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style.visibility = 'visible';
    //Set default location if one isn't provided
    if ("#location" === "") {
        let location = 'Ann Arbor';
    } else {
        let location = 
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "fahrenheit";

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=32ee58e8f843c64748b06a54fc389fef';
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        console.log(JSON.stringify(json));
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}

//32ee58e8f843c64748b06a54fc389fef

//zip code:
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

//city name:
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}