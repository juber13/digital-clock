const timerContainer = document.getElementsByClassName('container')[0];



window.addEventListener('DOMContentLoaded' , () => {
    // console.log('hey');
    setInterval(() => {
    const date = new Date();
    let hourse =  date.getHours();
    const minute =  date.getMinutes();
    const second =  date.getSeconds();
    // const pm = date.get
    let ampm = hourse >= 12 ? 'PM' : 'AM';
    let text;

    if(hourse <= 9){
        // hourse = hourse - 12;
        text = "0"
    }else{
        text  = ""
    }

    

    timerContainer.children[0].innerHTML = `${text}${hourse >= 12 ? hourse - 12  : hourse} <small>Hourse</small> `;
    timerContainer.children[1].innerHTML = `${minute <= 9 ? "0" + minute : minute} <small>Minute</small>` ;
    timerContainer.children[2].innerHTML = `${second <= 9 ? "0" + second : second} <small>Second</small>`;
    timerContainer.children[3].innerHTML = ampm;
 },1000)

})