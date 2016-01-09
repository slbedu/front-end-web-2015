jQuery.sap.declare("Configuration");
Configuration = {
	checkTime: 5 * 1000 /* 5 seconds */ ,
	switchTimeout: 10 * 1000,
	maxTimeBeforeRemoveArrived: 30 * 1000,
	maxTimeBeforeRemoveDepartured: 30 * 1000,
	arrivalDeparturesSwitch: {
		departures: 15 * 1000,
		arrivals: 20 * 1000
	},
	departuringThresholds: { 
		from: -30 * 1000,
		to: 60 * 1000
	},
	closeToDepartureThresholds: {
		from: 0,
		to: 5 * 60 * 1000
	},
	arrivalThresholds: { 
		from: 0,
		to: 60 * 1000
	},
	closeToArrivalThresholds: {
		from: 0,
		to: 5 * 60 * 1000
	} 
}