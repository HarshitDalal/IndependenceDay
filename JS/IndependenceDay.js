const contaner = document.querySelector('#symbols').querySelector('.contaner').querySelectorAll('.block');
contaner.forEach((value,index)=>{
    
    value.onclick = ()=>{
        document.querySelector('#info').style.display = 'block';
        let text = value.querySelector('.title').innerHTML;
        let pera = value.querySelector('.pera').innerHTML;
        document.querySelector('#tih1').innerHTML = text;
        document.querySelector('#p1').innerHTML = pera;


        document.querySelector('#btn').onclick=()=>{
            document.querySelector('#info').style.display = 'none';
        }
    }
})
