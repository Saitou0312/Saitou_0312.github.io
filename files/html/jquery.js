var text = document.getElementById('text');
$('img').hover(
    function() {
       $('text').fadeIn(1000);
    },
    function() {
      $('text').fadeOut(1000);
    }
);
