
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
		document.write('<IMG SRC="replaceimages/addefault.gif" WIDTH=1 HEIGHT=1 BORDER=0>');
	} else {
		document.write('<IMG SRC="replaceimages/addefault.gif" WIDTH=1 HEIGHT=1 BORDER=0>');
	}
}

