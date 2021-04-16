
var plugin = 0;
var mynumber = (new Date()).getSeconds() % 20;
var adnumber = 1;
var adurl = "http://ad.doubleclick.net/clk;3041594;5889596;b?http://mds.centrport.net/mdsefc?a20250041;MIHC101C2111P36468B36469S0;B36469;1";
if (mynumber <= 2) {adnumber = 2; adurl = "http://ad.doubleclick.net/clk;3063290;5889596;y?http://www.nvidia.com";}
else if (mynumber <= 5) {adnumber = 3; adurl = "http://promotions.real.com/tracker/clickthroughs/casinonet176x132.rxml";}

function realarcad1(){
	window.open(adurl);
}

function insertad(){
	if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
		if (navigator.plugins && navigator.plugins["Shockwave Flash"])
			plugin = 1;
	}
	else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
	   && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)) {
		document.write('<SCRIPT LANGUAGE=VBScript\> \n');
		document.write('on error resume next \n');
		document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4")))\n');
		document.write('if ( plugin <= 0 ) then plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5")))\n');
		document.write('</SCRIPT\> \n');
	}
	if ( plugin ) {
		document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
		document.write('  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,0,0" ');
		document.write(' ID=ad WIDTH=176 HEIGHT=132>');
		document.write(' <PARAM NAME=movie VALUE="replaceimages/adflash'+adnumber+'.swf"> <PARAM NAME=quality VALUE=high> <PARAM NAME=scale VALUE=exactfit>  '); 
		document.write(' <EMBED src="replaceimages/adflash'+adnumber+'.swf" quality=high scale=exactfit ');
		document.write(' swLiveConnect=FALSE WIDTH=176 HEIGHT=132');
		document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
		document.write(' </EMBED>');
		document.write(' </OBJECT>');
	} else {
		document.write('<IMG SRC="replaceimages/addefault.gif" WIDTH=1 HEIGHT=1 BORDER=0>');
	}
}

