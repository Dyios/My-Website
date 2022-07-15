$(function () {
    $('.jumbotron').delay(300).show('slide', { direction: 'up' }, 800, function () {
        $('.card , .col-md-8').show("scale", 1000);
    });

    let letters = $('h2 span:first-child');
    let welcome = $('h2 span');
    $('footer').delay(1500).hide().removeClass('d-none').show(500, timeout);
    // nice thing
    function timeout() {
        setTimeout(() => animation(letters), 1000);
    }

    function animation(letters) {
        if (welcome.is(':animated'))
            return;
        letters.effect('bounce', { distance: 8, times: 1 }, 150, () => {
            if (letters[0].textContent === '.')
                return;
            animation(letters.next());
        })
    };
    welcome.mouseenter(() => { animation(letters) });
});

$('#year').append(new Date().getFullYear());