/* The script for the scroll effect */
$.fn.visible = function(partial) {
    
  var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
var el = $(el);
if (el.visible(true)) {
el.addClass("already-visible"); 
} 
});

win.scroll(function(event) {

allMods.each(function(i, el) {
var el = $(el);
if (el.visible(true)) {
  el.addClass("come-in"); 
} 
});

});



let scrollPos = 0;
const nav = document.querySelector('.site-nav');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add('is-visible');
    nav.classList.remove('is-hidden');
  } else {
    // Scrolling DOWN
    nav.classList.add('is-hidden');
    nav.classList.remove('is-visible');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(checkPosition));


/* Mobile navbar */
icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const el = document.getElementById('mobilenav');

const hiddenEl = document.getElementById('NAVBARMOBILE');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
  // hiddenEl.style.display = 'block';

  // 👇️ if you used visibility property to hide div
  hiddenEl.style.visibility = 'visible';
});

// ✅ (optionally) Hide element on mouse out
el.addEventListener('mouseout', function handleMouseOut() {
  // hiddenEl.style.display = 'none';

  // 👇️ if you used visibility property to hide div
  hiddenEl.style.visibility = 'NAVBARMOBILE';
});


