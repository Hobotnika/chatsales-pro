document.addEventListener('DOMContentLoaded', function() {
  var videos = document.querySelectorAll('.elementor-widget-video');
  videos.forEach(function(widget) {
    var settings = widget.getAttribute('data-settings');
    if (!settings) return;
    var match = settings.match(/youtu\.be\\\/([A-Za-z0-9_-]{11})/);
    if (!match) return;
    var id = match[1];
    var div = widget.querySelector('.elementor-video');
    if (!div) return;
    div.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + id + '?rel=0" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;"></iframe>';
    div.style.position = 'relative';
    div.style.paddingBottom = '56.25%';
    div.style.height = '0';
    div.style.overflow = 'hidden';
  });
});
