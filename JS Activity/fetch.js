// fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     // Get the data keys
//     const dataHeaders = Object.keys(data.data[0]);

//     // Create table header elements
//     const headerRow = document.getElementById('table-headers');
//     dataHeaders.forEach(header => {
//         const th = document.createElement('th');
//         th.textContent = header;
//         headerRow.appendChild(th);
//     });

//     // Create table rows with values
//     const tableBody = document.getElementById('table-body');
//     data.data.forEach(item => {
//         const row = document.createElement('tr');
//         dataHeaders.forEach(header => {
//             const td = document.createElement('td');
//             td.textContent = item[header];
//             row.appendChild(td);
//         });
//         tableBody.appendChild(row);
//     });
// })
// .catch(error => console.log(error));

// ___________________________________________________________________________________________________


// async function fetchText(){
//     let response = fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817');
//     let data = await response.text();
//     console.log(data);
//     data = JSON.parse(data);
//     const dataHeaders = Object.keys(data.data[0]);
//     const headerRow = document.querySelector('#table-headers');
//     dataHeaders.forEach(header=>{
//         const th = document.createElement('th');
//         th.textContent(header);
//         headerRow.appendChild(th);
//     });
//     const tableValues = document.querySelector('#table-values');
//     data.data.forEach(value=>{
//         const tr = document.createElement('tr');
//         dataHeaders.forEach(header=>{
//             const td = document.createElement('td');
//             td.textContent = value[header];
//             tr.appendChild(td);
//         });
//         tableValues.appendChild(tr);
//     });
// }


async function fetchText() {
    try {
        
        let response = await fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817');
        let data = await response.text();
        console.log(data);
  
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        const dataHeaders = Object.keys(dataObj.data[0]);
  
        const headerRow = document.querySelector('#table-headers');
        dataHeaders.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
  
        const tableValues = document.querySelector('#table-values');
        dataObj.data.forEach(value => {
            const tr = document.createElement('tr');
            dataHeaders.forEach(header => {
                const td = document.createElement('td');
                td.textContent = value[header];
                tr.appendChild(td);
            });
            tableValues.appendChild(tr);
        });
    } catch (error) {
      console.log('Error:', error);
    }
  }



fetchText();
  