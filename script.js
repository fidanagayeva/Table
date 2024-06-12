fetch("http://localhost:8080/invoices").then(res => res.json()).then(data => data.forEach(
    post => addElement(post.number, post.title, post.body,post.name,post.surname,post.status)
));

const tableBody = document.querySelector(".table__body")

function addElement(id, title, body,surname,status,number) {
    const newTr = document.createElement("tr");
    const idTd = document.createElement("td");
    const titleTd = document.createElement("td");
    const bodyTd = document.createElement("td");
    const statusTd = document.createElement("td");
    const surnameTd = document.createElement("td");
    const numberTd = document.createElement("td");
   

    idTd.textContent = id;
    titleTd.textContent = title;
    bodyTd.textContent = body;
    surnameTd.textContent = surname;
    statusTd.textContent = status;
    numberTd.textContent = number;

    newTr.append(idTd, titleTd, bodyTd,statusTd,surnameTd,numberTd)

    tableBody.append(newTr)



}



addElement();