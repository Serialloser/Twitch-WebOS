enyo.kind({
  name: "twitch.TwitchRemoteCollection",
  kind: "enyo.Collection",
  source: "twitchApi",  
  options: { parse: true },  

  fetch: function (opts, cb) {
    console.log(opts);
    console.log(cb);  
    return this.inherited(arguments);
  },

  parse: function(data) {    
    return data && data.streams;
  },

  fetchNextItems: function(count) {      
    var opts = { params: {}};
    opts.params.on_site = 1;
    opts.params.offset = opts.offset || this.length;
    opts.params.limit = count || 36;
    this.fetch(opts);
  },    
});