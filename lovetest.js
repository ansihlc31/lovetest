const yourname =document.getElementById('yourname')
const namepatner =document.getElementById('patnername')
const d= document.querySelector('.d')

const c= document.querySelector('.c')
const b= document.querySelector('.b');

b.addEventListener('click',function(){
    let text;
    if(yourname.value ==="" || namepatner.value ===""){
        alert('please enter  both names')
    }
    else{
       
        let pre = document.createElement('div')
        
        pre.classList.add('pre')
        c.appendChild(pre)
        function anish(){
            return Math.floor(Math.random() * 101)
        }
        
        
    }
    
    text= `${yourname.value}`+" " +"love"+ " "+`${namepatner.value}`+" "+ anish() + "%";
    const pre= document.querySelector('.pre').innerHTML=text;
            yourname.value ="" ;
            namepatner.value ="";  
        })
