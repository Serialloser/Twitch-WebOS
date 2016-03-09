/* global enyo */

enyo.kind({
    name: "twitch.ChannelModel",
    kind: "enyo.Model",
    options: { parse: true },
    readOnly: true,
    computed: [
        {method: "formatViewers", path: ["viewers", "displayName"]},        
    ],
    formatViewers: function() {
        return this.get("viewers").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " viewers on " + this.get("displayName");
    },    
    parse: function(data) {
        model = {};        
        model.preview = data.preview.medium;
        model.name = data.channel.name;
        model.displayName = data.channel.display_name;
        model.status = data.channel.status;
        model.viewers = data.viewers;

        return model;
    }
});