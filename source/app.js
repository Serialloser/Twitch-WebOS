/**
	Define and instantiate your enyo.Application kind in this file.  Note,
	application rendering should be deferred until DOM is ready by wrapping
	it in a call to enyo.ready().
*/

enyo.kind({
	name: "twitch.Application",
	kind: "enyo.Application",
	view: "twitch.MainView"
});

enyo.ready(function () {
	new twitch.Application({name: "app"});
});