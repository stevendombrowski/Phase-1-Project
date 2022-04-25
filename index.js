

// function openTab(evt, tabName) {
//   // Declare all variables
//   let i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

function likeButton(element, color){
  element.style.color = color;
  
}
  
let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});

function dark(){
  let element = document.body;
  element.classList.toggle("dark");
  
}
let body = document.querySelector('body');

let toggle = document.getElementById('darkbutton');
toggle.onclick = function(){
  toggle.classList.toggle('active')
  body.classList.toggle('active')
}

const fetchDogBreeds = async () => {

  const response = await fetch('https://api.thedogapi.com/v1/breeds');
  const dogBreeds = await response.json();
  populateDogSelect(dogBreeds);

}

const populateDogSelect = (breeds) => {
  const select = document.querySelector('.breed-select');
  const breedOptions = breeds.map(breed => {
    const option = document.createElement('option');
    option.text = breed.name;
    option.value = breed.id;
    return option;

  })
  breedOptions.forEach(breedOption => {
    select.appendChild(breedOption);
  })
}

const fillImage = (imageUrl) => {
  document.querySelector('#dogimage').setAttribute('src', imageUrl);
}

const getDogByBreed = async (breedId) => {
  const [data] = await fetch('https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' + breedId).then((data) => data.json())
  const {url: imageUrl, breeds} = data;
  fillImage(imageUrl);

}

const changeDog = () => {

  console.log(event.target.value)
  getDogByBreed(event.target.value);
}
fetchDogBreeds()


