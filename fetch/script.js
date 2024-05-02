fetch("product.json")
.then(function(response){
    return response.json()
})
.then(function(products){
    let alldata = document.queryselctor("#data-result");
    let result = "";
    for(let product of products){
        result +=`
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.inventory}</td>
            <td>${product.productCode}</td>
        </tr>
        `;
    }
    //console.table(result)
    alldata.innerHTML = result
})