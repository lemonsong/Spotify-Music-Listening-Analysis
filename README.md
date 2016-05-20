# Folders
 - Music Listening Analysis Dashboard (PDF and Keynote): findings from visualization dashboard
 - Data Processing: Python code for data preprocessing and exploration
 - Qlik files: Qlik Sense visualization files
 - Analysis: Web mashup files
 - Screenshots: Screenshots of the website

## How to Deploy the Website
1. Download and install [Qlik Sense](http://www.qlik.com/products/qlik-sense)
2. Add Qlik Extension: Extract "Qlik files/inputVariable.zip" and add it to C:\Users\<username>\Documents\Qlik\Sense\Extensions
3. Add "Qlik files/Listening Analysis.qvf" to C:\Users\<username>\Documents\Qlik\Sense\Apps
4. Add Analysis folder to C:\Users\<username>\Documents\Qlik\Sense\Extensions
5. Open Qlik Sense
6. Open the Listening Analysis dashboard and reload the data from "Qlik files/ListeningHistory.csv"
7. Open http://localhost:4848/extensions/Analysis/Analysis.html with a modern browser (recommend Chrome in incognito window; remember add http)
- If you see nothing, please check whether this url is blocked
- If the website format is bad, please check Internet connection
- If the navigator and text can display normally, but you cannot see the charts, please open http://localhost:4848/dev-hub/mashup-editor/#qext{Analysis} and click the little cross under the WHEN, WHERE AND HOW TO LISTEN MUSIC section. Then drag Most Active Weekdays from the left menu to the previous place, where should have a dash square boarder. Now go to the bottom of Analysis/Analysis.js. You can find than a new app has been created, e.g.
```sh
var app1 = qlik.openApp('Listening Analysis.qvf', config);
# It means your Qlik desktop server give Listening Analysis.qvf to variable app1
```
- Now change all 'app' to 'app1', e.g.
change
```sh
app.getObject('weekday-bar','AhGXZj');
```
to
```sh
app1.getObject('weekday-bar','AhGXZj');
```
- Save all changes
- Then refresh http://localhost:4848/extensions/Analysis/Analysis.html. Voila!