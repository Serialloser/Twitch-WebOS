/* global enyo */

enyo.kind({
    name: "twitch.ChannelsCollection",
    kind: "twitch.TwitchRemoteCollection",
    model: "twitch.ChannelModel",    
    url: "streams",    
    parse: function(data) {
        return data && data.streams;
    },
    fetch: function(opts) {
        if (this.get("game")) {
            opts.params.game = this.get("game");
        }
        this.inherited(arguments);
    }
});