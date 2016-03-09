/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "twitch.MainView",	
	classes: "moon enyo-fit",
    handlers: {
        onShowChannels:  "showChannels",
        onShowGames: ""        
    },
	components: [		
		{name: "gameswrapper", kind: "twitch.GamesDataGridListWrapper", classes: "enyo-fit", showing: true},
        {name: "channelswrapper", kind: "twitch.ChannelsDataGridListWrapper", classes: "enyo-fit", showing: false},
	],
    create: function() {
        this.inherited(arguments);
        this.set("games", new twitch.GamesCollection());
        this.set("channels", new twitch.ChannelsCollection());
        this.$.gameswrapper.set("games", this.games);
        this.$.channelswrapper.set("channels", this.channels);
    },
	rendered: function() {
        this.inherited(arguments);        
        this.$.gameswrapper.initData();
        this.$.channelswrapper.hide();
        this.$.gameswrapper.show();
    }, 
    clearUI: function() {
        this.$.gameswrapper.clearData();
        this.$.channelswrapper.clearData();
    },   
    showGames: function() {
        this.clearUI();        
        this.$.gameswrapper.initData();
        this.$.channelswrapper.hide();
        this.$.gameswrapper.show();
    },
    showChannels: function(sender, event) {
        this.clearUI();        
        this.$.channelswrapper.initData(event.game);
        this.$.gameswrapper.hide();
        this.$.channelswrapper.show();
    },
});
