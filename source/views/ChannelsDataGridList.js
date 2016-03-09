/* global enyo */

enyo.kind({
    name: "twitch.ChannelsDataGridList",
    kind: "twitch.AutoFetchingDataGridList",
    spacing: 10,
    minWidth: 265,
    minHeight: 190,
    collectionKind: "twitch.ChannelsCollection",
    components: [{
        kind: "twitch.ChannelsDataGridListImageItem"
    }],
    initData: function(data) {
        this.get("collection").set("game", data && data.get("name"));        
        this.inherited(arguments);
    }
});

enyo.kind({
    name: "twitch.ChannelsDataGridListImageItem",
    kind: "twitch.AutoFetchingDataGridListImageItem",
    bindings: [
        {from: ".model.status", to: ".caption"},
        {from: ".model.formatViewers", to: ".subCaption"},
        {from: ".model.preview", to: ".source"}        
    ]
});