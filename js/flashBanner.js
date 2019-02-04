jQuery(document).ready(function() {
    var texts = [
        {html:"<span class='headerTextFontSmall'>welkom op</span><br>laurs.nl", style:""},
        {html:"Avontuurlijke<br>Fietsvakanties", style:""},
        {html:"over het", style:"headerTextFrame3"},
        {html:"Europese<br>Continent", style:""},
        {html:"<a href='http://laurs.nl/fiets'>laurs.nl</a> ", style:"headerTextFrame5"}
    ];
    jQuery("#headerText").html("");
    jQuery("#header").hide().delay(100).fadeIn('slow', function() {
        texts.forEach(nextText);
    });
});
function nextText(text, index, array) {
    var textObject = jQuery("#headerText").delay(2000);
    textObject.fadeOut('slow',
            function() {
                jQuery(this).html(text.html);
                if (index > 0 && array[index - 1].style) {
                    jQuery(this).removeClass(array[index - 1].style);
                }
                if (text.style) {
                    jQuery(this).addClass(text.style);
                }
            }).fadeIn('slow');
}