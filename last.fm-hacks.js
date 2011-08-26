String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}

// LFM.String.toRedStr = "x";
// LFM.String.toBlackStr = "x";

$(function() {

    // simply fuck off
    $("#colourToggle").text("x");
    // spotify links
    $(".subjectCell").each(function(index, cell) {
        var $cell = $(cell);
        var songName = $cell.text().trim();
        var query = 'http://ws.spotify.com/search/1/track.json?q=' + songName;
        $.get(query, function(data) {
            if (data.tracks.length > 0) {
                var track = data.tracks[0];
                $cell.after('<td class="spotify"><a href="' + track.href + '" title="Play in Spotify"><img src="' + chrome.extension.getURL("spotify.png") + '"/></a></td>');
            }
        });

    });
});


