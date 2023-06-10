const texts = [
    { html: '<span class="headerTextFontSmall">welkom op</span><br>laurs.nl', style: '' },
    { html: 'Avontuurlijke<br>Fietsvakanties', style: '' },
    { html: 'over het', style: 'headerTextFrame3' },
    { html: 'Europese<br>Continent', style: '' },
    { html: '<a href="http://laurs.nl/fietsvakanties">laurs.nl</a>', style: 'headerTextFrame5' }
];

$(document).ready(() => {
    $('#headerText').html('');
    $('#header').hide().delay(100).fadeIn('slow', function () {
        texts.forEach(nextText);
    });
});

function nextText(text, index, array) {
    const textObject = $('#headerText').delay(2000);
    textObject.fadeOut('slow',
        function () {
            $(this).html(text.html);
            if (index > 0 && array[index - 1].style) {
                $(this).removeClass(array[index - 1].style);
            }
            if (text.style) {
                $(this).addClass(text.style);
            }
        }).fadeIn('slow');
}