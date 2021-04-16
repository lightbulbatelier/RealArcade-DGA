// EDITOR, CONTROL YOUR SETTINGS HERE----------------------->

// TIP: divide by 1000 to get seconds ( 6 seconds currently gives enough time to play through the entire animated gif )
var rotateInterval = 6000;
// TIP: this fires the popups, set to false if not doing webgames... quotes are not needed
var usePopups = false;
// TIP: Don't use quotes inside these. Periods, dashes, uderscores, etc. are all ok.
//CC in variable names usually denotes special functionality for Comcast builds.

// default rotating image set
var rotateImage = 		[ 'replaceimages/RAC_taf.JPG',
						'replaceimages/smallgamepass.gif',
						'replaceimages/RAC_taf.JPG',
						'replaceimages/smallgamepass.gif' ];

// default rotating link						
var rotateTarget = 		[ 'http://realguide.real.com/friends/arcade.html?type=scpage&id=game_download/realonearcade&src=gameguide',
						'realarcade://navigate:home:gamepass',
						'http://realguide.real.com/friends/arcade.html?type=scpage&id=game_download/realonearcade&src=gameguide',
						'realarcade://navigate:home:gamepass' ];	

// comcast rotating image set
var rotateImageCC =		[ 'replaceimages/smallgamepass_comcast.gif',
						'replaceimages/smallgamepass_comcast.gif',
						'replaceimages/smallgamepass_comcast.gif',
						'replaceimages/smallgamepass_comcast.gif' ];

// roadrunner rotating image set						
var rotateImageRR =		[ 'replaceimages/smallgamepass_roadrunner.gif',
						'replaceimages/smallgamepass_roadrunner.gif',
						'replaceimages/smallgamepass_roadrunner.gif',
						'replaceimages/smallgamepass_roadrunner.gif' ];


// comcast rotating link						
var rotateTargetCC = 	[ 'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC',
						'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC',
						'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC',
						'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC' ];

// roadrunner rotating link						
var rotateTargetRR =	[ 'http://switchboard.real.com/arcade/feeds.html?tps=roadrun_&lang=EN&country=US&partner=1&action=activate_gp',
						'http://switchboard.real.com/arcade/feeds.html?tps=roadrun_&lang=EN&country=US&partner=1&action=activate_gp',
						'http://switchboard.real.com/arcade/feeds.html?tps=roadrun_&lang=EN&country=US&partner=1&action=activate_gp',
						'http://switchboard.real.com/arcade/feeds.html?tps=roadrun_&lang=EN&country=US&partner=1&action=activate_gp' ];					

// webgame popup rotating link						
var rotateTargetPOP = 	[ 'http://www.real.com/games/webgame_inserts/game_template.html?game=tr-elix&genre=puzzle',
						'http://www.real.com/games/webgame_inserts/game_template.html?game=tr-elix&genre=puzzle',
						'http://www.real.com/games/webgame_inserts/game_template.html?game=tr-elix&genre=puzzle',
						'http://www.real.com/games/webgame_inserts/game_template.html?game=tr-elix&genre=puzzle' ];

// default text						
var rotateText = 		[ 'Click Here',
						'Start your FREE trial now!',
					  	'Click Here',
					  	'Start your FREE trial now!' ];

var rotateTextCC = 		[ 'Comcast Arcade Special Offer',
						'Comcast Arcade Special Offer',
						'Comcast Arcade Special Offer',
						'Comcast Arcade Special Offer' ];
						
var rotateTextRR = 		[ 'Road Runner Special Offer',
						'Road Runner Special Offer',
						'Road Runner Special Offer',
						'Road Runner Special Offer' ];
