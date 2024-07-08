
///scrolling to sections
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust 50 to the height of your fixed navbar if needed
                behavior: 'smooth'
            });
        });
    });
});


///slide-in trasition
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.5
    });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  

///navbar menu in small screens
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const nav = document.querySelector('nav');
    const navItems = document.querySelector('.navbar-items');

    menuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        nav.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (nav.classList.contains('active') && !nav.contains(event.target)) {
            nav.classList.remove('active');
        }
    });

    document.addEventListener('scroll', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });

    navItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-item')) {
            nav.classList.remove('active');
        }
    });
});
