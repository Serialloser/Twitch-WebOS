/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "twitch.MainView",	
	classes: "moon enyo-fit",	
	components: [		
		{name: "gameswrapper", kind: "twitch.GamesDataGridListWrapper", classes: "enyo-fit"},
	],
    create: function() {
        this.inherited(arguments);
        this.set("games", new twitch.GamesCollection());
        this.$.gameswrapper.set("games", this.games);
    },
	rendered: function() {
        this.inherited(arguments);        
        this.$.gameswrapper.initData();
        this.$.gameswrapper.show();
    },    
    showGames: function() {        
        this.$.gameswrapper.initData();
        this.$.gameswrapper.show();
    },
});
