// hamburger menu
const toggleBtn = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Mobile-only click to open dropdown
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    if (window.innerWidth < 1030) {
      e.preventDefault(); // prevent default link
      const parent = this.parentElement;

      // close other dropdowns if open
      const allDropdowns = document.querySelectorAll('.nav-menu li.dropdown');
      allDropdowns.forEach(d => {
        if (d !== parent) d.classList.remove('open');
      });

      parent.classList.toggle('open');
    }
  });
});

// ===============banner===========

// Sample JSON data
const jsonData = [
  {
    "title": "10x",
    "description": "power",
  },
  {
    "title": "9",
    "description": "ingredients",
  },
  {
    "title": "20K+",
    "description": "happy customers",
  }
];

const container = document.getElementById('card-container');

// Loop JSON and create cards
jsonData.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
        <div class="card-content">
          <h3 class="h1">${item.title}</h3>
          <p class="text-lg sub-txt">${item.description}</p>
        </div>
      `;
  container.appendChild(card);
});



// faq data Our Collection
const FaqData = [
  {
    "faqtitle": "Signature Scents",
    "faqdescription": "Discover our curated line of signature perfumes, designed to become your daily companion.",
  },
  {
    "faqtitle": "Signature Scents",
    "faqdescription": "Discover our curated line of signature perfumes, designed to become your daily companion.",
  },
  {
    "faqtitle": "Signature Scents",
    "faqdescription": "Discover our curated line of signature perfumes, designed to become your daily companion.",
  },
  {
    "faqtitle": "Signature Scents",
    "faqdescription": "Discover our curated line of signature perfumes, designed to become your daily companion.",
  },
];
const containerfaq = document.getElementById('faq-container');

// Loop JSON and create cards
FaqData.forEach(item => {
  const cardbox = document.createElement('div');
  cardbox.classList.add('faq-item');

  cardbox.innerHTML = `
  
        <button class="faq-question text-ex">${item.faqtitle}<span class="icon">+</span></button>
        <div class="faq-answer">
          <p class="text-sm">${item.faqdescription}</p>
        </div>
      `;
  containerfaq.appendChild(cardbox);
});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    // close other items
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      }
    });

    // toggle current item
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "–" : "+";
  });
});

// lazy-img

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-img");

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.addEventListener('load', () => {
            img.classList.add('loaded');
          });
          observer.unobserve(img);
        }
      });
    }, { rootMargin: "0px 0px 100px 0px" });

    lazyImages.forEach(img => observer.observe(img));
  } else {
    // fallback if browser doesn't support IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }
});


// percentage section counter
const CounterData = [
  { "Countertitle": "84%", "Counterdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { "Countertitle": "78%", "Counterdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { "Countertitle": "89%", "Counterdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { "Countertitle": "90%", "Counterdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
];

const containerCounter = document.getElementById('Counter-container');

// Create counter cards
CounterData.forEach(item => {
  const Counterbox = document.createElement('div');
  Counterbox.classList.add('Counter-item');

  Counterbox.innerHTML = `
    <div class="item">
       <span class="count h4" data-speed="2000" data-target="${parseInt(item.Countertitle)}">0%</span>
       <p class="text-sm">${item.Counterdescription}</p>
    </div>
  `;

  containerCounter.appendChild(Counterbox);
});

// Function to animate a counter
function animateCounter(item) {
  const target = parseInt(item.dataset.target);
  let start = 0;
  const duration = parseInt(item.dataset.speed);
  const stepTime = Math.ceil(duration / target);

  let interval = setInterval(() => {
    start++;
    item.innerHTML = start + "%";
    if (start >= target) {
      clearInterval(interval);
    }
  }, stepTime);
}

// Scroll observer
const counters = document.querySelectorAll('.count');
let countersStarted = false;

function startCountersOnScroll() {
  const section = document.querySelector('.percentage-box');
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight && !countersStarted) {
    counters.forEach(counter => animateCounter(counter));
    countersStarted = true; // prevent re-running
  }
}

window.addEventListener('scroll', startCountersOnScroll);



// table
const data = [
  {
    label: "Potency Concentration",
    GTG: "10x",
    Arose: "1x",
    Bella: "1x",
    Daisies: "10x"
  },
  {
    label: "Longevity",
    GTG: true,
    Arose: false,
    Bella: false,
    Daisies: true
  },
  {
    label: "Sillage",
    GTG: true,
    Arose: false,
    Bella: false,
    Daisies: false
  },
  {
    label: "Bottle Design Score",
    GTG: 9,
    Arose: 5,
    Bella: 6,
    Daisies: 2
  },
  {
    label: "Blend and Harmony",
    GTG: true,
    Arose: false,
    Bella: false,
    Daisies: false
  },
  {
    label: "Skin Compatibility",
    GTG: true,
    Arose: false,
    Bella: false,
    Daisies: false
  },
  {
    label: "Scent Profile",
    GTG: true,
    Arose: true,
    Bella: false,
    Daisies: false
  },
  {
    label: "Price vs. Quality",
    GTG: true,
    Arose: true,
    Bella: false,
    Daisies: true
  }
];

const tbody = document.querySelector("#compare-table tbody");

function renderValue(val) {
  if (typeof val === "boolean") {
    return val
      ? `
        <svg class="icon icon-check" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#032E15"/>
          <path d="M7 12.5l3 3 7-7" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `
      : `
        <svg class="icon icon-cross" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#fff"/>
          <path d="M8 8l8 8M16 8l-8 8" stroke="#374151" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
  }

  if (typeof val === "number") {
    return `<span class="badge text-sm">${val}</span>`;
  }

  return `<span class="badge text-sm">${val}</span>`;
}


