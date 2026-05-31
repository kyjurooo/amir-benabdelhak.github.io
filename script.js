// Nav toggle mobile
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(10,10,10,0.98)';
  } else {
    nav.style.background = 'rgba(15,15,15,0.92)';
  }
});

// Animate skill bars on scroll
function animateBars() {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      bar.style.width = bar.style.width !== '0px' ? bar.style.width : '0%';
      bar.style.transition = 'width 1.2s ease';
      // width set inline in HTML already
      bar.classList.add('animated');
    }
  });
}

window.addEventListener('scroll', animateBars);
window.addEventListener('load', animateBars);

// Animate timeline blocks on scroll
function animateTimeline() {
  const blocks = document.querySelectorAll('.timeline-block');
  blocks.forEach((block, i) => {
    const rect = block.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      block.style.animationDelay = `${i * 0.1}s`;
      block.style.opacity = '1';
    }
  });
}

window.addEventListener('scroll', animateTimeline);
window.addEventListener('load', animateTimeline);

// Contact form — open mailto
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const objet = document.getElementById('objet').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent(`[Portfolio] ${objet} — ${name}`);
  const body = encodeURIComponent(`De : ${name} (${email})\n\n${message}`);
  window.location.href = `mailto:amir.benabdelhak30@gmail.com?subject=${subject}&body=${body}`;
}

// Fade-in on scroll for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.mission-card, .project-card, .competence-card, .domain-block, .interest-card, .stat-item');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
    observer.observe(card);
  });
});
