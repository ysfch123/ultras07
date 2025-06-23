// Example member data. Replace with your real members and images.
const members = [
    {
      rank: "Leader",
      name: "Majd",
      lastname: "El Yosfi",
      age: 24,
      phone: "+216 29 208 677",
      picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.12 (1).jpeg"
    },
    {
      rank: "Co-Leader(ART)",
      name: "Mohamed",
      lastname: "Keskes",
      age: 21,
      phone: "+216 58 855 484",
      picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.18 (1).jpeg"
    },
    {
      rank: "Membre",
      name: "Aymen",
      lastname: "Herchi",
      age: 22,
      phone: "+216 44 435 655",
      picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.11 (2).jpeg"
    },
    {
        rank: "Membre",
        name: "Baha",
        lastname: "Abbasi",
        age: 18,
        phone: "+216 26 400 899",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.12.jpeg"
      },
      {
        rank: "Membre",
        name: "Med Ali",
        lastname: "Ben Khlifa",
        age: 27,
        phone: "+216 44 664 291",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.15.jpeg"
      },
      {
        rank: "Membre",
        name: "Adem",
        lastname: "Morali",
        age: 21,
        phone: "+216 96 549 188",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.11 (1).jpeg"
      },
      {
        rank: "Membre",
        name: "Med Aziz",
        lastname: "Hamli",
        age: 19,
        phone: "+216 28 592 460",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.15 (1).jpeg"
      },
      {
        rank: "Membre(ART)",
        name: "Youssef",
        lastname: "Chaaben",
        age: 18,
        phone: "+216 52 455 707",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.19 (2).jpeg"
      },
      {
        rank: "Membre",
        name: "Youssef",
        lastname: "Affes",
        age: 18,
        phone: "+216 58 893 848",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.44.36.jpeg"
      },
      {
        rank: "Membre",
        name: "Hachem",
        lastname: "kchaou",
        age: 21,
        phone: "+216 21 051 676",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.13 (1).jpeg"
      },
      {
        rank: "Membre(ART)",
        name: "Salmen",
        lastname: "Trabelsi",
        age: 18,
        phone: "+216 44 900 133",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.19.jpeg"
      },
      {
        rank: "Membre",
        name: "Houssem",
        lastname: "Msedi",
        age: 21,
        phone: "+216 33 345 678",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.14 (1).jpeg"
      },
      {
        rank: "Membre",
        name: "Hayder",
        lastname: "El yousfi",
        age: 21,
        phone: "+216 20 774 179",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.14.jpeg"
      },
      {
        rank: "Membre",
        name: "Ghaith",
        lastname: "Mechani",
        age: 20,
        phone: "+216 50 389 272",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.13.jpeg"
      },
      {
        rank: "Membre(ART)",
        name: "Mohamed",
        lastname: "Jérjir",
        age: 18,
        phone: "+216 33 345 678",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.18.jpeg"
      },
      {
        rank: "Membre",
        name: "Louay",
        lastname: "Mallek",
        age: 20,
        phone: "+216 21 963 731",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.14 (2).jpeg"
      },
      {
        rank: "Membre",
        name: "Mohamed",
        lastname: "Gharbi",
        age: 17,
        phone: "+216 25 893 890",
        picture: "mombre/WhatsApp Image 2025-06-19 at 04.11.16.jpeg"
      },
      {
        rank: "Membre(ART)",
        name: "Akil",
        lastname: "Jarboui",
        age: 18,
        phone: "+216 26 377 442",
        picture: "mombre/WhatsApp Image 2025-06-20 at 02.08.13.jpeg"
      },
      {
        rank: "Membre",
        name: "Med Adem",
        lastname: "Othmani",
        age: 18,
        phone: "+216 29 866 373",
        picture: "mombre/WhatsApp Image 2025-06-20 at 02.08.13 (1).jpeg"
      },
      {
        rank: "Membre",
        name: "Mortadha",
        lastname: "",
        age: 18,
        phone: "+216 07 070 707",
        picture: "mombre/WhatsApp Image 2025-06-20 at 02.26.24.jpeg"
      },
      {
        rank: "Membre",
        name: "Youssef",
        lastname: "Fetoui",
        age: 16,
        phone: "+216 07 070 707",
        picture: "mombre/WhatsApp Image 2025-06-20 at 02.28.28.jpeg"
      },
      
     

    // Add more members here...
  ];
  
  const grid = document.getElementById('membersGrid');
  
  members.forEach((member, idx) => {
    const card = document.createElement('div');
    card.className = `member-card ${member.rank.toLowerCase().replace('-','')}`;
    card.innerHTML = `
      <div class="member-card-inner">
        <div class="member-card-front">
          <img src="${member.picture}" alt="Member Photo" class="member-photo-large">
          <span class="member-rank">${member.rank}</span>
          <span class="member-name">${member.name}</span>
          <span class="member-lastname">${member.lastname}</span>
          <button class="member-flip-btn" tabindex="0">View Info</button>
        </div>
        <div class="member-card-back">
          <div class="member-back-info">
            <div><span class="member-back-label">Name:</span> ${member.name} ${member.lastname}</div>
            <div><span class="member-back-label">Rank:</span> ${member.rank}</div>
            <div><span class="member-back-label">Age:</span> ${member.age}</div>
            <div><span class="member-back-label">Phone:</span> ${member.phone}</div>
          </div>
          <button class="member-flip-btn" tabindex="0">Back</button>
        </div>
      </div>
    `;
    // Flip interaction
    const inner = card.querySelector('.member-card-inner');
    card.querySelectorAll('.member-flip-btn').forEach((btn, btnIdx) => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        card.classList.toggle('flipped');
      });
      btn.addEventListener('keypress', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          card.classList.toggle('flipped');
        }
      });
    });
    // Card click flips as well
    card.addEventListener('dblclick', () => {
      card.classList.toggle('flipped');
    });
    grid.appendChild(card);
  });