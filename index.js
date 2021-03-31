function fanPage(){
    
    let musicGroup = {
        name: 'Deep Purple',
        img: 'images/deepPurpleInRock.jpg',
        link: 'https://en.wikipedia.org/wiki/Deep_Purple',
        greatestHits: [
            {song: "Speed King", year : 1970},
            {song: 'Perfect Strangers', year : 1984},
            {song: "Child in Time", year : 1970},
            {song: "Highway Star", year : 1970},
            {song: 'Woman From Tokyo', year : 1973},
            {song: "Burn", year : 1974},
            {song: "Hush", year : 1968},
            {song: 'Smoke On the Water', year : 1972}
        ]
    }

    let musicGroup1 = {
        name: 'Pink Floyd',
        img: 'https://vinyl-records.nl/pink-floyd/photo-gallery/switzerland/dark-side-of-the-moon-swiss/pink%20floyd%20dark%20side%20moon%20switzerland%202374.jpg',
        link: 'https://en.wikipedia.org/wiki/Pink Floyd',
        greatestHits: [
            {song: "Comfortably Numb ", year : 1979},
            {song: "Wish You Were Here", year : 1975},
            {song: "Time", year : 1973},
            {song: "Shine On You Crazy Diamond", year : 1975},
            {song: "Another Brick in the Wall (Part II)", year : 1979},
            {song: "Money", year : 1973},
            {song: "Brain Damage", year : 1973},
            {song: "Have a Cigar", year : 1975}
        ]
    }
    
    Handlebars.registerHelper("list", function(items, options) {
        let out = `<ul class = "list-unstyled">`;
        items.forEach(item => {
            out += `<li > ${options.fn(item)}</li>`;
        });
    return `${out}</ul>`;
    });

//RENDERING BOTH OBJECTS AT THE SAME TIME BUT TOGGLING BOOTSTRAP CLASS "d-none" ON CLICK
    let source = $('#handlebars-demo').html();
    let templateScript = Handlebars.compile(source);
    let text = templateScript(musicGroup);
    $('#content').html("<div class='container group'></div>")
    $('.group').html(`<div class="greatest-hits">${text}</div>`);
    $('.greatest-hits').before(`<header class = "d-flex justify-content-center"><img class = "m-4"src=${musicGroup.img}  width="40%" ></header>`);
    $('.greatest-hits').before(`<h1>${musicGroup.name}:Fan Page</h1>`);
    $('ul').before(`<h2>${musicGroup.name}'s Greatest Hits</h2>`);
    ////////////////////////////////////
    let source1 = $('#handlebars-demo').html();
    let templateScript1 = Handlebars.compile(source1);
    let text1 = templateScript1(musicGroup1)
    $('#content').append("<div class='container group1 d-none'></div>")
    $('.group1').html(`<div class="greatest-hits1">${text1}</div>`);
    $('.greatest-hits1').before(`<header class = "header1 d-flex justify-content-center"><img class = "img1 m-4"src=${musicGroup1.img}  width="40%" ></header>`);
    $('.greatest-hits1').before(`<h1 class = 'h1'>${musicGroup1.name}:Fan Page</h1>`);
    $('.h1').after(`<h2 >${musicGroup1.name}'s Greatest Hits</h2>`);

    ///BUTTON
    $('#content').append(`<button type="button" class="btn btn-primary align-self-center mb-5">Change Artist</button>`)
    $('button').on('click',function(e){
        $('.group1').toggleClass('d-none')
        $('.group').toggleClass('d-none')
    })
}
fanPage();



//SOLUTION WHEN RENDERING ONE AT EACH CLICK 

    // let source = $('#handlebars-demo').html();
    // let templateScript = Handlebars.compile(source);
    // Handlebars.registerHelper("list", function(items, options) {
    //     let out = `<ul class = "list-unstyled">`;
    //     items.forEach(item => {
    //         out += `<li > ${options.fn(item)}</li>`;
    //     });
    // return `${out}</ul>`;
    // });

    // let text = templateScript(musicGroup);
    // $('#content').append("<div class='container'></div>")
    // $('.container').html(`<div class="greatest-hits">${text}</div>`);
    // $('.greatest-hits').before(`<header class = "d-flex justify-content-center"><img class = "m-4"src=${musicGroup.img}  width="40%" ></header>`);
    // $('.greatest-hits').before(`<h1>${musicGroup.name}:Fan Page</h1>`);
    // $('ul').before(`<h2>${musicGroup.name}'s Greatest Hits</h2>`);
    // $('#content').append(`<button type="button" class="btn btn-primary align-self-center mb-5">Change Artist</button>`)
    

    // let band = true;
    // $('button').on('click',function(e){

    // if(band){

    // text = templateScript(musicGroup1)
    // $('.container').html(`<div class="greatest-hits">${text}</div>`);
    // $('.greatest-hits').before(`<header class = "d-flex justify-content-center"><img class = "m-4"src=${musicGroup1.img}  width="40%" ></header>`);
    // $('.greatest-hits').before(`<h1>${musicGroup1.name}:Fan Page</h1>`);
    // $('ul').before(`<h2>${musicGroup1.name}'s Greatest Hits</h2>`);

    // } else {

    // text = templateScript(musicGroup)
    // $('.container').html(`<div class="greatest-hits">${text}</div>`);
    // $('.greatest-hits').before(`<header class = "d-flex justify-content-center"><img class = "m-4"src=${musicGroup.img}  width="40%" ></header>`);
    // $('.greatest-hits').before(`<h1>${musicGroup.name}:Fan Page</h1>`);
    // $('ul').before(`<h2>${musicGroup.name}'s Greatest Hits</h2>`);
    // }
    // band = !band
    // })



























