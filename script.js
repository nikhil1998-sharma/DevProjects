const menu = document.getElementById('menu');
const list = document.getElementById('list');

menu.addEventListener('click', ()=>{
    list.classList.toggle('active'); 
})


function checkMediaQuery() {
  
    if (window.innerWidth > 600) {
      
      list.classList.remove('active');
    }
  }


  window.addEventListener('resize', checkMediaQuery);