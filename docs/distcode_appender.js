/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*  what: code to query and insert Distcode into the URL as rsrc 
*  arguments: 
*  requirements: RNGCIEPLUG <object> tag in html document 
*  author: Matthew Herrebout, RealArcade; 11/14/02 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 

	var undefined;
	var strRNGCDistCode = RNGCIEPLUG.RealArcadeDistCode;
	var strRNGCSRC = RNGCIEPLUG.RealArcadeSRC;
	var strRNGCTPS = RNGCIEPLUG.RealArcadeTPS;

	var ctry='US';
	var lang='EN';
	
	// country setting 8 in rac is mapped to united kingdom
	// country setting 6 in rac is mapped to sweden
	
	if( strRNGCSRC == undefined ){ strRNGCSRC = "oldrac"; }
	
	if( strRNGCDistCode == 'W330' || strRNGCDistCode == 'W2X0' || strRNGCDistCode == 'W6R0' || strRNGCDistCode == 'W6Z0' || strRNGCDistCode == 'W7F0' || 
		strRNGCDistCode == 'W710' || strRNGCDistCode == 'W7W0' || strRNGCDistCode == 'W8H0' || strRNGCDistCode == 'W8R0' || strRNGCDistCode == 'W920' || 
		strRNGCDistCode == 'WB30' || strRNGCDistCode == 'W980' || strRNGCDistCode == 'WA40' || strRNGCDistCode == 'WAE0' || strRNGCDistCode == 'WAF0' || 
		strRNGCDistCode == 'WAT0' || strRNGCDistCode == 'W610' || strRNGCDistCode == 'W9C0' || strRNGCDistCode == 'WA60' || strRNGCDistCode == 'WA70' || 
		strRNGCDistCode == 'WA80' || strRNGCDistCode == 'WA90' || strRNGCDistCode == 'WBR0' || strRNGCDistCode == 'W710' || strRNGCDistCode == 'WD10' ||
		strRNGCDistCode == 'WE20' || strRNGCDistCode == 'WE10' || strRNGCDistCode == 'WDY0' || strRNGCDistCode == 'WDZ0' )//UK/GB
	{
		ctry='8';
		lang='EN';
	}	
	else if( strRNGCDistCode == 'W5T0' || strRNGCDistCode == 'W7D0' || strRNGCDistCode == 'WB90' || strRNGCDistCode == 'WA20' || strRNGCDistCode == 'WB40' || 
		strRNGCDistCode == 'W1H0' || strRNGCDistCode == 'W680' || strRNGCDistCode == 'W7Z0' || strRNGCDistCode == 'W8C0' || strRNGCDistCode == 'WBE0' || 
		strRNGCDistCode == 'W1F0' || strRNGCDistCode == 'W480' || strRNGCDistCode == 'W640' || strRNGCDistCode == 'W7V0' || strRNGCDistCode == 'W8A0' || 
		strRNGCDistCode == 'WB20' || strRNGCDistCode == 'WBD0' || strRNGCDistCode == 'WCK0' || strRNGCDistCode == 'WCE0'  || strRNGCDistCode == 'WCS0' )//eu
	{
		ctry='6';
		lang='EN';
	}

	//for non-US EN versions of RAC super collapse! preserve the old SCII offer and mcode. 
	strFgoGameId = "mahjongmedley";
	strMcode = "MM2FG";
	if (ctry != "US") 
	{ 
		strFgoGameId = "supercollapseii"; 
		strMcode = "IC2FG";
	}

	//var baseStr = 'http://switchboard.real.com/arcade/feeds.html?tps=roadrun_&lang=EN&country=US&partner=1&action=activate_gp';
	//gamepass.html and gamepass_popup.html - specific vars...
	var baseStr = "https://order.real.com/pt/order.html?ppath=gaarcpl042502a&tps="+strRNGCTPS+"&pcode="+strRNGCTPS+"&country="+ctry+"&language="+lang+"&gameid=" + strFgoGameId + "&priceid=4&opage=GPFT&ractype=oldclient&src=ARCADE,gppage_," + strMcode + "," + strRNGCSRC + ",";
	var targetTopNoDC = baseStr + "jointop";
	var targetBottomNoDC = baseStr + "joinbottom";
	var targetInfoPageNoDC = baseStr + "infopage";
	var targetTop =	baseStr + "jointop&rsrc=" + strRNGCDistCode;
	var targetBottom = baseStr + "joinbottom&rsrc=" + strRNGCDistCode;
	var targetInfoPage = baseStr + "infopage&rsrc=" + strRNGCDistCode;
	
	//gameguide firstrun - specific vars...
	var baseGgStr1 = "https://order.real.com/pt/order.html?ppath=gaarcpl042502a&country="+ctry+"&tps="+strRNGCTPS+"&pcode="+strRNGCTPS+"&language="+lang+"&gameid=" + strFgoGameId + "&priceid=4&opage=GPFT&ractype=oldclient&src=ARCADE-FIRSTRUN," + strMcode + "," + strRNGCSRC + "&rsrc=";
	var ggStr1 = baseGgStr1 + strRNGCDistCode;
	
	//gameguide secondrun - specific vars...
	var baseGgStr2 = "https://order.real.com/pt/order.html?ppath=gaarcpl042502a&country="+ctry+"&tps="+strRNGCTPS+"&pcode="+strRNGCTPS+"&language="+lang+"&gameid=" + strFgoGameId + "&priceid=4&opage=GPFT&ractype=oldclient&src=ARCADE-SECONDRUN," + strMcode + "," + strRNGCSRC + "&rsrc=";
	var ggStr2 = baseGgStr2 + strRNGCDistCode;
	
	//gameguide first run game
	
	
	//run the gamepass ad from the 2nd run on the daily in place of the featured games
	var baseGgDailyUpsell = "https://order.real.com/pt/order.html?ppath=gaarcpl042502a&country="+ctry+"&tps="+strRNGCTPS+"&pcode="+strRNGCTPS+"&language="+lang+"&gameid=" + strFgoGameId + "&priceid=4&opage=GPFT&ractype=oldclient&src=ARCADE,rac2freegame," + strRNGCSRC + "&rsrc=";


	//function that puts it all together
	function appendDistcode(origin) {
		if (strRNGCDistCode == undefined)
		{
			// it's RAC, pre version 1.2.0.127
			switch(origin)
			{
			case "ggFirstRun":
				window.location.href=baseGgStr1; 
				break;
			case "ggSecondRun":				
				window.location.href=baseGgStr2; 
				break;
			case "ggDailyUpsell":				
				window.location.href=baseGgDailyUpsell; 
				break;
			case "gamepassLinkTop": 		
				window.location.href=targetTopNoDC; 
				break;
		   	case "gamepassLinkBottom": 	
				window.location.href=targetBottomNoDC; 
				break;
		   	case "gamepassPop": 				
				window.opener.location.href=targetInfoPageNoDC; 
				window.close(); 
				break;
			case "HeadlinerFirstRun":	
				window.location.href= baseGgStr3; 
				break;
		   	case "HeadlinerSecondRun": 	
				window.location.href=baseGgStr4; 
				break;		
			case "gamepassLinkTopRR":
				window.location.href=baseGGStr5;
				break;
			case "gamepassTrialPop":
				window.opener.location.href=baseGgStr1;
				break;
		  	default: 								
				window.opener.location.href=targetInfoPageNoDC; 
				window.close(); 
				break;
			} 
		} else 
		{ 
			// we're getting a discode value, so let's pass it along
			switch(origin)
			{	
			case "ggFirstRun":				
				window.location.href=ggStr1; 
				break;
			case "ggSecondRun":				
				window.location.href=ggStr2; 
				break;
			case "ggDailyUpsell":				
				window.location.href=baseGgDailyUpsell; 
				break;
			case "gamepassLinkTop":			
				window.location.href=targetTop; 
				break;
			case "gamepassLinkBottom":		
				window.location.href=targetBottom; 
				break;
			case "gamepassPop":				
				window.opener.location.href=targetInfoPage; 
				window.close(); 
				break;
			case "HeadlinerFirstRun":		
				window.location.href = ggStr3; 
				break;
			case "HeadlinerSecondRun": 		
				window.location.href = ggStr4; 
				break;			   
			case "gamepassLinkTopRR":
				window.location.href=ggStr5;
				break;
			case "gamepassTrialPop":
				window.location.href=baseGgStr1;
				break;
		  	default:								
			  	window.opener.location.href=targetInfoPage; 
				window.close(); 
				break;
			} 
		}
	}