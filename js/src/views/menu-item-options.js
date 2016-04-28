var MenuItemOptionsView = Backbone.View.extend( {
	tagName:   'div',
	template:  require( 'templates/menu-item-options' ),
	className: 'wp-submenu wp-submenu-wrap sub-open amm-menu-item-options',

	render: function () {
		var options   = AdminMenuManager.templates.menuItemOptions;
		options.model = this.model.toJSON();

		this.$el.html( this.template( options ) );
		return this;
	},

	events: {
		'click .amm-menu-item-options-save': 'save'
	},

	save: function () {
		this.model.set( 0, this.$el.find( 'input[name=amm-menu-item-option-name]' ).val() );
		this.model.set( 6, this.$el.find( 'input[name=amm-menu-item-option-icon]' ).val() );
		this.model.set( 'href', this.$el.find( 'input[name=amm-menu-item-option-href]' ).val() );

		this.remove();

		this.trigger( 'save' );
	}

} );

module.exports = MenuItemOptionsView;
