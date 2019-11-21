window.addEventListener("load", mainFunction);

function mainFunction() {



  const scrollIcon = document.querySelector('.icon');

  scrollIcon.addEventListener('click', scrollFunction);


  function scrollFunction() {
    document.querySelector('main').scrollIntoView({
      behavior: 'smooth'
    }, 1000);
  };

  function scrollAppear() {
    let intro = document.querySelector('.intro');
    let introPosition = intro.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 2;

    if (introPosition < screenPosition) {
      intro.classList.add('intro-appear')
    }

  }

  window.addEventListener('scroll', scrollAppear);



















};