let button=document.querySelector('#button');
let button1=document.querySelector('#button1');

let body=document.querySelector('body');


button.addEventListener('click',function()
{
    body.style.backgroundColor='aquamarine';
});

button1.addEventListener('click',function()
{
    body.style.backgroundColor='white';
})