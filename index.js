let menuShow = document.querySelector('.menu-section');
      document.querySelector('.menu-icon').onclick = () => {
        menuShow.classList.toggle('show');
      }

      window.addEventListener('scroll', reveal);
      function reveal() {
        var reveals = document.querySelectorAll('.reveal');
      
        for (var i = 0; i < reveals.length; i++) {
          var revealHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 150;

          if (revealTop < revealHeight - revealPoint) {
            reveals[i].classList.add('active');
          } else {
            reveals[i].classList.remove('active');
          }
        }
      }

        /*
        let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
        let header = document.querySelector('.header');
        window.addEventListener ('scroll', () => {
          let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

          if (lastScroll > currentScroll) {
            header.style.top = "0";
          } else {
            header.style.top = "-80px";
          }
          lastScroll = currentScroll;
        })*/

let message = document.querySelector('.appear-message');

message.onclick = function() {
  document.querySelector('.message-form').classList.toggle('appear');
}

/* meassage show out */
document.querySelector('.message-form').classList.add('appear-out');
setTimeout(() => {
  document.querySelector('.message-form').classList.remove('appear-out');
}, 2000);


      
