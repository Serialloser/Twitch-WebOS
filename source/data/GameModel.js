/* global enyo */

enyo.kind({
    name: "twitch.GameModel",
    kind: "enyo.Model",
    options: { parse: true },
    readOnly: true,
    computed: [
        {method: "formatViewers", path: ["viewers"]},        
    ],
    formatViewers: function() {
        return this.get("viewers").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " viewers";
    },    
    parse: function(data) {
        model = {};        
        model.preview = data.game.box.large;
        model.name = data.game.name;
        model.viewers = data.viewers;

        return model;
    }
});