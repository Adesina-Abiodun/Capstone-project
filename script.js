const menuBtn = document.querySelector('.menuIcon');
const menu = document.querySelector('.secondNavlist');
const menuOptions = document.querySelectorAll('.secondNavContent');
const body = document.querySelector('body');

function openMenu() {
  body.classList.add('active');
  menu.classList.add('menuModal');
}

function closeMenu() {
  menu.classList.remove('menuModal');
  body.classList.remove('active');
}

menuBtn.addEventListener('click', openMenu);
menuOptions.forEach((option) => option.addEventListener('click', closeMenu));


const SpeakersData = [

  {
    speakerName: 'Olayiwola Sobowale',
    speakerProfession: 'Saarland University',
    speakerInfo: 'Sobowale is an associate professor in the School of Linguistics and Culture at Washington State University, Pullman.',
    speakerImage: './assets/person4.jpeg',
  },
  {
    speakerName: 'Adesina Abiodun',
    speakerProfession: 'Public Speaker',
    speakerInfo: 'Abiodun is an associate professor in the School of Linguistics and Culture at Washington State University, Pullman.',
    speakerImage: './assets/personalImgnew.jpg',
  },
  {
    speakerName: 'Bello Toyyib',
    speakerProfession: 'Book Reviewer',
    speakerInfo: 'Toyyib is an associate professor in the School of Linguistics and Culture at Washington State University, Pullman.',
    speakerImage: './assets/person2.jpeg',
  },
  {
    speakerName: 'Adedoyin Oluwabusolami',
    speakerProfession: 'Research Assistant',
    speakerInfo: 'Oluwabusolami is a Lecturer (Assistant Professor) at School of Language, University of Glasgow, United Kingdom.',
    speakerImage: './assets/person3.jpeg',
  }
];


function createSpeakerCard(speaker) {
  return `
    <li class="speaker speaker-${speaker.id}">
        <div class="backFrame">
            <img class="speakerImg" src="${speaker.speakerImage}" alt="speaker Picture">
        </div>
        <ul class="speaker-detail">
            <li class="speaker-name">
                <h3>${speaker.speakerName}</h3>
            </li>
            <li class="speaker-affiliation">
                <h4>${speaker.speakerProfession}</h4>
            </li>
            <li class="speaker-description">
                <p>${speaker.speakerInfo}</p>
            </li>
        </ul>
    </li>
  `;
}

function mySpeakers() {
  const featureSection = document.querySelector('.speakers');
  const overlay = document.createElement('div');
  overlay.classList.add('inner-div');

  let cardContent = `
    <h2>Featured Speakers</h2>
    <hr class="hr">
    <ul class="speakersList">
  `;

  SpeakersData.forEach((speaker, index) => {
    const speakerCard = createSpeakerCard(speaker);
    cardContent += speakerCard;
  });

  cardContent += `
    </ul>
    <button class="seeMoreBtn">More <i class="fa-solid fa-angle-down down-arrow"></i></button>
    <button class="speaker-3 less">Less <i class="fa-solid fa-angle-up down-arrow"></i></button>
  `;

  overlay.innerHTML = cardContent;
  featureSection.appendChild(overlay);

  const seeMoreBtn = document.querySelector('.seeMoreBtn');
  const seeLessBtn = document.querySelector('.less');
  const speaker3 = document.querySelector('.speaker-3');
  const speaker4 = document.querySelector('.speaker-4');

  function seeMore() {
    seeMoreBtn.classList.remove('seeMoreBtn');
    seeMoreBtn.classList.add('speaker-3');
    speaker3.classList.remove('speaker-3');
    speaker4.classList.remove('speaker-4');
    seeLessBtn.classList.remove('speaker-3', 'less');
    seeLessBtn.classList.add('seeMoreBtn');
  }

  function seeLess() {
    seeLessBtn.classList.remove('seeMoreBtn');
    seeLessBtn.classList.add('speaker-3', 'less');
    speaker3.classList.add('speaker-3');
    speaker4.classList.add('speaker-4');
    seeMoreBtn.classList.remove('speaker-3');
    seeMoreBtn.classList.add('seeMoreBtn');
  }

  seeMoreBtn.addEventListener('click', seeMore);
  seeLessBtn.addEventListener('click', seeLess);
}

window.addEventListener('load', mySpeakers);
