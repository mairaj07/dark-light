$(document).ready(function(){
    // Check if user has already set a preference
    if(localStorage.getItem('theme') === 'dark') {
      $('body').addClass('dark-mode');
      $('#modeToggle').prop('checked', true);
    }

    $('#modeToggle').on('change', function(){
      if($(this).is(':checked')) {
        $('body').addClass('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        $('body').removeClass('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  });