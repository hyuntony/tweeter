$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const currentCount = ($(this).val().length);
    const counter = $(this).closest('.tweet-form').find('.counter');
    const countRemain = 140 - currentCount;
    
    counter[0].value = countRemain;
    if (countRemain < 0) {
      counter.addClass("negative");
    }
    if (countRemain >= 0) {
      counter.removeClass("negative");
    }
  });
});
