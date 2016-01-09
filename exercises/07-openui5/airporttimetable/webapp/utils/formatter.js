jQuery.sap.declare("edu.utils.Formatter");

edu.utils.Formatter = {
		formatArrivalsRow: function(delay, closeToArrive, arriving, arrived) {
			var sStyleCloseToArrive = "closeToArrive";
			var sStyleArriving = "arriving";
			var sStyleArrived = "arrived";

			var oRow = this.getParent();
			oRow.removeStyleClass(sStyleCloseToArrive);
			oRow.removeStyleClass(sStyleArriving);
			oRow.removeStyleClass(sStyleArrived);

			var sNewStyleClass = "";

			if (closeToArrive) {
				sNewStyleClass = sStyleCloseToArrive;
			} else if (arriving) {
				sNewStyleClass = sStyleArriving;
			} else if (arrived) {
				sNewStyleClass = sStyleArrived;
			}
			if (sNewStyleClass) {
				oRow.addStyleClass(sNewStyleClass);
			}

			return delay;
		},

		formatDeparturesRow: function(delay, closeToDeparture, departuring, departured) {
			var sStyleCloseToDeparture = "closeToDeparture";
			var sStyleDeparturing = "departuring";
			var sStyleDepartured = "departured";
			var oRow = this.getParent();

			oRow.removeStyleClass(sStyleCloseToDeparture);
			oRow.removeStyleClass(sStyleDeparturing);
			oRow.removeStyleClass(sStyleDepartured);

			var sNewStyleClass = "";

			if (closeToDeparture) {
				sNewStyleClass = sStyleCloseToDeparture;
			} else if (departuring) {
				sNewStyleClass = sStyleDeparturing;
			} else if (departured) {
				sNewStyleClass = sStyleDepartured;
			}
			if (sNewStyleClass) {
				oRow.addStyleClass(sNewStyleClass);
			}

			return delay;
		}
	};