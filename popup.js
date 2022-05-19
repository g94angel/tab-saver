let myURLS = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("button-save")
const deleteBtn = document.getElementById("button-delete")
const listEl = document.getElementById("a-images")
const urlsFromLocalStorage = JSON.parse( localStorage.getItem("myURLS") )

// let changeDogNext = document.getElementById('nextDog');
// let changeDogPrev = document.getElementById('previousDog');

if (urlsFromLocalStorage) {
    myURLS = urlsFromLocalStorage
    render(myURLS)
}


function render(urls) {
    let listItems = ""
    for (let i = 0; i < urls.length; i++) {
        listItems += `
            <li>
                 <a target='_blank' href='${urls[i]}'>
                    ${urls[i]}
                 </a>
                 <img src='${urls[i]}'>
            </li>
        `
    }
    listEl.innerHTML = listItems
}

saveBtn.addEventListener("click", function() {
    myURLS.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myURLS", JSON.stringify(myURLS) )
    render(myURLS)
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myURLS = []
    render(myURLS)
})

//old stuff
// let grabImg = document.querySelector('img');
// let dogArr = ['https://cf.ltkcdn.net/dogs/images/std/279404-800x533-australian-shepherd.webp', 'https://thehappypuppysite.com/wp-content/uploads/2019/01/Rottweiler-Temperament-long.jpg'];
// let curDogIndex = 0;

// changeDogNext.addEventListener("click", nextDog);
// changeDogPrev.addEventListener("click", prevDog);

// function nextDog() {
//   curDogIndex++;
//   grabImg.src = dogArr[curDogIndex];

// }

// function prevDog() {
//   curDogIndex--;
//   grabImg.src = dogArr[curDogIndex];

// }

