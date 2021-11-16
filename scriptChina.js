

var b;
async function covid19()
{
   let a = await fetch("https://api.apify.com/v2/datasets/LQHrXhGe0EhnCFeei/items?format=json&clean=1");
   b = await a.json();
    return b;
    

}

covid19().then((res) =>{
    console.log(res);
    var table = document.getElementById('myTable')

    for (var i = 0; i < 50; i++){
        var row = `<tr>
                        <td>${res[i].currentConfirmedCount}</td>
                        <td>${res[i].confirmedCount}</td>
                        <td>${res[i].suspectedCount}</td>
                        <td>${res[i].curedCount}</td>
                        <td>${res[i].deadCount}</td>
                        <td>${res[i].seriousCount}</td>
                  </tr>`
        table.innerHTML += row


    }
}).catch((e) =>{
    console.log("ERROR");
})