const modal = document.querySelector(".modal"),
      imgConts = document.querySelectorAll('.img-container'),
      modalImg = document.querySelector('.modal-img'),
      legenda = document.querySelector('.legenda'),
      nomenclatura = document.querySelector('.nomenclatura');

imgConts.forEach(imgCont => {
  imgCont.addEventListener('click', () => {
    modal.classList.add('open');
    modalImg.classList.add('open');
    const imgExp = imgCont.lastElementChild.src;
    modalImg.src = imgExp; 
    const novaLegenda = imgCont.firstElementChild.nextElementSibling.textContent;
    legenda.textContent = novaLegenda;
    const novaNomenclatura = imgCont.firstElementChild.textContent;
    nomenclatura.textContent = novaNomenclatura;
  })
})

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    modalImg.classList.remove('open');
  }
})

modal.addEventListener('mouseover', (e) => {
  if(e.target.classList.contains('open')) {
    modalImg.style.opacity = '1';
    modalImg.style.cursor = 'default';
  }
})