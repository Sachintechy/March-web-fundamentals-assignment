console.log("hiiiii")
const userList = [
    { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" }, 
    { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
    { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" }, 
    { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
    { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
    { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }]

function showData(userlist){
    var tableRef=document.createElement('table');
    var tr=document.createElement('tr');
    var th1=document.createElement('th');
    var th2=document.createElement('th');
    var th3=document.createElement('th');
    var th4=document.createElement('th');
    th1.innerText="First Name"
    th2.innerText="Last Name"
    th3.innerText="Email"
    th4.innerText="Photo"
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tableRef.appendChild(tr);
     for(var i=0;i<userlist.length;i++){
        var tr=document.createElement('tr');
        var td1=document.createElement('td');
        var td2=document.createElement('td');
        var td3=document.createElement('td');
        var td4=document.createElement('td');
        td1.innerText=userlist[i].first_name;
        td2.innerText=userlist[i].last_name;
        td3.innerText=userlist[i].email;
        td4.innerHTML=`<img src=${userlist[i].avatar}>`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tableRef.appendChild(tr);
     }
     document.querySelector("body").appendChild(tableRef);

} 
showData(userList)
