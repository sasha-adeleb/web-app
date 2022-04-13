let images = document.querySelectorAll('.images');



function addModal(event){
  const src =  event.target.src;
  let modal =  document.createElement('div');
  modal.style.cssText = ` position: fixed; top:0; left: 0; height:100%;
    width:100%;
    cursor:pointer;
    background:url(${src})  center/contain no-repeat;    
    transform: scale(0.3);
    opacity: 0;
    transition: all 300ms ease-in 10ms;        
  `;

    setTimeout(()=>{
      modal.style.transform = 'scale(1.1)';
      modal.style.opacity  = '1';
    },0);
   
  document.body.append(modal);
  modal.onclick = function(){
    modal.remove();
  }

}


images.forEach(image=>{
  image.addEventListener('click',addModal);
})
