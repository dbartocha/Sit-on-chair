document.addEventListener('DOMContentLoaded', function () {

    var list = document.querySelector('.navigation-element');


    list.addEventListener('mouseover', function () {

        var sublist = document.querySelector('.navigation-sublist');

        sublist.style.display = 'flex';

        var elements=sublist.querySelectorAll('.navigation-sublist-el');
for(var i=0; i<elements.length;i++) {

    elements[i].addEventListener('mouseover', function () {
        this.style.color='rgb(36, 186, 159)';
    })

    elements[i].addEventListener('mouseout', function () {
        this.style.color='white';
    })
}

    });

    var sublist = document.querySelector('.navigation-sublist');
    sublist.addEventListener('mouseleave', function () {
        sublist.style.display = 'none';

    });


// Changing a view of boxes


    var block1 = document.querySelector('.box1');
    var block2 = document.querySelector('.box2');
    var block3 = document.querySelector('.box3');     //I looking for boxes.

// And changing text display
    block1.addEventListener('mouseover', function () {
        var text = document.querySelector('.text1');

        text.style.display = 'none'

    });
    block1.addEventListener('mouseout', function () {
        var text = document.querySelector('.text1');

        text.style.display = 'block'

    });
    block2.addEventListener('mouseover', function () {
        var text = document.querySelector('.text2');

        text.style.display = 'none'

    });
    block2.addEventListener('mouseout', function () {
        var text = document.querySelector('.text2');

        text.style.display = 'block'

    });

// Slider --------------------------------------------

    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');

    var index = 0;

    next.addEventListener('click', function () {
        index++;
        var right = document.querySelector('.column-right');

        var headtext = right.querySelector('h1');


        if (index != 0) {
            headtext.innerHTML = '' + index + ' SIT ' + '<span> ON </span>' + ' OUR ' + '<span> CHAIR </span>';

        }
        else {
            headtext.innerHTML = '' + ' SIT ' + '<span> ON </span>' + ' OUR ' + '<span> CHAIR </span>';
        }


        var left = document.querySelector('.column-left');

        if(index%2==0){
            left.innerHTML = '<img src="images/black_chair.png" class="image" alt="">';
        }
        else{
            left.innerHTML = '<img src="images/orange_chair.png" class="image" alt="">';
        }


    })



    prev.addEventListener('click', function () {

        index--;
        var right = document.querySelector('.column-right');

        var headtext = right.querySelector('h1');

        if (index != 0) {
            headtext.innerHTML = '' + index + ' SIT ' + '<span> ON </span>' + ' OUR ' + '<span> CHAIR </span>';

        }
        else {
            headtext.innerHTML = '' + ' SIT ' + '<span> ON </span>' + ' OUR ' + '<span> CHAIR </span>';

        }


        var left = document.querySelector('.column-left');
        if(index%2==0){
            left.innerHTML = '<img src="images/black_chair.png" class="image" alt="">';
        }
        else{
            left.innerHTML = '<img src="images/orange_chair.png" class="image" alt="">';
            }

    });

});