/**
 * Created by JetBrains WebStorm.
 * User: mschwartz
 * Date: 12/11/11
 * Time: 2:39 PM
 * To change this template use File | Settings | File Templates.
 */

Ext.onReady(function() {
	var items = [];
	for (var i in Schemas) {
		var schema = Schemas[i];
		items.push({
			xtype: 'ext-ux-schemagrid',
			title: i,
			schema: schema,
			method: 'list'+i
		});
	}

	new Ext.Viewport({
		layout: 'fit',
		items: [
			{
				xtype: 'tabpanel',
				activeTab: 0,
				items: items
			}
		]
	})
});
