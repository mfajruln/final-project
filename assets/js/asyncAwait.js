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
            </tr>
            `
        });

        bodyTable.innerHTML = dataPlaceholder;
    } catch (error) {
        
    }
}
