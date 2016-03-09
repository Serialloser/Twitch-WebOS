enyo.kind({
    name: "twitch.DataGridListWrapper",
    kind: "enyo.Control",    
    clearData: function() {
        this.$.grid.clearData();
    },
    initData: function(data) {
        this.$.grid.initData(data);
    }
});

enyo.kind({
    name: "twitch.GamesDataGridListWrapper",
    kind: "twitch.DataGridListWrapper",
    events: {
        onGameSelected: ""
    },
    published: {
        games: null
    },
    bindings: [
        {from: "games", to: "$.grid.collection"},
        {from: "games.status", to:"$.spinner.showing", transform: function(value) {
            return this.games.isBusy();
        }}        
    ],
    components: [
        {classes: "absolute-container", components: [
            {name: "grid", kind: "twitch.GamesDataGridList", classes: "moon enyo-unselectable enyo-fit"},
            {kind: "moon.Spinner", content: "Loading...", center: true},
        ]},        
    ],
    itemSelected: function(inSender, inEvent) {
        this.doGameSelected({ game: inEvent.model });
    }
});