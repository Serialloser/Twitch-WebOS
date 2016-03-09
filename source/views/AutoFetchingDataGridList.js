/* global enyo, simpletwitch */

enyo.kind({
    name: "twitch.AutoFetchingDataGridList",
    kind: "moon.DataGridList",
    fit: true,
    fetchThreshold: 0.9,
    _last_fetch: 0,
    bindings: [
        {from: ".$.collection", to: ".collection"}
    ], 
    create: function() {
        this.inherited(arguments);        
        this.createComponent({
            name: "collection",
			kind: this.collectionKind
		}, { owner: this });
    },
    initData: function() {
        this.loadInitialData();
    },
    loadInitialData: function() {
        this.get("collection").fetchNextItems();        
    },
    clearData: function() {
        this.get("collection").destroyAll();
    },    
    modelsAdded: function() {
        this.inherited(arguments);
    },
    didScroll: function(sender, event) {
        this.inherited(arguments);
        var maxTopVal = event.scrollBounds.maxTop;
        var actualTop = event.scrollBounds.top;

        if (actualTop > (maxTopVal * this.fetchThreshold)) {
            if (this.collection.get("length") != this._last_fetch) {
                this._last_fetch = this.collection.get("length");
                this.get("collection").fetchNextItems();
            }
        }
    }
});

enyo.kind({
    name: "twitch.AutoFetchingDataGridListImageItem",
    kind: "moon.GridListImageItem",
    selectionOverlayVerticalOffset: 35,
    centered: false,
    ontap: "itemSelected"
});