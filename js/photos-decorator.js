window.addEventListener('load', () => {
    $.getJSON('photos.json', (data) => {
        $('#images').html('');
        $.each(data, (_, { url, title }) => {
            const imageBox = $('<div/>').addClass('imageBox');
            const anchor = $('<a/>').attr('data-fancybox', 'gallery').attr('data-caption', title).attr('href', url);
            const img = $('<img/>').attr('src', url).attr('alt', '');

            anchor.append(img);
            imageBox.append(anchor).append(' ');
            imageBox.appendTo('#images');
        });
    });

    Fancybox.bind('[data-fancybox]', {
        wheel: 'pan'
    });
});