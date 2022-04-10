const names = ['virat', 'ronaldo', 'messi', 'dhoni', 'rohit']
 
const div =document.querySelector('container');
const list=document.createElement('ol')
list.classList.add="list";
div.appendChild(list);
for(let i=0;i<names.length;i++){
    const item =document.createElement('li');
    item.classList.add(names[i]);
     item.innerHTML=names[i];
     list.appendChild(item);
}



