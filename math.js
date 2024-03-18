let icon = document.querySelector(".menu-icon");
      let cancel = document.querySelector(".cancel");

      icon.onclick = function() {
        document.querySelector(".side-bar").classList.add('show');
      }

      cancel.onclick = function() {
        document.querySelector(".side-bar").classList.remove('show');
      }