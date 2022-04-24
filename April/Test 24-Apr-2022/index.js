
function fetchUserData(){
    var userData
const user=fetch("https://reqres.in/api/users?page=2")
.then(data=>{
    return data.json()
 })
.then(jsonData=>{
    console.log("jsonData",jsonData.data);
    var userData =jsonData.data
    if(userData && userData.length >0){
        for(var i=0;i<userData.length;i++ ){
            var item= document.createElement("div")
            item.classList.add("item");
            var img=document.createElement("img");
            img.src=userData[i].avatar
            var name=document.createElement("p");
            name.classList.add('name');
            name.innerText="Name: "+userData[i].first_name +" "+  userData[i].last_name
            var email=document.createElement("p");
             email.classList.add('email')
             email.innerText="Email: "+userData[i].email;
            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(email);
            document.querySelector('.base').appendChild(item)
        }
    }
 
})
.catch(error=>{
    console.log(error)
})
 
}
fetchUserData();
