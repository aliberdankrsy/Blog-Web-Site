document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('animated-text');
    const textContent = textElement.textContent.trim();
    let index = 0;
  
    function animateText() {
      if (index < textContent.length) {
        textElement.textContent = textContent.slice(0, index + 1);
        index++;
        setTimeout(animateText, 100); // Yazma hızı (ms cinsinden)
      } else {
        textElement.classList.add('complete');
        setTimeout(function() {
          textElement.classList.remove('complete');
          animateText();
        }, 7000); // Metnin tamamının gözüktüğü süre (ms cinsinden)
      }
    }
  
    animateText();
  });