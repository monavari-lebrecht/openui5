sap.ui.define(["sap/ui/core/UIComponent"],
	function (UIComponent) {
		"use strict";

		return UIComponent.extend("sap.m.sample.MessagePage.Component", {
			metadata : {
				rootView : {
					"viewName": "sap.m.sample.MessagePage.Page",
					"type": "XML",
					"async": true
				},
				dependencies : {
					libs : [
						"sap.m",
						"sap.ui.layout"
					]
				},
				config : {
					sample : {
						stretch : true,
						files : [
							"Page.view.xml"
						]
					}
				}
			}
		});
	}
);
