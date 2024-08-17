const cardList = [
  {
    title: "Kunekune",
    image: "images/kunekune.jpg",
    link: "About Kunekune",
    description:
      "The Kunekune is a small breed of domestic pig from New Zealand. Kunekune are hairy with a rotund build, and may bear wattles hanging from their lower jaws. Their colour ranges from black and white, to ginger, cream, gold-tip, black, brown, and tricoloured. They have a docile, friendly nature. Source: Wikipedia",
  },
  {
    title: "Mangalica",
    image: "images/mang.jpg",
    link: "About Mangalica",
    description:
      "The Mangalica is a Hungarian breed of domestic pig. It was developed in the mid-19th century by crossbreeding breeds from the nearby Romanian Salonta and Hungarian Bakony with the European wild boar and the Serbian Šumadija breed. The Mangalica pig grows a thick, curly coat of hair. Source: Wikipedia",
  },
  {
    title: "Kunekune",
    image: "images/kunekune.jpg",
    link: "About Kunekune",
    description:
      "The Kunekune is a small breed of domestic pig from New Zealand. Kunekune are hairy with a rotund build, and may bear wattles hanging from their lower jaws. Their colour ranges from black and white, to ginger, cream, gold-tip, black, brown, and tricoloured. They have a docile, friendly nature. Source: Wikipedia",
  },
  {
    title: "Göttingen Minipig",
    image: "images/Göttingen-minipig.jpg",
    link: "About Göttingen-minipig",
    description:
      "The Göttingen minipig is a breed of miniature pig. The Göttingen minipig is the smallest domestic pig breed known in the world; as an adult, they weigh around 35 kg.",
  },
  {
    title: "Vietnamese Pot-bellied",
    image: "images/vietnam.jpg",
    link: "About Vietnamese Pot-bellied",
    description:
      "Vietnamese Pot-bellied is the exonym for the Lon I or I pig, an endangered traditional Vietnamese breed of small domestic pig. The I is uniformly black and has short legs and a low-hanging belly, from which the name derives. They are utilized for meat and are slow-growing.",
  },
  {
    title: "Berkshire",
    image: "images/Berkshire.jpg",
    link: "About Mangalica",
    description:
      " The Berkshire is a British breed of pig. It originated in the English county of Berkshire, for which it is named. It is normally black, with some white on the snout, on the lower legs, and on the tip of the tail. It is a rare breed in the United Kingdom",
  },
  {
    title: "Limousin Cul Noir",
    image: "images/culnoir.jpg",
    link: "About Cul Noir",
    description:
      " Limousin pig breed (known as Saint-Yrieix) which has occupied the West of the Massif-Central for several centuries. Rustic and undemanding, the Cul Noir pork is vigorous, the breeding method is traditional and natural, offering healthy meat of very high taste quality.",
  },
  {
    title: "Large White ",
    image: "images/white.jpg",
    link: "About Large White",
    description:
      "The Mangalica is a Hungarian breed of domestic pig. It was developed in the mid-19th century by crossbreeding breeds from the nearby Romanian Salonta and Hungarian Bakony with the European wild boar and the Serbian Šumadija breed. The Mangalica pig grows a thick, curly coat of hair. Source: Wikipedia",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);

  var dropdownElems = document.querySelectorAll(".dropdown-trigger");
  var dropdownInstances = M.Dropdown.init(dropdownElems);

  var modal = document.getElementById("modal1");
  var form = modal.querySelector("form");
  var submitButton = document.getElementById("formSubmit");

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    var firstName = form.querySelector('input[id="first_name"]').value;
    var lastName = form.querySelector('input[id="last_name"]').value;
    var password = form.querySelector('input[id="password"]').value;
    var email = form.querySelector('input[id="email"]').value;

    var data = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
    };

    fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        var instance = M.Modal.getInstance(modal);
        instance.close();

        M.toast({ html: "Form submitted successfully!" });
      })
      .catch((error) => {
        console.error("Error:", error);

        M.toast({ html: "An error occurred. Please try again." });
      });
  });

  addCards(cardList);
});

const addCards = (items) => {
  let cardSection = document.getElementById("card-section");
  cardSection.innerHTML = "";

  items.forEach((item, index) => {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="col s12 m6 l4">
        <div class="card large scale-transition scale-in">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${item.image}" alt="${item.title}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            ${item.title}
            <i class="material-icons right">info_outline</i>
          </span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            ${item.title}
            <i class="material-icons right">close</i>
          </span>
          <p>${item.description}</p>
        </div>
      </div>
    `;

    cardSection.appendChild(card);
  });
};
