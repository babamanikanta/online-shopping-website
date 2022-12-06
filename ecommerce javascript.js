$( document ).ready(function() {
    $(document).ready(function(){
    
    $('#content_left_menu> ul > li ul').each(function(index, e){
      var count = $(e).find('li').length;
      var content = '<span class="cnt">' + count + '</span>';
      $(e).closest('li').children('a').append(content);
    });
    $('#content_left_menuul ul li:odd').addClass('odd');
    $('#content_left_menuul ul li:even').addClass('even');
    $('#content_left_menu> ul > li > a').click(function() {
      $('#content_left_menuli').removeClass('active');
      $(this).closest('li').addClass('active');	
      var checkElement = $(this).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        $(this).closest('li').removeClass('active');
        checkElement.slideUp('normal');
      }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('#content_left_menuul ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
      }
      if($(this).closest('li').find('ul').children().length == 0) {
        return true;
      } else {
        return false;	
      }		
    });
    });
    });