


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// //////////////////////////////////////////////
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function getVisibleCards() {
  return window.innerWidth <= 768 ? 1 : 2;
}

function getCardCount() {
  return track.children.length;
}

function moveCarousel(direction) {
  const visible = getVisibleCards();
  const total = getCardCount();
  const maxIndex = total - visible;

  currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));

  const cardWidth = track.children[0].offsetWidth + 20; // card + gap
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prevBtn.addEventListener('click', () => moveCarousel(-1));
nextBtn.addEventListener('click', () => moveCarousel(1));

window.addEventListener('resize', () => {
  currentIndex = 0;
  track.style.transform = 'translateX(0)';
});

//////////////////////////
const spotData = {
  quiet: {
    study:  {
      name: 'The Quiet Corner Library Café',
      desc: 'A serene, plant-filled café inside a renovated library. No music, fast wifi, and the best flat white in the district.',
      tags: ['🤫 Silent Zone', '📶 Fast Wifi', '🌿 Plants', '📚 Library Access'],
      img:  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&q=80'
    },
    work:   {
      name: 'Focus Studio Co-Work',
      desc: 'Dedicated quiet-zone co-working with standing desks, private booths, and zero tolerance for loud calls.',
      tags: ['🤫 Quiet Zone', '🖥️ Standing Desks', '📶 Gigabit Wifi', '☕ Espresso Bar'],
      img: 'images/img2.png'
    },
    group:  {
      name: 'The Reserved Room',
      desc: 'Private study rooms bookable by the hour. Whiteboards, projector, and total acoustic isolation.',
      tags: ['🤫 Private Rooms', '📋 Whiteboards', '🔇 Soundproofed', '📶 Fast Wifi'],
      img:  'images/bac2.png'
    }
  },
  aesthetic: {
    study:  {
      name: 'Golden Hour Café',
      desc: 'Warm amber lighting, trailing vines, and windows made for productive daydreaming. Instagrammable and irresistibly cozy.',
      tags: ['✨ Aesthetic', '🌿 Boho Decor', '☕ Specialty Coffee', '📸 Photogenic'],
      img:  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80'
    },
    work:   {
      name: 'The Atelier Workspace',
      desc: 'An art-deco co-working space with exposed brick, curated art, and high ceilings that inspire creative thinking.',
      tags: ['✨ Art Deco', '🖼️ Gallery Walls', '☕ Pour-Overs', '💡 Natural Light'],
      img:  'images/work.png'
    },
    group:  {
      name: 'Bloom Collective',
      desc: 'A floral-themed café with long communal tables and rotating exhibitions. Great for creative collaborations.',
      tags: ['✨ Floral Vibes', '🌸 Seasonal Decor', '👥 Communal Tables', '🎨 Art Shows'],
      img:  'images/bloom.png'
    }
  },
  social: {
    study:  {
      name: 'The Open Book Café',
      desc: 'Friendly staff, shared tables, and a regular crowd of students who love to chat between study sessions.',
      tags: ['💬 Social', '😊 Welcoming Staff', '📚 Book Exchange', '🤝 Regulars Community'],
      img:  'images/book.png'
    },
    work:   {
      name: 'Commons Hub',
      desc: 'A vibrant co-working community space with weekly events, networking lunches, and a startup-friendly vibe.',
      tags: ['💬 Community Events', '🤝 Networking', '🚀 Startup Vibes', '☕ Free Coffee Fridays'],
      img:  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80'
    },
    group:  {
      name: 'The Gathering Ground',
      desc: 'Built for groups — round tables, writable walls, and a community board full of study group listings.',
      tags: ['💬 Group Friendly', '📋 Writeable Walls', '📌 Community Board', '🗣️ Events Weekly'],
      img:  'images/gathering.png'
    }
  },
  energetic: {
    study:  {
      name: 'Voltage Espresso Bar',
      desc: 'Buzzy, upbeat music, the smell of fresh espresso, and a crowd of ambitious students who feed off each other\'s energy.',
      tags: ['⚡ High Energy', '🎵 Upbeat Music', '☕ Strong Espresso', '🔥 Motivated Crowd'],
      img:  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80'
    },
    work:   {
      name: 'The Launchpad',
      desc: 'A startup-style open co-working space with ping-pong, standing stations, and a soundtrack that keeps you moving.',
      tags: ['⚡ Energetic', '🏓 Ping Pong', '🖥️ Standing Desks', '🎵 Curated Playlists'],
      img:  'images/ping.png'
    },
    group:  {
      name: 'The Workshop',
      desc: 'An industrial-style space designed for active collaboration — big screens, modular furniture, and an espresso machine on tap.',
      tags: ['⚡ Active Collab', '📺 Big Screens', '🔧 Modular Space', '☕ Espresso On Tap'],
      img:  'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&q=80'
    }
  }
};

const findSpotBtn = document.getElementById('findSpotBtn');
const spotForm = document.getElementById('spotForm');
const spotResult = document.getElementById('spotResult');
const resetBtn = document.getElementById('resetBtn');

findSpotBtn.addEventListener('click', () => {
  const city    = document.getElementById('city').value;
  const vibe    = document.getElementById('vibe').value;
  const purpose = document.getElementById('purpose').value;

  if (!city || !vibe || !purpose) {
    alert('Please fill in all three fields to find your perfect spot!');
    return;
  }

  const vibeData = spotData[vibe] || spotData.aesthetic;
  const spot     = vibeData[purpose] || vibeData.study;

  
  document.getElementById('resultName').textContent = spot.name;
  document.getElementById('resultDesc').textContent = spot.desc;
  document.getElementById('resultImg').src  = spot.img;
  document.getElementById('resultImg').alt  = spot.name;

  const tagsEl = document.getElementById('resultTags');
  tagsEl.innerHTML = spot.tags.map(t => `<span class="tag">${t}</span>`).join('');

 
  spotForm.style.display = 'none';
  spotResult.style.display = 'grid';
  spotResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

resetBtn.addEventListener('click', () => {
  spotResult.style.display = 'none';
  spotForm.style.display   = 'block';
  document.getElementById('city').value    = '';
  document.getElementById('vibe').value    = '';
  document.getElementById('purpose').value = '';
});

////////////////////
const contactSubmitBtn = document.getElementById('contactSubmitBtn');

function showErr(id, msg) {
  document.getElementById(id).textContent = msg;
}
function clearErrs() {
  ['cNameErr','cEmailErr','cMsgErr'].forEach(id => {
    document.getElementById(id).textContent = '';
  });
}

contactSubmitBtn.addEventListener('click', () => {
  clearErrs();

  const name    = document.getElementById('cName').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (!name) {
    showErr('cNameErr', 'Name is required.');
    valid = false;
  }
  if (!email || !emailRx.test(email)) {
    showErr('cEmailErr', 'Please enter a valid email address.');
    valid = false;
  }
  if (!message) {
    showErr('cMsgErr', 'Please write a message.');
    valid = false;
  }

  if (valid) {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('contactSuccess').style.display = 'block';
  }
});
