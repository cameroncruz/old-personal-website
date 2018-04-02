window.onload = function() {
  console.log("Init ClipboardJS");
  new ClipboardJS('.cpy-clipboard');

  var setTooltip = function() {
    this.setAttribute("uk-tooltip", "title: Copied!; pos: top-right");
    this.style.opacity = 0.54;
};

  Array.from(document.getElementsByClassName('cpy-clipboard')).forEach(function(element) {
      element.addEventListener('click', setTooltip);
    });

  document.getElementById('loading').classList.add('loading-fade');
};
