
var cats = [];

function Cat(name, age, img) {
    this.name = name
    this.age = age
    this.pets = 0
    this.happiness = ["moody", "happy", "bitey"]
    this.img = img
    this.snacks = 0
}

function getHappiness(cat){
    if(cat.pets <= 3){
        return cat.happiness[0]
    }
    if(cat.pets == 4){
        return cat.happiness[1]
    }
    return cat.happiness[2]
}

var cat1 = new Cat("Mr. Snibbly", 200, "http://www.prestigeanimalhospital.com/sites/default/files/08-cat-cancer-4.jpeg")
var cat2 = new Cat("Truffles", 20, "https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg")
var cat3 = new Cat("Mittens", 1, "https://cf.ltkcdn.net/cats/images/std/211655-675x450-Kitten-peeking.jpg")
var cat4 = new Cat("Grumpy", 100, "http://i0.kym-cdn.com/entries/icons/mobile/000/011/365/GRUMPYCAT.jpg")

cats.push(cat1, cat2, cat3, cat4)

function draw(arr){
    var template = ''
    var catElem = document.getElementById("cat-card")
    for (let i = 0; i < arr.length; i++) {
        var cat = arr[i];
        template += `
        <div class="col-md-4">
            <img src="${cat.img}" alt="" class="cat-photo">
            <h3>Name:</h3>
            <p>${cat.name}</p>
            <h3>Age:</h3>
            <p>${cat.age}</p>
            <h3>Happiness:</h3>
            <p>${getHappiness(cat)}</p>
            <button onclick="petMe(${i})">Pet me!</button>
            <button onclick="treats(${i})">Give me treats!</button>
        </div>
        `
    }
    catElem.innerHTML = template
}

// Helper functions
function petMe(index){
    var cat = cats[index]
    cat.pets++
    draw(cats)
}

function treats(index){
    var cat = cats[index]
    cat.pets = 0
    draw(cats)
}

draw(cats)
