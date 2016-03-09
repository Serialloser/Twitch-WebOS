/* global enyo */

enyo.kind({
    name: "twitch.GamesDataGridList",
    kind: "twitch.AutoFetchingDataGridList",
    spacing: 10,
    minWidth: 166,
    minHeight: 250,
    collectionKind: "twitch.GamesCollection",
    components: [{
        kind: "twitch.GamesDataGridListImageItem"
    }]
});

enyo.kind({
    name: "twitch.GamesDataGridListImageItem",
    kind: "twitch.AutoFetchingDataGridListImageItem",
    bindings: [
        {from: ".model.name", to: ".caption"},
        {from: ".model.formatViewers", to: ".subCaption"},
        {from: ".model.preview", to: ".source"}
    ]
});