const next = document.getElementById("next");
const prev = document.getElementById("prev");
const auto = document.getElementById("auto");
const img = document.getElementById("img")
const stop = document.getElementById("stop")

let id;

const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhK5bGuSnGnuEkZXZbENwNpSbZ3YmuOxeKM63Fk79cspDAR7rJZpXu-dGsTJiKt5OvVc8&usqp=CAU",
    "https://www.shutterstock.com/image-illustration/3d-man-walking-through-universe-260nw-1008222751.jpg",
];

let index = 0;

function showImages() {
    img.src = images[index];
};

function nextImages() {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = images[index];
    showImages();
};

function previousImages() {
    if (index > 0) {
        index--;
    }
    else {
        index = images.length - 1;
    }
    img.src = images[index];
    showImages();
};

function autoPlay() {
     id=setInterval(() => {
        if (index < images.length - 1) {
            index++;
        } else {
            index = 0;
        }
        img.src = images[index];
        showImages();
    }, 1000)
};

function stopAutoPlay(){
   clearInterval(id);
}


next.addEventListener("click", () => {
    nextImages();
});
prev.addEventListener("click", () => {
    previousImages();
});
auto.addEventListener("click", () => {
    autoPlay();
});
stop.addEventListener("click", () => {
    stopAutoPlay();
});
showImages(index);



