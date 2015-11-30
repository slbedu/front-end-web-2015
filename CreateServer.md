# Create a web server
1. [Create a Node.JS server](#node-server)
2. [Create a Python server](#python-server)
3. [Create a XAMPP server](#xampp-server)
4. [Create an IIS server](#iis-server)

# Instructions
1. <a name="node-server"></a> Create a Node.JS server
 * [Download](https://nodejs.org/en/download/) and Install Node.JS
 * Install http-server as global node module (write in the console: **npm install -g http-server**)
 * Open a console in the directory of the app and write: **http-server**
 * Open a browser and type **http://localhost:8080**
 
2. <a name="python-server"></a> Create a Python server
 * [Download](https://www.python.org/downloads/) and Install Python
 * Make sure that Python folder is added to the Path variables (e.g. open console and write: **set PATH=%PATH%;C:\Python27**
 * Open a console in the directory of the app and write: **python -m SimpleHTTPServer 8080**
 * Open a browser and type: **http://localhost:8080**

3. <a name="xampp-server"></a> Create a XAMPP server
 * [Download](https://www.apachefriends.org/download.html) and install XAMPP
 * Go to **C:\xampp\htdocs** and paste your project
 * Open XAMPP control Panel and click on Start button next to Apache. This will run a server.
 * Open a browser and type: **http://localhost**

4. <a name="iis-server"></a> Create an IIS server
 * Follow the instructions in [this site](http://webmasterjuice.com/how-to-activate-built-in-web-server-windows)