document.addEventListener('DOMContentLoaded', function() {
  var copyButton = document.getElementById('btn-copy');
  var notification = document.getElementById('notification');

  copyButton.addEventListener('click', function() {
    var textToCopy = 'Текст, який ви хочете скопіювати';
    var textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    notification.textContent = 'The text is copied to the clipboard!';
    notification.style.display = 'block';

    setTimeout(function() {
      notification.classList.add('notification-show');
    }, 10); 

    setTimeout(function() {
      notification.classList.remove('notification-show');
    }, 2100);
  });
});



document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.animated-element');

    var isInViewport = function(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    var handleScroll = function() {
        elements.forEach(function(element) {
            if (isInViewport(element) && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('load', function() {
        handleScroll(); 
    });

    document.addEventListener('scroll', handleScroll);
});
