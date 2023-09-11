function load(){
    let button = document.getElementById('submit-button');

    let grades=[];
    
    button.addEventListener('click', ()=>{
        let text_box =  document.querySelector('body > section:nth-child(3) > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(5) > input[type=text]');
        let td = document.querySelector('body > section:nth-child(3) > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3)');
        if (text_box.value === '-'){
            td.style.background = 'yellow';
        }
        else if(Number(text_box.value)>= 5.5){
            td.style.background = 'green';
        }
        else (Number(text_box.value) <= 5.5){
            td.style.background = 'red';
        }

        grades.push(Number(text_box.value));
    })
}