enyo.kind({
  name: "twitchApi.Source",
  kind: "enyo.JsonpSource",
  urlRoot: "https://api.twitch.tv/kraken/",
  fetch: function(rec, opts) {
    // console.log("twitchApi.Source >> fetch >> rec: ", rec);
    // console.log("twitchApi.Source >> fetch >> opts: ", opts);
    // opts.callbackName = "jsoncallback";
    // opts.params = enyo.clone(rec.params);  
    this.inherited(arguments);
  }
})

new twitchApi.Source({name: "twitchApi"});