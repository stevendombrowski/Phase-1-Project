

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
  

let tabs = document.querySelectorAll(".tabs");
let tab_wraps = document.querySelectorAll(".tab_wrap");

tabs.forEach(function(tab, tab_index){
  tab.addEventListener("click", function(){
    tabs.forEach(function(tab){
      tab.classList.remove("active");
    })
    tab.classList.add("active");

    tab_wraps.forEach(function(content, content_index){
      if(content_index == tab_index){
          content.style.display = "block";
      }
      else{
          content.style.display = "none";
      }
    })
  })
})

function dark(){
  let element = document.body;
  element.classList.toggle("darkmode");
  
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


