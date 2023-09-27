

let clickButtons = document.querySelectorAll('.button');
console.log('clickButtons', clickButtons);

[...clickButtons].map(function (button) {
    console.log('el', button);

    button.addEventListener('click', function () {
        console.log('clicked on button')
        document.querySelector('.jav-grap-box1').style.display = 'flex'
    })

let closeButton = document.querySelector('.button-close')


closeButton.addEventListener('click', function(){

    document.querySelector('.popup').style.display = 'none'
})
});

