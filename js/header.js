; (function () {
  if (window.matchMedia('(max-width: 861px)').matches) {
    return;
  }

  var headerPage = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      headerPage.classList.add('active');
    } else {
      headerPage.classList.remove('active');
    }
  });
})();