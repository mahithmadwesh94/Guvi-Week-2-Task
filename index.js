var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    console.log(request.responseText);
    let count = 0;
    let jsonObject = JSON.parse(this.responseText);

    for(let i in jsonObject){
        count+= jsonObject[i].population
    }

    console.log('total population',count);
}