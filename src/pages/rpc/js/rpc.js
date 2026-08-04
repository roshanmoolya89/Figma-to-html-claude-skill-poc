(function(){
  // Accessible carousel: uses buttons for dots, keyboard support, pause/resume and stops on user interaction.
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.carousel-dot');
  var pauseBtn = document.querySelector('.carousel-pause');
  var current = 0;
  var total = slides.length;
  var interval = null;
  var autoDelay = 5000;
  var paused = false;

  function setAriaPressed(idx){
    for(var i=0;i<dots.length;i++){
      var d = dots[i];
      if(i===idx){ d.setAttribute('aria-pressed','true'); d.classList.add('active'); }
      else { d.setAttribute('aria-pressed','false'); d.classList.remove('active'); }
    }
  }

  function show(idx, userTriggered){
    for(var i=0;i<total;i++){ if(slides[i]) slides[i].style.display='none'; }
    if(slides[idx]) slides[idx].style.display='block';
    current = idx;
    if(dots.length) setAriaPressed(idx);
    if(userTriggered){ stopAuto(); }
  }

  function next(){ show((current+1)%total, false); }

  function startAuto(){ if(interval) clearInterval(interval); interval = setInterval(next, autoDelay); paused = false; if(pauseBtn){ pauseBtn.setAttribute('aria-pressed','false'); pauseBtn.textContent = 'Pause'; } }
  function stopAuto(){ if(interval){ clearInterval(interval); interval = null; } paused = true; if(pauseBtn){ pauseBtn.setAttribute('aria-pressed','true'); pauseBtn.textContent = 'Resume'; } }

  if(pauseBtn){
    pauseBtn.addEventListener('click', function(e){
      if(paused){ startAuto(); }
      else { stopAuto(); }
    });
  }

  for(var i=0;i<dots.length;i++){
    (function(i){
      var d = dots[i];
      d.addEventListener('click', function(e){ show(i, true); });
      d.addEventListener('keydown', function(e){
        var key = e.key || e.keyCode;
        if(key === 'Enter' || key === ' ' || key === 'Spacebar' || key === 13 || key === 32){ e.preventDefault(); show(i, true); }
      });
      d.addEventListener('focus', function(){ stopAuto(); });
    })(i);
  }

  // initialize
  if(total>0){ show(0,false); startAuto(); }
})();
