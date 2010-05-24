// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'OpenCamp',
    titleImage:'images/OpenCampLogoHeader.png',
    fullscreen:1,
    backgroundColor:'#fff'
});

//add buttons
var eventBtn = Titanium.UI.createButton({
	//backgroundImage:"images/arcade-button.png",
	//backgroundSelectedImage:"images/arcade-button-over.png",
	top:10,
	left:10,
	title:"Events",
	width:145,
	height:110
});

var mapBtn = Titanium.UI.createButton({
	//backgroundImage:"images/arcade-button.png",
	//backgroundSelectedImage:"images/arcade-button-over.png",
	top:10,
	left:165,
	title:"Maps",
	width:145,
	height:110
});

var socialBtn = Titanium.UI.createButton({
	top:130,
	left:10,
	title:"Social",
	width:145,
	height:110
});

var speakersBtn = Titanium.UI.createButton({
	top:130,
	left:165,
	title:"Speakers",
	width:145,
	height:110
});

var miscBtn = Titanium.UI.createButton({
	top:250,
	left:10,
	title:"Misc",
	width:145,
	height:110
});

var aboutBtn = Titanium.UI.createButton({
	top:250,
	left:165,
	title:"About",
	width:145,
	height:110
});


eventBtn.addEventListener("click", function()
{
	var win = Titanium.UI.createWindow({
		url:"events.js",
		backgroundColor:'#3366990',		
		title:"OpenCamp Events"
	});
	var closeBtn = Titanium.UI.createButton({
	     title:'Close',
	     style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	win.open();
	//Titanium.UI.currentTab.open(win,{animated:true});
});

mapBtn.addEventListener("click", function(e){
	var win = Titanium.UI.createWindow({
		url:"maps.js",
		title:"OpenCamp Maps"
	});
	var closeBtn = Titanium.UI.createButton({
	   title:'Close',
	   style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	win.open();
});


socialBtn.addEventListener("click", function(e){
	alert("OpenCamp Social Media");
});

speakersBtn.addEventListener("click", function(e){
	alert("OpenCamp Speakers");
});

miscBtn.addEventListener("click", function(e){
	alert("OpenCamp Miscellaneous");
});

aboutBtn.addEventListener("click", function(e){
	alert("About OpenCamp app");
});


win1.add(eventBtn);
win1.add(mapBtn);
win1.add(socialBtn);
win1.add(speakersBtn);
win1.add(miscBtn);
win1.add(aboutBtn);

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'OpenCamp',
    window:win1
});

win1.hideTabBar();
/*
var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Welcome to OpenCamp 2010',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);
*/

//  add tabs
tabGroup.addTab(tab1);  
//tabGroup.addTab(tab2);  




// open tab group
tabGroup.open();


/*var view = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'red',
   width:50,
   height:50
});
win1.add(view);
*/

var win = Titanium.UI.createWindow({
        height:30,
        width:250,
        bottom:110,
        borderRadius:10
});


var view = Titanium.UI.createView({
        backgroundColor:'#000',
        opacity:0.7,
        height:30,
        width:250,
        borderRadius:10
});

var label = Titanium.UI.createLabel({
        color:'#fff',
        font:{fontSize:13},
        textAlign:'center',
        width:'auto',
        height:'auto'
});
win.add(view);
win.add(label);

Titanium.App.addEventListener('event_one', function(e)
{
        label.text = 'base_ui.js: event one, array length = ' + e.data.length;
        win.open();
        setTimeout(function()
        {
                win.close({opacity:0,duration:500});
        },1000);
});

Titanium.App.addEventListener('event_two', function(e)
{
        label.text = 'base_ui.js: event two, name = ' + e.name;
        win.open();
        setTimeout(function()
        {
                win.close({opacity:0,duration:500});
        },1000);
        
});
