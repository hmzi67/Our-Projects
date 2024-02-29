const ourProjects = [
  {
    id: 1,
    title: "Food Fusion",
    category: "Website",
    img: "./images/foodfusion.png",
    description: "Food Fusion Restaurant landing page",
  },
  {
    id: 2,
    title: "MÚSICA",
    category: "Mobile",
    img: "./images/musica.svg",
    description: "A mobile based media player UX/UI Design.",
  },
  {
    id: 3,
    title: "Color Lab",
    category: "Website",
    img: "./images/colorlabs.png",
    description: "Color generator for Developers and Designers.",
  },
  {
    id: 4,
    title: "Trading Room",
    category: "Website",
    img: "./images/tr.png",
    description: "A Trading room website template in bootstrap5",
  },
  {
    id: 5,
    title: "WindeployQt",
    category: "Software",
    img: "./images/WindeployQt.png",
    description:
      "A GUI Application for deploying Qt based applications to microsoft windows.",
  },
  {
    id: 6,
    title: "SEO Campaign",
    category: "Seo",
    img: "./images/seo.png",
    description: "A SEO compaign website template.",
  },
  {
    id: 7,
    title: "Code Craft",
    category: "Website",
    img: "./images/codecraft.jpg",
    description: "A UX/UI Designing and Research agency.",
  },
  {
    id: 8,
    title: "Button CSS Generator",
    category: "Software",
    img: "./images/btn_Css_view1.png",
    description: "A GUI Application for generating css code for buttons.",
  },
  {
    id: 9,
    title: "VIVID Billing Solutions",
    category: "Website",
    img: "./images/vivid.png",
    description: "A medical billing solutions website",
  },
  {
    id: 10,
    title: "Dial Cabbies",
    category: "Seo",
    img: "./images/dial.png",
    description: "A taxi company in durham UK",
  },
];

const section = document.querySelector(".projects");
const btn = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayButtons(ourProjects);
  displayProjects(ourProjects);
});

function displayButtons(proj) {
  const buttons = proj.reduce(
    function (value, item) {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );

  const category = buttons
    .map((item) => {
      return `<button class="filter-btn btn btn-outline-success text-uppercase m-1 " data-id=${item}>${item}</button>`;
    })
    .join("");
  btn.innerHTML = category;

  const filterBtn = btn.querySelectorAll(".filter-btn");
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.target.dataset.id;
      const projectCategory = proj.filter(function (projCategory) {
        if (projCategory.category === category) {
          return projCategory;
        }
      });
      if (category === "all") {
        displayProjects(proj);
      } else {
        displayProjects(projectCategory);
      }
    });
  });
}

function displayProjects(proj) {
  let displayProj = proj.map((item) => {
    return `<div class="col">
    <div class="card h-100">
      <img src="${item.img}" class="card-img-top" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}.</p>
      </div>
    </div>
  </div>`
                        ;
  });
  const data = displayProj.join("");
  section.innerHTML = data;
}
