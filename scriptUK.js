

var b;
async function covid19()
{
   let a = await fetch("https://covidtracking.com/api/states");
   b = await a.json();
    return b;
    

}

covid19().then((res) =>{
    console.log(res);
    var table = document.getElementById('myTable')

    for (var i = 0; i < res.length; i++){
        var row = `<tr>
                        <td>${res[i].date}</td>
                        <td>${res[i].state}</td>
                        <td>${res[i].positive}</td>
                        <td>${res[i].negative}</td>
                        <td>${res[i].hospitalized}</td>
                        <td>${res[i].death}</td>
                  </tr>`
        table.innerHTML += row


    }
}).catch((e) =>{
    console.log("ERROR");
})