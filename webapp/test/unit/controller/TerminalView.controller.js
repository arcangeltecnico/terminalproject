/*global QUnit*/

sap.ui.define([
	"terminalSpace/terminalproject/controller/TerminalView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TerminalView Controller");

	QUnit.test("I should test the TerminalView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
