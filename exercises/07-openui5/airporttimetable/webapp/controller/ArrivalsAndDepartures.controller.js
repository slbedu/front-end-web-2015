jQuery.sap.require("sap.ui.core.format.DateFormat");
jQuery.sap.require("edu/utils/formatter");
jQuery.sap.require("edu/utils/Configuration");

sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(Controller) {
	"use strict";

	return Controller.extend("edu.controller.ArrivalsAndDepartures", {
		onInit: function() {
			var oData = this._loadData(),
				oModel = new sap.ui.model.json.JSONModel();

			this._oView = this.getView();

			oModel.setData(oData);
			this._oView.setModel(oModel);
			/* this._loadLocalDataAsync(function(sData) {
				var oModel = new sap.ui.model.json.JSONModel();
				var oData = JSON.parse(sData);
				oModel.setData(oData);
				that.getView().setModel(oModel);
			});*/
			this.currentPage = this.getView().byId("pageArrivals");
			setTimeout(this.switchPage.bind(this), Configuration.switchTimeout);
		},

		onAfterRendering: function() {
			if (!this._oScheduled) {
				setTimeout(this._handleDeparture.bind(this), Configuration.checkTime);
				setTimeout(this._handleArrivals.bind(this), Configuration.checkTime);
				this._oScheduled = true;
			}
		},

		switchPage: function() {
			if (this.currentPage === this.getView().byId("pageArrivals")) {
				var pageDepartures = this.getView().byId("pageDepartures");
				this.currentPage = pageDepartures;
				this.getView().byId("navContainer").to(pageDepartures, "flip");
			} else {
				var pageArriavals = this.getView().byId("pageArrivals");
				this.currentPage = pageArriavals;
				this.getView().byId("navContainer").to(pageArriavals, "flip");
			}
			setTimeout(this.switchPage.bind(this), Configuration.switchTimeout);
		},

		_handleDeparture: function() {
			var oCurrentTime = new Date();
			var oModifiedModel = this._markDeparturesFlightInfo(this._oView.getModel().getProperty("/departures"), oCurrentTime);
			if (oModifiedModel) {
				this._oView.getModel().setProperty("/departures", oModifiedModel);
			}
			setTimeout(this._handleDeparture.bind(this), Configuration.checkTime);
		},
		_handleArrivals: function() {
			var oCurrentTime = new Date();
			var oModifiedModel = this._markArrivalsFlightInfo(this._oView.getModel().getProperty("/arrivals"), oCurrentTime);
			if (oModifiedModel) {
				this._oView.getModel().setProperty("/arrivals", oModifiedModel);
			}
			setTimeout(this._handleArrivals.bind(this), Configuration.checkTime);
		},
		_markDeparturesFlightInfo: function(oData, oCurrentTime) {
			if (this._sStyleCloseToArriveDepartures) {
				return oData;
			}
			this._sStyleCloseToArriveDepartures = true;
			for (var i = 0; i < oData.length; i++) {
				var oFlightInfo = oData[i];
				var iTimeDifference = oFlightInfo.departures - oCurrentTime.getTime();

				if (iTimeDifference >= Configuration.departuringThresholds.from && iTimeDifference <= Configuration.departuringThresholds.to) {
					this._resetFlightInfoFlags(oFlightInfo);
					oFlightInfo.departuring = true;
				} else if (iTimeDifference > Configuration.closeToDepartureThresholds.from && iTimeDifference < Configuration.closeToDepartureThresholds
					.to) {
					this._resetFlightInfoFlags(oFlightInfo);
					oFlightInfo.closeToDeparture = true;
				} else if (iTimeDifference < Configuration.closeToDepartureThresholds.from) {
					if (oFlightInfo.departured) {
						this._resetFlightInfoFlags(oFlightInfo);
						oFlightInfo.departured = true;
						oFlightInfo.departuredSince = oFlightInfo.departuredSince += Configuration.checkTime;
					} else {
						this._resetFlightInfoFlags(oFlightInfo);
						oFlightInfo.departured = true;
						oFlightInfo.departuredSince = Configuration.checkTime;
					}
					if (oFlightInfo.departuredSince > Configuration.maxTimeBeforeRemoveDepartured) {
						oData.splice(i, 1);
					}
				}
			}
			this._sStyleCloseToArriveDepartures = false;
			return oData;
		},

		_markArrivalsFlightInfo: function(oData, oCurrentTime) {
			if (this._sStyleCloseToArriveArrives) {
				return oData;
			}
			this._sStyleCloseToArriveArrives = true;
			for (var i = 0; i < oData.length; i++) {
				var oFlightInfo = oData[i];

				var iTimeDifference = oFlightInfo.arrives - oCurrentTime.getTime();

				if (iTimeDifference > Configuration.arrivalThresholds.from && iTimeDifference < Configuration.arrivalThresholds.to) {
					this._resetFlightInfoFlags(oFlightInfo);
					oFlightInfo.arriving = true;
				} else if (iTimeDifference > Configuration.closeToArrivalThresholds.from && iTimeDifference < Configuration.closeToArrivalThresholds.to) {
					this._resetFlightInfoFlags(oFlightInfo);
					oFlightInfo.closeToArrive = true;
				} else if (iTimeDifference < Configuration.closeToArrivalThresholds.from) {
					if (oFlightInfo.arrived) {
						this._resetFlightInfoFlags(oFlightInfo);
						oFlightInfo.arrived = true;
						oFlightInfo.arrivedSince = oFlightInfo.arrivedSince += Configuration.checkTime;
					} else {
						this._resetFlightInfoFlags(oFlightInfo);
						oFlightInfo.arrived = true;
						oFlightInfo.arrivedSince = Configuration.checkTime;
					}
					if (oFlightInfo.arrivedSince > Configuration.maxTimeBeforeRemoveArrived) {
						oData.splice(i, 1);
					}
				}
			}
			this._sStyleCloseToArriveArrives = false;
			return oData;
		},
		_resetFlightInfoFlags: function(oFlightInfo) {
			oFlightInfo.closeToArrive = false;
			oFlightInfo.arriving = false;
			oFlightInfo.arrived = false;
			oFlightInfo.closeToDeparture = false;
			oFlightInfo.departuring = false;
			oFlightInfo.departured = false;
		},

		_loadData: function() {
			var oCurrentDate = new Date(),
				iMinutes = oCurrentDate.getMinutes();

			var oData = {
				arrivals: [{
					order: 1,
					from: "ФРАНКФУРТ",
					arrives: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 4),
					flightNumber: "12345",
					airline: "WIZZ Air",
					gate: 3,
					delay: 0
				}, {
					order: 2,
					from: "БАРСЕЛОНА",
					arrives: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 5),
					flightNumber: "12346",
					airline: "Bulgaria Air",
					gate: 2,
					delay: 3
				}, {
					order: 3,
					from: "МАДРИД",
					arrives: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 8),
					flightNumber: "1234",
					airline: "Bulgaria Air",
					gate: 12,
					delay: 3
				}, {
					order: 4,
					from: "ПАРИЖ",
					arrives: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 10),
					flightNumber: "12347",
					airline: "Air France",
					gate: "13A",
					delay: 0
				}, {
					order: 5,
					from: "ИСТАНБУЛ",
					arrives: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 11),
					flightNumber: "8763",
					airline: "Turkish Airlines",
					gate: 22,
					delay: 0
				}, {
					order: 6,
					from: "ЗАКИНТОС",
					arrives: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 20),
					flightNumber: "81763",
					airline: "Olympic Air",
					gate: 7,
					delay: 0
				}],
				departures: [{
					order: 1,
					to: "РИМ",
					departures: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 2),
					flightNumber: "12345",
					airline: "Al Itralia",
					gate: 3,
					delay: 0
				}, {
					order: 2,
					to: "БРЮКСЕЛ ШАРЛЕРОА",
					departures: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 3),
					flightNumber: "12346",
					airline: "Wizz Air",
					gate: 2,
					delay: 0
				}, {
					order: 3,
					to: "ПАРИЖ БОВЕ",
					departures: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 6),
					flightNumber: "1234",
					airline: "Wizz Air",
					gate: 1,
					delay: 3
				}, {
					order: 4,
					to: "ПЛОВДИВ",
					departures: new Date(oCurrentDate.setSeconds(0)).setMinutes(iMinutes + 8),
					flightNumber: "1237",
					airline: "Bulgaria Air",
					gate: 22,
					delay: 0
				}]
			};
			return oData;
		},

		_loadLocalDataAsync: function(callback) {
			jQuery.get('/webapp/data/timetable.data').done(function(data) {
				callback(data);
			}).fail(function(jqXHR, textStatus, errorThrown) {
				alert("Cannot load timetable data: " + errorThrown);
			});
		},
		formatDate: function(iTimestamp) {
			var oDate = new Date(iTimestamp);
			return sap.ui.core.format.DateFormat.getTimeInstance({
				pattern: 'HH:mm'
			}).format(oDate);
		}
	});
});