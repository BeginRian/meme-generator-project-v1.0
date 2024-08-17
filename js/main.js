const meme_url = "https://meme-api.com/gimme/wholesomememes";
const generateMemeBtn = (
    document.querySelector(".container .btn")
);
const memeImage = document.querySelector(".container img");
const memeTitle = document.querySelector(".meme-generator .title");


const Details = (url, title) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
};

const generateMeme = () => {
    fetch(meme_url)
     .then((response) => response.json())
     .then((data) => {
        Details(data.url, data.title)
     }); 
};

generateMemeBtn.addEventListener("click", generateMeme);   

generateMeme(); 

