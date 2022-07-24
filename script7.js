//1. Get all the countries from the Asia continent /region using the Filter function

var request =new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);

    let result1 = res.filter((a)=>a.region === "Asia").map((a)=>a.name);
    console.log(result1);

//2. Get all the countries with a population of less than 2 lakhs using Filter function

     let result2 = res.filter((p)=>p.population<200000).map((p)=>p.name);
    console.log(result2);

//3. Print the following details name, capital, flag using forEach function

         let result3 = res.forEach(ele => { console.log(ele.name +" " +ele.capital +" "+ ele.flag);
  
    });
   
//4. Print the total population of countries using reduce function
   let result4 = res.reduce((acc,tot)=>tot.population+acc,0);
   console.log(result4);
   
//5. Print the country which uses US Dollars as currency.
 let result5 = res.filter((money)=>{ for(var i = 0; i<money.currencies.length; i++)
  if(money.currencies[i].code==="USD")
  {
    return true
  }
 
});
let currency = result5.map((money)=>money.name);
console.log(currency);


}