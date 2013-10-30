$( document ).ready( function(){


  $('.panel').click(function(el){
    var front = $(this)[0];
    console.log(this);

    var back_content = "<h1>" + $('h6', this).text() + "</h1>";
    back_content += "<p class='button back-button'>Gå tilbake</p>";
    var back = flippant.flip(front, back_content, 'modal');

    back.addEventListener('click', function(e) {
      if (e.target.classList.contains('back-button')) {
        // flipper.querySelector('h2').innerText = back.querySelector('h1').value
        // flipper.querySelector('p').innerText = back.querySelector('p').value
        var close_event = new CustomEvent('close');
        back.dispatchEvent(close_event);
      }
    })


  });

  $('.flipped').click(function(el){
    alert('close');
    var front = $(this)[0];
    

  });
  // var front = $('h2')[0];
  // var back_content = "&lt;h1>I'm the back!&lt;/h1>";



  // var back = flippant.flip(front, back_content);

// back.close();

});

