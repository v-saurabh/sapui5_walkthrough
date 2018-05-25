sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		onNavBack : function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("overview");
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").invoicesPath,
				model: "invoice"
			});
		}
	});
});