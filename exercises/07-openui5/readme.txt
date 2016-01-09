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