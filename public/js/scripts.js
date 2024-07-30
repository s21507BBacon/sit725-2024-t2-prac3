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
];

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();
  console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  addCards(cardList);
  $(".modal").modal();
});
