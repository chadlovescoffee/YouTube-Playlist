
youtube_playlist = {

  app: function() {

    // Required JS
    var required_js = [
        'js/materialize.min.js'
    ];

    // Required CSS
    var required_css = [
      'http://fonts.googleapis.com/icon?family=Material+Icons',
      'css/materialize.min.css',
      'css/youtube_playlist.min.css'
    ];


    // JS HTML
    var js_i = 0;
    var js_html = '';

    $(required_js).each(function () {
      if (!$('head script[src="' + required_js[js_i] + '"]').length > 0) {
        js_html = '<script type="text/javascript" src="' + required_js[js_i] + '"></script>';
      }
      ++js_i;
    });


    // CSS HTML
    var css_i = 0;
    var css_html = '';

    $(required_css).each(function () {
      if (!$('head link[href="' + required_css[css_i] + '"]').length > 0) {
        css_html += '<link href="' + required_css[css_i] + '" rel="stylesheet">';
      }
      ++css_i;
    });

    $('head').append(js_html + css_html);


    // Destination
    var destination = youtube_playlist_setup.destination;

    // Hero Video HTML
    var youtube_playlist_html = 'hi chad';



    // Document Ready
    $( document ).ready(function() {
      $(destination).html('<div class="youtube_playlist_pkg" style="display: none;">' + youtube_playlist_html + '</div>');
      get_playlist();
    });


    //Window Resize
    $(window).resize(function () {

    });




    function get_playlist(){
      $.get('https://www.googleapis.com/youtube/v3/playlists?' +
        'part=snippet' +
        '&id=' + youtube_playlist_setup.playlist_id +
        '&key=' + youtube_playlist_setup.api_key +
        '&maxResults=' + 50,
        function (returned_playlist) {

          console.log(returned_playlist)
      });
    }



    // Video click
    $(document).on('click', destination + ' .xxx', function() {

    });

  } //end app

}; //end Namespace
