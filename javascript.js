let inputtask =document.getElementById('inputtask');

let addbutton =document.getElementById('addbutton');

let alltasks=document.getElementById('alltasks');
let notasks = document.getElementById('notasks');

let cont =document.getElementById('count')
function show(){


// remove nottasks
if(alltasks.childElementCount > 0){
    notasks.classList.add('none');
    }else{
        notasks.classList.remove('none');
    }
//cal number of tasks
cont.innerText=alltasks.childElementCount;


}
// console.log(inputtask);
// console.log(addbutton);
 let addnewtask= ()=>{
    // get value
let data =inputtask.value;
// console.log(data);
// value without space
let newdata =data.trim();

// validation
if(data.length == 0){

window.alert('Please Enter Your Tasks First');
}else if(newdata.length<=3){

window.alert('Task should be greater than 3 character')

}else if (newdata>50 ){
    window.alert('Task should be Less than 3 character')

}


else{
    // add new task
    alltasks.innerHTML +=   `<div class="alert alert-info">${data} 
    <button class="btn btn-danger btn-sm  float-end delete">Delete</button>
    </div>`;
    
//    remove value from input
    inputtask.value = '';


// remove nottasks
if(alltasks.childElementCount > 0){
notasks.classList.add('none');
}else{
    notasks.classList.remove('none');
}

//cal number of tasks
cont.innerText=alltasks.childElementCount;



//check no task
show();
}



}

addbutton.addEventListener('click',addnewtask);
document.addEventListener('click',(e)=>{

if(e.target.classList.contains('delete')){

    e.target.parentElement.remove();

    //check no task
    show();
    // remove nottasks
if(alltasks.childElementCount > 0){
notasks.classList.add('none');
}else{
    notasks.classList.remove('none');
}

//cal number of tasks
cont.innerText=alltasks.childElementCount;


    
}


})