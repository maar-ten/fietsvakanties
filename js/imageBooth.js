$.getJSON("photos.json", function(data) {
    $("#images").html("");
    $.each(data, function(key, value) {
        var link = value.url.replace("s144", "s800");
        var imageBox = $("<div/>").addClass("imageBox");
        var anchor = $("<a/>").addClass("fancybox-thumb").attr("rel", "fancybox-thumb").attr("href", link);
        var img = $("<img/>").attr("src", value.url).attr("alt", "");
        anchor.attr("title", value.title);
        anchor.append(img);
        imageBox.append(anchor).append(" ");
        imageBox.appendTo("#images");
    });
});