

var b;
async function covid19()
{
   let a = await fetch("https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1");
   b = await a.json();
    return b;
    

}

covid19().then((res) =>{
    console.log(res);
    var table = document.getElementById('myTable')

    for (var i = 0; i < 50; i++){
        var row = `<tr>
                        <td>${res[i].activeCases}</td>
                        <td>${res[i].recovered}</td>
                        <td>${res[i].deaths}</td>
                        <td>${res[i].totalCases}</td>
                        <td>${res[i].sourceUrl}</td>
                        <td>${res[i].lastUpdatedAtApify}</td>
                  </tr>`
        table.innerHTML += row


    }
}).catch((e) =>{
    console.log("ERROR");
})