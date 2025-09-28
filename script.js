// Simple reveal-on-scroll using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    elems.forEach(el => observer.observe(el));

    // optional: small handlers for demo buttons (replace with real links)
    document.getElementById('discordBtn')?.addEventListener('click', (e) => {
      e.preventDefault();
      // replace with real invite link or mailto modal
      window.open('https://discord.gg/', '_blank');
    });
    document.getElementById('discordBtn2')?.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://discord.gg/', '_blank');
    });

    // newsletter demo (prevent real submit)
    const news = document.getElementById('newsletterForm');
    if (news) {
      news.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks! (This is a demo — integrate your email provider later.)');
        news.reset();
      });
    }
  });
