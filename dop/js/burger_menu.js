export let burgerMenu = () =>{
    $('burgerMenu').append(
        $('<div>',{
            class: 'burger__menu__container'
        })
    );
    $('.burger__menu__container').append(
        $('<button>',{
            class: 'open'
        })
    ).append(
        $('<button>',{
            class: 'close'
        })
    );
    
    $('.close').on('click', function(){
        $('.back__container').remove();
        $('.open').css({
            'margin-top': '55%',
            'margin-left': '50%'
        });
        $('.burger__menu__container').css({
            'width': '300px',
            'height': '300px',
            'margin': '-140px -130px'
        });
    });
    
    $('.open').on('click', function(){
        $('.open').css({
            'margin-top': '35%',
            'margin-left': '30%'
        });
        $('.burger__menu__container').css({
            'width': '800px',
            'height': '800px',
            'margin': '-390px -380px'
        });
        $('.wrapper').append(
            $('<div>',{
                class: 'back__container'
            })
        );
    });
}
