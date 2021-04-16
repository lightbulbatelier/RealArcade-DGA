function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'':(v='hide')?'none':v; }
    obj.display=v; }
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
  }

function popWin(url, w, h) {
		var madURL = url;
		var x, y, winStr;
		
		x=0; y=0;
	
		self.name="opener";
		winStr = "height="+(h+13)+",width="+w+",screenX="+x+",left="+x+",screenY="+y+",top="+y+",channelmode=0,dependent=0,directories=0,fullscreen=0,location=0,menubar=0,resizable=0,scrollbars=0,status=0,toolbar=0";
		
		lilBaby = window.open(madURL, "_blank", winStr);
}

function changeGame(game)
					{
					
						var newwin=window.open("http://realguide.real.com/games/crossword/?pop=game&puzz="+game,"newwin","width=600,height=550,scrollbars,resizable,location");
					}
					

function checkUpdate(expiration)
			{
			var now = new Date()
			var nextissue = new Date(expiration);
			var days = Math.floor(((nextissue.getTime() - now.getTime()) / (1000 * 24 * 60 * 60)) + 1);
			if (days <= 0) document.write("<table cellspacing=0 cellpadding=0 border=0><tr><td><img src=\"images\/updatenewsflasher.gif\" width=21 height=22 border=0><\/td><td class=\"updatenews\"><a href=\"realarcade:\//updatecontent\" class=\"updatenewslink\">Update Game News<\/a><\/td><td><img src=\"images\/updatenews_buttend.gif\" width=12 height=22 border=0><\/td><\/tr><\/table>");
			}

function prepWin(gameName,roomId, x, y) {
url = "http://www.solware.com/games/real/games.html?" + "game=" + gameName + "&room=" + roomId;
	feat =	"width=" + x + ",height=" + y;
	if(parseInt(navigator.appVersion) > 3)
	feat +=	",screenX=" + (screen.width/2-240) +
	",left=" + (screen.width/2-240) +
	",screenY=" + (screen.height/2-y/2) +
	",top=" + (screen.height/2-y/2);
	else
	feat += ",screenX=0,left=0,screenY=0,top=0"
	feat += ",toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,copyhistory=0";
	window.open(url, new String((new Date()).getTime()), feat);
}


function winPop(game, x, y) {
	url = "http://real.gamehouse.com/real/gamefrme.jsp?game=" + game;
	feat =	"width=" + x + ",height=" + y;
	if(parseInt(navigator.appVersion) > 3)
	feat +=	",screenX=" + (screen.width/2-240) +
	",left=" + (screen.width/2-240) +
	",screenY=" + (screen.height/2-y/2) +
	",top=" + (screen.height/2-y/2);
	else
	feat += ",screenX=0,left=0,screenY=0,top=0"
	feat += ",toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,copyhistory=0";
	window.open(url, new String((new Date()).getTime()), feat);
}

