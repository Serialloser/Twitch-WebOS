/* global enyo */

enyo.kind({
    name: "twitch.GamesCollection",
    kind: "twitch.TwitchRemoteCollection",
    model: "twitch.GameModel",    
    url: "games/top",    
    parse: function(data) {
        return data && data.top;
    }
});