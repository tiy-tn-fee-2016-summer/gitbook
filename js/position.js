(function() {
  function getStoredPosition() {
    return localStorage.positionExamples && JSON.parse(localStorage.positionExamples);
  }

  function initApplication() {
    $('.positionable').find('input').on('change', function() {
      var $this = $(this);
      var positionable = $this.parent('.positionable');
      var property = $this.data('property');
      var unit = $this.data('unit');

      positionable.css(property, $this.val() + unit);
    });

    $('.toggle-examples__btn').on('click', function() {
      $('.positionable').toggle();
      localStorage.positionExamples = !getStoredPosition();
    });

    if (getStoredPosition()) {
      $('.positionable').toggle();
    }
  }

  document.onreadystatechange = function() {
    if (document.readyState == 'complete') {
      initApplication();
    }
  };
})();
