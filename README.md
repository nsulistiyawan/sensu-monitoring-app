# Sensu Monitoring App
Ionic based apps for server monitoring using sensu api, support for push notification using google cloud messaging & onesignal api

# Running Instruction
1. install nodejs
2. install ionic framework ( npm install -g ionic)
3. install gulp ( npm install -g ionic )
3. clone repo ( git clone https://github.com/nsulistiyawan/sensu-monitoring-app.git )
4. cd sensu-monitoring-app
5. install all dependencies ( npm install, bower install )
6. gulp watch
7. changing YOUR_SENSU_URL_BASE_API, ( ONE_SIGNAL_APP_ID, GOOGLE_PROJECT_NUMBER is optional ) on www/js/app.js
8. wait until gulp task for minify and concat js is running
7. run ionic serve / ionic serve --lab, open http://localhost:8100

# Building Instruction
soon


# Screenshot

![Overview Sensu Monitoring App](http://i.imgur.com/8eGATyo.png)
![Client List Sensu Monitoring App](http://i.imgur.com/MVy6Npn.png)
![Client Details Sensu Monitoring App](http://i.imgur.com/i3IfgGG.png)
![Silenced Event Sensu Monitoring App](http://i.imgur.com/sS02Gm4.png)
