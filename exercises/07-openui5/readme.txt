Real working example for this project is available here: 
https://airporttimetable-p1653764841trial.dispatcher.hanatrial.ondemand.com/webapp/index.html?sap-ui-theme=sap_hcb
(you must have an account registered at https://accounts.sap.com/ui/public/showRegisterForm?spName=https%3A%2F%2Fscn.sap.com)

This can be run directly if pasted in a HTML5 app git repository or SAPWebIDE.

Alternativelly modify the index.html tag:

<script id="sap-ui-bootstrap"
			src="../../resources/sap-ui-core.js"
			data-sap-ui-libs="sap.m"
			data-sap-ui-theme="sap_bluecrystal"
			data-sap-ui-compatVersion="edge"
			data-sap-ui-resourceroots='{"edu": ""}'>
		</script>

to point to external OpenUI5 resource like this:
https://openui5.hana.ondemand.com/resources/sap-ui-core.js

Have fun.