jQuery(document).ready(function() {
    jQuery(".fancybox-thumb").fancybox({
        openEffect    : 'fade',
        closeEffect   : 'fade',
        prevEffect    : 'fade',
        nextEffect    : 'fade',
        openSpeed     : 'slow',
        closeSpeed    : 'slow',
        prevSpeed     : 'slow',
        nextSpeed     : 'slow',
        helpers       : {
            title     : {
                type: 'inside'
            },
            overlay    : {
                opacity : 0.9,
                css : {
                    'background-color' : '#000'
                }
            },
            thumbs    : {
                width     : 50,
                height    : 50
            }
        }
    });
});