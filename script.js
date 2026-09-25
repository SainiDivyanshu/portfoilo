(function() {
    var btn = document.getElementById('themeToggle');
    var root = document.documentElement;
    try {
      var saved = localStorage.getItem('portfolio-theme-v2');
      if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
    } catch (e) {}
    btn.addEventListener('click', function() {
      var current = root.getAttribute('data-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var effectiveCurrent = current || (prefersDark ? 'dark' : 'light');
      var next = effectiveCurrent === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('portfolio-theme-v2', next); } catch (e) {}
    });
  })();

  // Sequential graph pulse animation (BFS-style traversal), respects reduced motion
  (function() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var order = ['n1','n2','n4','n3','n5','n7','n6','n8','n9'];
    if (reduce) {
      order.forEach(function(id){ document.getElementById(id).classList.add('g-node-active'); });
      return;
    }
    var i = 0;
    function step() {
      order.forEach(function(id, idx){
        var el = document.getElementById(id);
        if (idx < i) el.setAttribute('class','g-node g-node-active');
        else if (idx === i) el.setAttribute('class','g-node g-node-frontier');
        else el.setAttribute('class','g-node');
      });
      i++;
      if (i > order.length) i = 0;
    }
    step();
    setInterval(step, 650);
  })();
