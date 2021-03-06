// Create the view for the admin bar
var MenuItemView = require( 'views/menu-item' );

var CollectionView = Backbone.View.extend( {
	collectionView: MenuItemView,

	/**
	 * Render the admin menu including edit buttons and trash.
	 *
	 * @returns {AdminMenu}
	 */
	render: function () {
		this.$el.html( this.renderCollection() );
		this.delegateEvents();

		return this;
	},

	renderCollection: function () {
		var els = [];

		// Go through the collection items
		this.collection.each( function ( model ) {

			// Instantiate a PeopleItem view for each
			var menuItemView = new MenuItemView( {
				model:  model,
				parent: this
			} );

			els.push( menuItemView.render().el );
		}, this );

		return jQuery( els );
	}
} );

module.exports = CollectionView;