/*
var rotateGPText =		[ 'More fun, less money',
						'Get a new game every month',
					  	'Save 30% - 65% off our prices',
					  	'Click to find out how it works!' ];
						
var rotateGPTextRR = 	[ 'More fun, less money',
						'Get a new game every month',
					  	'Save 30% - 75% off our prices',
					  	'Click to find out how it works!' ];

var rotateGPTextCC =	[ 'More fun, less money',
						'Get a new game every month',
					  	'Save 30% - 65% off our prices',
					  	'Click to find out how it works!' ];						

var rotateGPTarget = 	[ 'realarcade://navigate:home:gamepass',
						'realarcade://navigate:home:gamepass',
					  	'realarcade://navigate:home:gamepass',
					  	'realarcade://navigate:home:gamepass' ];
						
var rotateGPTargetRR = 	[ 'realarcade://navigate:home:gamepass',
						'realarcade://navigate:home:gamepass',
					  	'realarcade://navigate:home:gamepass',
					  	'realarcade://navigate:home:gamepass' ];

var rotateGPTargetRR = 	[ 'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC',
						'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC',
					  	'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC',
					  	'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC' ];
*/						
var clicker = 			[ 'http://www.real.com/games/webgame_inserts/game_template.html?game=tr-elix&genre=puzzle',
						'',
						'',
						'' ];			
						
var popup;
var imageCount = 0;
//var cover = new Array();

// the following function delays the firing till the page is loaded to avoid the dreaded error 8000000a in IE4
// two seconds should be enough here
function playslidesTimer()
{
	setTimeout( 'playslides()', 400 );
}

function playslides()
{
	var genericGPLink = 'realarcade://navigate:home:gamepass';
	var comcastGPLink = 'https://order.real.com/pt/order.html?ppath=gaprtnr041003a&country=US&language=EN&orca=03GF11&pcode=COMC';
	var roadrnrGPLink = 'http://switchboard.real.com/arcade/feeds.html?tps=roadrun_&lang=EN&country=US&partner=1&action=activate_gp';

	// ROTATING TEXT------------------->
	var text = rotateText;
	var cover = rotateImage;
	var target = rotateTarget;
	
	var timer;

	if ( strRNGCDistCode == 'W2C0' ) 
	{
		text = rotateTextCC;
		target = rotateTargetCC;
		cover = rotateImageCC;
	}
	else if( strRNGCDistCode == 'W510' )
	{
		text = rotateTextRR;//CCtext;
		target = rotateTargetRR;//CCtarget;
		cover = rotateImageRR;
	}
	  
	var covercount = 4; 
	//var slide = new Image();
	
	document.images.slide.src = cover[ imageCount ];
	document.all[ 'rotatingtext' ].innerHTML = text[ imageCount ];
	
	if( usePopups ) 
	{
		document.all[ 'rotatingtext' ].onclick = function() { window.location.href = target[ imageCount ]; window.open( clicker[ imageCount ],'popup1','scrollbars=no,left=20,top=20,width=740,height=660,noresize'); return false; }
		document.all[ 'rotatinglink' ].onclick = function() { window.location.href = target[ imageCount ]; window.open( clicker[ imageCount ],'popup1','scrollbars=no,left=20,top=20,width=740,height=660,noresize'); return false; }
		document.all[ 'rotatingtextlink' ].onclick = function() { window.location.href = target[ imageCount ]; window.open( clicker[ imageCount ],'popup1','scrollbars=no,left=20,top=20,width=740,height=660,noresize'); return false; }
	} 
	else 
	{
		document.all[ 'rotatingtext' ].href = target[ imageCount ];
		document.all[ 'rotatinglink' ].href = target[ imageCount ];
		document.all[ 'rotatingtextlink' ].href = target[ imageCount ];
	}
	
	imageCount++;
	
	if( imageCount > ( covercount - 1 ) ){ imageCount = 0; }
	
	timer = setTimeout( 'playslides()', rotateInterval );
}

function newImage( arg ) 
{
	if( document.images )
	{
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() 
{
	if( document.images && ( preloadFlag == true ) ) 
	{
		for( var i = 0; i < changeImages.arguments.length; i += 2 ) 
		{
			document[ changeImages.arguments[ i ] ].src = changeImages.arguments[ i+ 1 ];
		}
	}
}

var preloadFlag = false;
function preloadImages() 
{
	if( document.images ) 
	{
		butt_right_over = newImage( "images/butt_right_over.gif" );
		preloadFlag = true;
	}
}
