// --- Figures Data (must be at the top!) ---
const figures = [
    {
      name: "Claudio 'Il Capo' Galimberti",
      team: "Curva Nord, Atalanta (Italy)",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/7/77/User_icon_2.svg",
      description: "Known as a legendary capo (lead supporter) for Atalanta's ultras, famous for his charismatic leadership and ability to unite thousands of fans."
    },
    {
      name: "Salah 'The Voice' Boughanmi",
      team: "Ultras Sfax (Tunisia)",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/7/77/User_icon_2.svg",
      description: "A founding member and iconic leader, organizing chants and major tifos for CS Sfaxien. Known for his passionate support and social activism."
    },
    {
      name: "Carlo 'Il Principe' Bianchi",
      team: "Fossa dei Leoni, AC Milan (Italy)",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/7/77/User_icon_2.svg",
      description: "One of the first leaders of Milan's Fossa dei Leoni, shaping the style and culture of Italian ultras in the 1970s and 80s."
    },
    {
      name: "Mohamed 'El General' Mahjoub",
      team: "Ultras Ahlawy, Al Ahly (Egypt)",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/7/77/User_icon_2.svg",
      description: "A prominent figure among Egyptian ultras, Mahjoub is recognized for his role in organizing massive displays and being a voice for fans' rights."
    }
  ];
  
  // --- Smooth scroll for nav links ---
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // --- Reveal animations (on scroll) ---
  function revealSections() {
    document.querySelectorAll('.section').forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        sec.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealSections);
  window.addEventListener('DOMContentLoaded', revealSections);
  
  // --- Figures Section Logic ---
  document.addEventListener('DOMContentLoaded', function() {
    const figuresList = document.getElementById('figures-list');
    if (figuresList) {
      figures.forEach((figure, idx) => {
        const card = document.createElement('div');
        card.className = 'figure-card';
        card.innerHTML = `
          <img src="${figure.avatar}" alt="${figure.name}" class="figure-avatar">
          <div class="figure-name">${figure.name}</div>
          <div class="figure-team">${figure.team}</div>
        `;
        card.addEventListener('click', () => showPopup(idx));
        figuresList.appendChild(card);
      });
    }
    // Popup close
    const popupClose = document.getElementById('popup-close');
    if (popupClose) {
      popupClose.onclick = () => {
        document.getElementById('figure-popup').classList.add('hidden');
      };
    }
  });
  function showPopup(idx) {
    const popup = document.getElementById('figure-popup');
    const content = document.getElementById('popup-content');
    content.innerHTML = `
      <h3 style="color:orange; margin-top:0">${figures[idx].name}</h3>
      <div style="font-style:italic;">${figures[idx].team}</div>
      <p style="margin-top:1em;">${figures[idx].description}</p>
    `;
    popup.classList.remove('hidden');
  }
  window.onclick = function(event) {
    const popup = document.getElementById('figure-popup');
    if (popup && event.target === popup) {
      popup.classList.add('hidden');
    }
  };
  
  // --- JOIN FORM VALIDATION ---
  document.addEventListener('DOMContentLoaded', function() {
    const joinForm = document.getElementById('joinForm');
    if (!joinForm) return;
  
    const errorsDiv = document.getElementById('form-errors');
  
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      errorsDiv.textContent = "";
  
      const data = new FormData(joinForm);
      let errors = [];
  
      // Validate required fields
      if (!data.get('firstname') || !/^[a-zA-Z\s]{2,}$/.test(data.get('firstname'))) {
        errors.push("Please enter a valid first name (letters only).");
      }
      if (!data.get('lastname') || !/^[a-zA-Z\s]{2,}$/.test(data.get('lastname'))) {
        errors.push("Please enter a valid last name (letters only).");
      }
      if (!data.get('dob')) {
        errors.push("Please select your date of birth.");
      }
      if (!data.get('age') || isNaN(data.get('age')) || data.get('age') < 10 || data.get('age') > 100) {
        errors.push("Please enter a valid age (10-100).");
      }
      // Phone number (basic pattern)
      const number = data.get('number');
      if (!number || !/^\+?\d{8,15}$/.test(number)) {
        errors.push("Please enter a valid phone number (8-15 digits, may start with '+').");
      }
      if (!data.get('css_knowledge') || data.get('css_knowledge').length < 5) {
        errors.push("Tell us a bit more about your CSS knowledge.");
      }
      if (!data.get('ultras_knowledge') || data.get('ultras_knowledge').length < 5) {
        errors.push("Tell us a bit more about your knowledge of Ultras Sfaxiens.");
      }
  
      if (errors.length > 0) {
        errorsDiv.innerHTML = errors.join("<br>");
        return;
      }
  
      // Simulate success (replace with backend logic if needed)
      joinForm.reset();
      errorsDiv.style.color = "lime";
      errorsDiv.textContent = "Application submitted successfully!";
      setTimeout(() => {
        errorsDiv.textContent = "";
        errorsDiv.style.color = "#ff6767";
      }, 3000);
    });
  });
  

    const songs = [
        {
          title: "PISTE 04 - KHALLINI NBASI",
          youtube: "https://www.youtube.com/embed/4ROsNqWoqkQ?autoplay=1",
          lyrics: `
                3AMEL JOUJMA ZAYET FI RASI<br>
                M3AK L'90 KHALINI NBASI<br>
                FI ZOK OMEK 7ALEF CHENKHALI TRACE<br>
                LBES LKOMBA W L3ABHA BANDI<br>
                MATRAQUE 3ANDEK WEL SEBTA 3ANDI<br>
                GADHET EL DENYA M3A ZBOUBNA KHRAJ BASAS<br>
                3 NJOUMEK B 3 FLAMI<br>
                NIK CAGOULI HARB NDIMARI<br>
                NEKETO LFAJ3A BEL WAMYA JBED EL GAZ<br>
                FOU9 EL SIROU  NTARCHA9 FI GHRAMI<br>
                NIK TSAWER LAWEJ LASEMI<br>
                W TCHEDLI ZEBI FI RASEK NIKHA BASE<br>
                TOUNES MOUCH 9A7BA WLH KHATIHA<br>
                MOUCH MTA3KOM A7NA MALIHA<br>
                W ELI 7OKMOHA ZAR3O NE9MA F LA3BED<br>
                IMELA 3ASBA LIKOM W LIHA<br>
                W 3ASBA LELI 7ASEB 7AMIHA<br>
                W'A7NA CHENHEJOU MEN ZABOUROM LEBLED<br>
              `
            },
            {
              title: "قصّة عشرة Ultras Sfaxiens - فوضى",
              youtube: "https://www.youtube.com/embed/Se3pKrpSy3w?autoplay=1",
              lyrics: `
          
          
              `
            }
          ];
  document.addEventListener('DOMContentLoaded', function() {
    const songsList = document.getElementById('songs-list');
    if (songsList) {
      songs.forEach((song, idx) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `<strong style="color:orange;">${song.title}</strong>
          <button class="cta-btn" style="margin-left:1em;">View & Play</button>`;
        card.querySelector('button').onclick = () => showSongPopup(idx);
        songsList.appendChild(card);
      });
    }
    // Close popup logic
    const songPopupClose = document.getElementById('song-popup-close');
    if (songPopupClose) {
      songPopupClose.onclick = () => {
        document.getElementById('song-popup').classList.add('hidden');
        document.getElementById('song-popup-content').innerHTML = "";
      };
    }
    // Close on background click
    window.addEventListener('click', function(event) {
      const popup = document.getElementById('song-popup');
      if (popup && event.target === popup) {
        popup.classList.add('hidden');
        document.getElementById('song-popup-content').innerHTML = "";
      }
    });
  });
  
  function showSongPopup(idx) {
    const popup = document.getElementById('song-popup');
    const content = document.getElementById('song-popup-content');
    content.innerHTML = `
      <h3 style="color:orange;">${songs[idx].title}</h3>
      <div style="margin-top:1em; text-align:center;">
        <iframe width="320" height="180" src="${songs[idx].youtube}" frameborder="0"
          allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div style="margin-top:1em;font-family:inherit;font-size:1.1em;line-height:1.5;color:#fafafa;background:#222;padding:1em;border-radius:8px;">
        ${songs[idx].lyrics}
      </div>
    `;
    popup.classList.remove('hidden');
  }function showSongPopup(idx) {
    const popup = document.getElementById('song-popup');
    const content = document.getElementById('song-popup-content');
    // Add autoplay=1 to the embed URL
    let ytUrl = songs[idx].youtube;
    if (!ytUrl.includes('autoplay=1')) {
      ytUrl += (ytUrl.includes('?') ? '&' : '?') + 'autoplay=1';
    }
    content.innerHTML = `
      <h3 style="color:orange;">${songs[idx].title}</h3>
      <div style="margin-top:1em; text-align:center;">
        <iframe width="320" height="180" src="${ytUrl}" frameborder="0"
          allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div style="margin-top:1em;font-family:inherit;font-size:1.1em;line-height:1.5;color:#fafafa;background:#222;padding:1em;border-radius:8px;">
        ${songs[idx].lyrics}
      </div>
    `;
    popup.classList.remove('hidden');
  }