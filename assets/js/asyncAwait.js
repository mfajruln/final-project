let loadData = async () => {
    try {
        let getData = await fetch("https://jsonplaceholder.typicode.com/users");
        let convertData = await getData.json();
        let bodyTable = document.getElementById("bodyData")
        let dataPlaceholder = "";
        // console.log(convertData);

        convertData.forEach(data => {
            dataPlaceholder += `
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.phone}</td>
                <td>${data.email}</td>
                <td><button type="button" class="btn btn-primary" onclick="updateData('${data.name}')">update</button></td>
            </tr>
            `
        });

        bodyTable.innerHTML = dataPlaceholder;
    } catch (error) {
        
    }
}

 function updateData(idData) {
    // alert(`ingin update data ${idData} ?`)
    // console.log(idData, "mau update data");
 }
