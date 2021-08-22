$('document').ready(function(){



  /** METHODS | FUNCTIONS  **/
  const activateMenu = () =>{
    const togglerMenuDiv = $('.tee-nav__menu');
    const togglerButton = $('.tee-nav__toggler');
    const icon_menu = 'fa-reorder';
    const icon_close = 'fa-close';
    if (!togglerMenuDiv.hasClass('active')){

      $('.tee-nav__menu').fadeIn(200, function(){
        $(this).addClass('active')
        togglerButton.children().first().removeClass(icon_menu).addClass(icon_close)
      })
    }
  }

  const disableMenu = () => {
    const togglerMenuDiv = $('.tee-nav__menu');
    const togglerButton = $('.tee-nav__toggler');
    const icon_menu = 'fa-reorder';
    const icon_close = 'fa-close';
    if(togglerMenuDiv.hasClass('active')){
      $('.tee-nav__menu').fadeOut(200, function(){
        $(this).removeClass('active')
        togglerButton.children().first().removeClass(icon_close).addClass(icon_menu)
      })
    }
  }


  const togglerMenu = () => {
    activateMenu()
    disableMenu()
  }


  /*** ACTIONS ***/

  $('.tee-nav__toggler').on('click', togglerMenu)

  $(this).on('scroll', disableMenu)


});