/* Global Variables */

// Create a new date instance dynamically with JS
let date = new Date();
let data={};
//creat a personal APIKey and the baseURL and zip code which client insert it
let apiKey = "17adfa128a744e2797f74d4749aeb8d6"; //it is my personal apikey
let baseurl="http://api.openweathermap.org/data/2.5/forecast?zip="; // it is the base url of weather map
let zip =  document.getElementById('zip').value; //get the value of zip code we enter in the website
let fel=""; //get the value of feelings we enter in the website
let urlb=`${baseurl}+${zip}+${apiKey}`;

document.getElementById('generate').addEventListener('click', performAction); // make an action on button generate in the website after add zip code and felling

function performAction(e){ //function for action button 
  fel=document.getElementById('feelings').value;
  getweather(urlb);
postData("/get",{date:date, felling:fel,temp:data.temp}); //post data to the server by the router /get
retrieveData();
}

const getweather = async (url='')=>{//function to send data from the weathermap to my website by fetch the url (baseurl + zipcode we enter + my personal apikey)
  const res = await fetch(url)
  try {
    const gettemp = await res.json();
    return gettemp;
    data=gettemp;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const postData = async ( url = '', data = {})=>{ //function to post data from client to server 
  const response = await fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', 
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header        
});

  try {
    const newData = await response.json();
           return newData
  }catch(error) {
  console.log("error", error);
  // appropriately handle the error
  }
}

  const retrieveData = async () =>{ //function to retrive data from server to my website in user interface
    const request = await fetch(urlb);
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = "felling: "+fel;
    document.getElementById("date").innerHTML ="date: "+date;
    
  }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }
  