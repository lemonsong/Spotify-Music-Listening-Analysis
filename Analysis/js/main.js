/* Variable declaration */
var appdaily;
var appmonthly; //web app
var qlikApp; //qlik objects
var width = screen.width; //screen width
var chartsUN = {
    /* Mapping between Qlik object ID and chart name */

    /* Home */

    /* Activities and Committed Budget*/
    'activity-kpi': 'qmJWxkk', //chart1
    'budget-kpi': 'LCzVtH', //chart2
    'activity-year': 'jtSnst', //chart3
    'budget-year': 'WdeJPR', //chart4
    'activity-status': 'JfXpmT', //chart5
    'budget-org-type': 'BRwGb', //chart6
    
    /* Top */
    'top-recipients': 'PrWqJr', //chart7
    'top-funding-org': 'KxDcD', //chart8
    'top-implementing-org': 'dQJFrj', //chart9
    'top-recipients-map': 'MQcpUy', //chart10
    
    /* Filters */
    'filter-year': 'wFzFm', //chart11
    'filter-reporting-org': 'eNBXhAD', //chart12
    'filter-recipient': 'hEXbgkV', //chart13
    'filter-funding': 'vbRhdD', //chart14
    'filter-implementing': 'JUuMG', //chart15
    
    /* Budget */
    'total-commitment': 'mdcJRV', //chart16
    'total-disbursement': 'GAcpWN', //chart17
    'total-expenditure': 'GXdwtf', //chart18
    'total-incoming': 'EVSZz', //chart19
    'total-interest': 'DEJCd', //chart20
    'total-loan': 'TCPQqTF', //chart21
    
    /* Table */
    'table': 'JZHuf' //chart22
};

var chartMap = {
    /* Home */
    /* Activities and Committed Budget*/
    'activity-kpi': 1, //chart1
    'budget-kpi': 2, //chart2
    'activity-year': 3, //chart3
    'budget-year': 4, //chart4
    'activity-status': 5, //chart5
    'budget-org-type': 6, //chart6
    
    /* Top */
    'top-recipients': 7, //chart7
    'top-funding-org': 8, //chart8
    'top-implementing-org': 9, //chart9
    'top-recipients-map': 10, //chart10
    
    /* Filters */
    'filter-year': 11, //chart11
    'filter-reporting-org': 12, //chart12
    'filter-recipient': 13, //chart13
    'filter-funding': 14, //chart14
    'filter-implementing': 15, //chart15
    
    /* Budget */
    'total-commitment': 16, //chart16
    'total-disbursement': 17, //chart17
    'total-expenditure': 18, //chart18
    'total-incoming': 19, //chart19
    'total-interest': 20, //chart20
    'total-loan': 21, //chart21
    
    /* Table */
    'table': 22 //chart22
};

var orHeight = [];

function displayImage(chartName) {
    var id = chartMap[chartName];
    var img = document.createElement("img");
    img.src = 'images/charts/chart' + id + '.png';
    img.style.width = "100%";
    img.style.height = "auto";
    img.onload = function() {
        chartDiv = document.getElementById(chartName);
        orHeight[chartName] = chartDiv.style.height;
        chartDiv.appendChild(img);
        var divHeight = this.clientHeight;
        chartDiv.style.height = divHeight+"px";
    };
}


function setHeight(chartName) {
    chartDiv = document.getElementById(chartName);
    chartDiv.style.height = orHeight[chartName];
}


var config = {
     host: 'viz.unite.un.org',
     prefix: "/visualization/",
     port: null,
     isSecure: true
};

require.config({
    baseUrl: (config.isSecure ? "https://" : "http://")
        + config.host
        + (config.port ? ":"
        + config.port : "")
        + config.prefix
        + "resources"
});



require(["js/qlik"], function(qlik) {
    qlikApp = qlik;

    /* Establish connection with Qlik Server */
    app = qlikApp.openApp("0e886feb-9668-42e5-a439-eb1b471a61b7", config);
    /* Only getting charts needed on the first load */
    /* Home */
    /* Activities and Committed Budget*/
    displayObject('activity-kpi', true);
    displayObject('budget-kpi', true);
    displayObject('activity-year',true);
    displayObject('budget-year',true);
    displayObject('activity-status',true);
    displayObject('budget-org-type',true);
    /* Top */
    displayObject('top-recipients',true);
    displayObject('top-funding-org',true);
    displayObject('top-implementing-org', true);
    displayObject('top-recipients-map', true);
    /* Filters */
    displayObject('filter-year', false);
    displayObject('filter-reporting-org', false);
    displayObject('filter-recipient',false);
    displayObject('filter-funding',false);
    displayObject('filter-implementing',false);
    /* Budget */
    displayObject('total-commitment',true);
    displayObject('total-disbursement',true);
    displayObject('total-expenditure', true);
    displayObject('total-incoming', true);
    displayObject('total-interest', true);
    displayObject('total-loan', true);
    /* Table */
    displayObject('table', true);

    /* Clear all selection */
    $("#clearSelection").click(function() {
        app.clearAll();
    });

});


function hideElement(elementId) {
    /* Hide element after page loads */
    $('#' + elementId).hide();
}

function removeImg(chartName){
    var chartDiv = document.getElementById(chartName);
    console.log(chartDiv);
    chartDiv.removeChild(chartDiv.childNodes[0])
}

function displayObject(key,mobile) {
    /* Display qlik objects */
    /* If mobile == false, not responsive on small screen */
    if (mobile == false) {
        if (width < 480) {
            app.getObject(key, chartsUN[key], {
                noInteraction: true
            });
        } else {
            app.getObject(key, chartsUN[key]);
        }
    } else {
        app.getObject(key, chartsUN[key]);
    }
}

function printObj(obj) {
    var newWindow = window.open(obj);
    newWindow.print();
}

/* add bootstrap carousel to display images in home page */
$(window).load(function() {
			$('#myCarousel').carousel({
    		interval: 2000
    		})
    	});
/* continue change images */
$('.carousel').carousel({
    pause: "none"
});


/*$('body').bind('touchmove', function(e){e.preventDefault()});*/