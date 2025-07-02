function scrollToHighlight() {
  const highlightSection = document.getElementById('highlight');
  if (highlightSection) {
    highlightSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// 1. Floating vodka bottle animation that follows scroll
(function createFloatingBottle() {
  const bottle = document.createElement('img');
  bottle.src = 'https://pngimg.com/uploads/vodka/vodka_PNG32.png'; // Placeholder vodka bottle PNG
  bottle.alt = 'Floating Vodka Bottle';
  bottle.id = 'floating-bottle';
  bottle.style.position = 'fixed';
  bottle.style.right = '40px';
  bottle.style.top = '100px';
  bottle.style.width = '70px';
  bottle.style.zIndex = '1000';
  bottle.style.pointerEvents = 'none';
  bottle.style.transition = 'transform 0.3s cubic-bezier(.4,0,.2,1)';
  document.body.appendChild(bottle);

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    bottle.style.transform = `translateY(${y * 0.2}px) rotate(${y % 20 - 10}deg)`;
  });
})();

// 2. Dark/Light mode toggle in the corner
(function createThemeToggle() {
  const toggle = document.createElement('button');
  toggle.id = 'theme-toggle';
  toggle.title = 'Toggle dark/light mode';
  toggle.innerHTML = '🌙';
  toggle.style.position = 'fixed';
  toggle.style.top = '24px';
  toggle.style.left = '24px';
  toggle.style.zIndex = '1100';
  toggle.style.background = 'rgba(30,34,44,0.7)';
  toggle.style.border = 'none';
  toggle.style.borderRadius = '50%';
  toggle.style.width = '44px';
  toggle.style.height = '44px';
  toggle.style.fontSize = '1.5rem';
  toggle.style.cursor = 'pointer';
  toggle.style.boxShadow = '0 0 12px #6c63ff99';
  toggle.style.color = '#fff';
  toggle.style.transition = 'background 0.2s, color 0.2s';
  document.body.appendChild(toggle);

  function setTheme(dark) {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggle.innerHTML = '🌙';
      toggle.title = 'Switch to light mode';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      toggle.innerHTML = '☀️';
      toggle.title = 'Switch to dark mode';
    }
  }
  // Initial theme
  let dark = true;
  setTheme(dark);
  toggle.addEventListener('click', () => {
    dark = !dark;
    setTheme(dark);
  });
})();

// 3. Hover sound on vodka comparison cards
(function addHoverSoundToCards() {
  const audio = document.createElement('audio');
  audio.src = 'hover-sound.mp3'; // Placeholder audio file, must exist in project root
  audio.preload = 'auto';
  document.body.appendChild(audio);
  function playSound() {
    audio.currentTime = 0;
    audio.play();
  }
  document.querySelectorAll('.vodka-card').forEach(card => {
    card.addEventListener('mouseenter', playSound);
  });
})();

// 4. Simple horizontal sliding carousel for vodka brands
(function createVodkaCarousel() {
  const brands = [
    {
      name: 'Absolut',
      img: 'https://pngimg.com/uploads/vodka/vodka_PNG32.png',
      desc: 'Sweden. Modern, iconic, creative.'
    },
    {
      name: 'Belvedere',
      img: 'https://www.belvederevodka.com/sites/default/files/2021-03/Belvedere%20Vodka%20700ml%20bottle.png',
      desc: 'Poland. Luxurious, classic, refined.'
    },
    {
      name: 'Grey Goose',
      img: 'https://www.greygoose.com/content/dam/greygoose/products/grey-goose-original/grey-goose-original-bottle.png',
      desc: 'France. Elegant, smooth, premium.'
    },
    {
      name: 'Ciroc',
      img: 'https://www.ciroc.com/sites/default/files/2021-03/ciroc-vodka-bottle.png',
      desc: 'France. Trendy, vibrant, party-ready.'
    }
  ];
  // Create carousel container
  const carousel = document.createElement('div');
  carousel.id = 'vodka-carousel';
  carousel.style.position = 'relative';
  carousel.style.maxWidth = '340px';
  carousel.style.margin = '2.5rem auto 0 auto';
  carousel.style.background = 'rgba(30,34,44,0.7)';
  carousel.style.borderRadius = '1.2rem';
  carousel.style.boxShadow = '0 0 16px #6c63ff99, 0 0 32px #00eaff55';
  carousel.style.padding = '2rem 1.5rem 1.5rem 1.5rem';
  carousel.style.display = 'flex';
  carousel.style.flexDirection = 'column';
  carousel.style.alignItems = 'center';
  carousel.style.backdropFilter = 'blur(18px)';
  carousel.style.border = '1.5px solid rgba(255,255,255,0.12)';
  // Carousel content
  let idx = 0;
  const img = document.createElement('img');
  img.style.width = '90px';
  img.style.height = 'auto';
  img.style.marginBottom = '1rem';
  img.style.filter = 'drop-shadow(0 0 16px #00eaff99)';
  const name = document.createElement('h3');
  name.style.color = '#00eaff';
  name.style.margin = '0 0 0.5rem 0';
  name.style.textShadow = '0 0 8px #00eaff';
  const desc = document.createElement('p');
  desc.style.color = '#b0b3c6';
  desc.style.margin = '0 0 1rem 0';
  desc.style.textAlign = 'center';
  // Controls
  const prev = document.createElement('button');
  prev.innerHTML = '⟨';
  prev.style.position = 'absolute';
  prev.style.left = '10px';
  prev.style.top = '50%';
  prev.style.transform = 'translateY(-50%)';
  prev.style.background = 'rgba(108,99,255,0.18)';
  prev.style.border = 'none';
  prev.style.borderRadius = '50%';
  prev.style.width = '36px';
  prev.style.height = '36px';
  prev.style.fontSize = '1.5rem';
  prev.style.color = '#fff';
  prev.style.cursor = 'pointer';
  prev.style.boxShadow = '0 0 8px #6c63ff99';
  prev.style.transition = 'background 0.2s, color 0.2s';
  const next = document.createElement('button');
  next.innerHTML = '⟩';
  next.style.position = 'absolute';
  next.style.right = '10px';
  next.style.top = '50%';
  next.style.transform = 'translateY(-50%)';
  next.style.background = 'rgba(108,99,255,0.18)';
  next.style.border = 'none';
  next.style.borderRadius = '50%';
  next.style.width = '36px';
  next.style.height = '36px';
  next.style.fontSize = '1.5rem';
  next.style.color = '#fff';
  next.style.cursor = 'pointer';
  next.style.boxShadow = '0 0 8px #6c63ff99';
  next.style.transition = 'background 0.2s, color 0.2s';
  function updateCarousel() {
    img.src = brands[idx].img;
    img.alt = brands[idx].name + ' bottle';
    name.textContent = brands[idx].name;
    desc.textContent = brands[idx].desc;
  }
  prev.onclick = () => {
    idx = (idx - 1 + brands.length) % brands.length;
    updateCarousel();
  };
  next.onclick = () => {
    idx = (idx + 1) % brands.length;
    updateCarousel();
  };
  carousel.appendChild(prev);
  carousel.appendChild(next);
  carousel.appendChild(img);
  carousel.appendChild(name);
  carousel.appendChild(desc);
  // Insert carousel after showdown-section
  document.addEventListener('DOMContentLoaded', () => {
    const showdown = document.querySelector('.showdown-section');
    if (showdown && showdown.parentNode) {
      showdown.parentNode.insertBefore(carousel, showdown.nextSibling);
      updateCarousel();
    }
  });
})(); 