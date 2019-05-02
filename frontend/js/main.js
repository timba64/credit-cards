var abm = abm || {};
abm.popUpBox = new function() {
// behavor by open-close modal window *********************
    this.init = function() {
      // open popUp with call Phone form and class bibop   ***********************
      var bopy = $('.bibop');

      function bibopas(){
        bopy.css('display', 'block').show().animate({ opacity: 1 }, 350);
        $('body').addClass('noscroll');
      }

      // popUp close  ******************
      function closeModal(){
        if($('body').hasClass('noscroll')){
          $('body').removeClass('noscroll');
        }

        var b = $('#blanket');
        b.animate({ opacity: 0 }, 650);
        setTimeout(function() {
          b.css('display', 'none');
        }, 650);

        bopy.animate({ opacity: 0 }, 650);
        setTimeout(function() {
          bopy.css('display', 'none');
        }, 650);
      }

      // call function that open popup  ********************
      $('.pop-js').on('click touchend', function(e) {
        bibopas();
        e.preventDefault();
      });

      // call function that close modal  ********************
      $('.close, #blanket').on('click touchend', function() {
        closeModal();
      });
    }
};
var abm = abm || {};
abm.rightMenu = new function() {
  // make top menu  *********************
  this.init = function() {
    var mb = document.querySelector('.m-button'),
    cb = document.querySelector('.close-button'),
    hd = document.querySelector('.header-down');
    mb.addEventListener('click', function(){
        this.classList.toggle('open');
        hd.classList.toggle('open');
    });
    cb.addEventListener('click', function(){
        hd.classList.toggle('open');
        mb.classList.toggle('open');
    });
  }
};
var abm = abm || {};
abm.faqAccordion = new function() {
  this.init = function() {
    var acc = document.getElementsByClassName("accordion"), i;

    for (i = 0; i < acc.length; i++) {
       acc[i].addEventListener("click", function() {
           this.classList.toggle("active");

           var panel = this.nextElementSibling;
           if (panel.style.maxHeight){
             panel.style.maxHeight = null;
           } else {
             panel.style.maxHeight = panel.scrollHeight + "px";
           }
       });
     }
  }
};
var abm = abm || {};
abm.scrollTop = new function() {
  this.init = function() {
    // smoth scrolling *************************/
    $("#lineButton").on("click","a", function (e) {
      e.preventDefault();
      var ido  = $(this).attr('href'), topo = $(ido).offset().top - 90;
      $('body,html').animate({scrollTop: topo}, 1500);
    });
  }
};
var abm = abm || {};
abm.esquTel = new function() {
  this.init = function() {
    // make mask for input in forms (plugin maskedinput)
    $(".wpcf7-tel").mask("375 (99) 999-99-99");
  }
};
var abm = abm || {};
jQuery(document).ready(function($) {
  abm.popUpBox.init();
  abm.faqAccordion.init();
  abm.rightMenu.init();
  abm.scrollTop.init();
  abm.esquTel.init();
});
