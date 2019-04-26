function toggleContent(evt){
    var clickEl = evt.target;

    if(clickEl.classList.contains('read-more-read-less__cta')){

        var currentContainer = clickEl.closest('read-more-read-less');

        if(currentContainer){
            
        }

function toggleContent(evt) {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('read-more-read-less__cta');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline-block';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline-block';
  }
}
};
if(container.length){
    document.getElementsByClassName('read-more-read-less__container')[0]
    .addEventListener('click', toggleContent);
}