data.forEach(row => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td data-label="Quality">${row.label}</td>
    <td data-label="GTG" class="highlight">${renderValue(row.GTG)}</td>
    <td data-label="Arose">${renderValue(row.Arose)}</td>
    <td data-label="Bella">${renderValue(row.Bella)}</td>
    <td data-label="Daisies">${renderValue(row.Daisies)}</td>
  `;

  tbody.appendChild(tr);
});



// product
// Gallery
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumbs img");
const images = [
  "assets/images/produt-3.jpg",
  "assets/images/produt-4.jpg",
  "assets/images/produt-5.jpg",
  "assets/images/produt-1.jpg",
  "assets/images/produt-3.jpg",
  "assets/images/produt-4.jpg",
  "assets/images/produt-5.jpg",
  "assets/images/produt-1.jpg"
];
let index = 0;
thumbs.forEach(t => t.onclick = () => updateGallery(+t.dataset.index));
function updateGallery(i) {
  index = i;
  mainImage.style.opacity = 0;
  setTimeout(() => { mainImage.src = images[i]; mainImage.style.opacity = 1; }, 150);
  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[i].classList.add("active");
}
document.querySelector(".prev").onclick = () => updateGallery((index - 1 + images.length) % images.length);
document.querySelector(".next").onclick = () => updateGallery((index + 1) % images.length);

// Subscriptions & Fragrance
const subs = document.querySelectorAll(".sub-card");
let selectedPurchase, selectedFragrance;
const stockEl = document.getElementById("stock");
const cart = document.getElementById("addToCart");

const priceMap = {
  original: { single: 99.99, double: 169.99, stock: true },
  lily: { single: 109.99, double: 179.99, stock: true },
  rose: { single: 119.99, double: 189.99, stock: false }
};

// Subscription + Fragrance click
subs.forEach(card => {
  card.onclick = () => {
    subs.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    card.querySelector(".sub-radio").checked = true;
    selectedPurchase = card.dataset.type;
    const activeFragrance = card.querySelector(".fragrance.active");
    if (activeFragrance) selectedFragrance = activeFragrance.dataset.fragrance;
    updateMainImage();
    updateCart();
  };
  card.querySelectorAll(".fragrance").forEach(f => {
    f.onclick = e => {
      e.stopPropagation();
      selectedFragrance = f.dataset.fragrance;
      selectedPurchase = card.dataset.type;
      card.classList.add("active");
      card.querySelector(".sub-radio").checked = true;
      subs.forEach(c => { if (c !== card) c.classList.remove("active"); });
      card.querySelectorAll(".fragrance").forEach(fr => fr.classList.remove("active"));
      f.classList.add("active");
      updateMainImage();
      updateCart();
    };
  });
});

function updateMainImage() {
  const activeCard = document.querySelector(".sub-card.active");
  const imgAttr = "img-" + selectedFragrance;
  mainImage.style.opacity = 0;
  setTimeout(() => { mainImage.src = activeCard.dataset[imgAttr]; mainImage.style.opacity = 1; }, 150);
}

function updateCart() {
  const price = priceMap[selectedFragrance][selectedPurchase];
  if (priceMap[selectedFragrance].stock) {
    stockEl.textContent = "In Stock";
    stockEl.className = "stock in";
    cart.classList.remove("disabled");
    cart.href = `https://example.com/cart?f=${selectedFragrance}&p=${selectedPurchase}`;
  } else {
    stockEl.textContent = "Out of Stock";
    stockEl.className = "stock out";
    cart.classList.add("disabled");
    cart.removeAttribute("href");
  }
}

// Init - set main image immediately
const activeCard = document.querySelector(".sub-card.active");
selectedPurchase = activeCard.dataset.type;
selectedFragrance = activeCard.querySelector(".fragrance.active").dataset.fragrance;
mainImage.src = activeCard.dataset["img-" + selectedFragrance];
updateGallery(0);
updateCart();


// header serch click
document.querySelector('.search').addEventListener('click', () => {
  alert('Search feature coming soon');
});