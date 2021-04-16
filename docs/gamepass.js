var strRNGCDistCode = RNGCIEPLUG.RealArcadeDistCode;
var strSRC= RNGCIEPLUG.RealArcadeSRC;
var iDayInMilliseconds = 86400000;

var strLanguage = "";

function processLanguage()
{
	if( strRNGCDistCode == 'W330' || strRNGCDistCode == 'W2X0' || strRNGCDistCode == 'W6R0' || strRNGCDistCode == 'W6Z0' || strRNGCDistCode == 'W7F0' || 
		strRNGCDistCode == 'W710' || strRNGCDistCode == 'W7W0' || strRNGCDistCode == 'W8H0' || strRNGCDistCode == 'W8R0' || strRNGCDistCode == 'W920' || 
		strRNGCDistCode == 'WB30' || strRNGCDistCode == 'W980' || strRNGCDistCode == 'WA40' || strRNGCDistCode == 'WAE0' || strRNGCDistCode == 'WAF0' || 
		strRNGCDistCode == 'WAT0' || strRNGCDistCode == 'W610' || strRNGCDistCode == 'W9C0' || strRNGCDistCode == 'WA60' || strRNGCDistCode == 'WA70' || 
		strRNGCDistCode == 'WA80' || strRNGCDistCode == 'WA90' || strRNGCDistCode == 'WBR0' || strRNGCDistCode == 'W710' || strRNGCDistCode == 'WD10' ||
		strRNGCDistCode == 'WE20' || strRNGCDistCode == 'WE10' || strRNGCDistCode == 'WDY0' ||  strRNGCDistCode == 'WDZ0' )
		{ strLanguage = "gbp"; } //UK/GB
	
	else if( strRNGCDistCode == 'W5T0' || strRNGCDistCode == 'W7D0' || strRNGCDistCode == 'WB90' || strRNGCDistCode == 'WA20' || strRNGCDistCode == 'WB40' || 
		strRNGCDistCode == 'W1H0' || strRNGCDistCode == 'W680' || strRNGCDistCode == 'W7Z0' || strRNGCDistCode == 'W8C0' || strRNGCDistCode == 'WBE0' || 
		strRNGCDistCode == 'W1F0' || strRNGCDistCode == 'W480' || strRNGCDistCode == 'W640' || strRNGCDistCode == 'W7V0' || strRNGCDistCode == 'W8A0' || 
		strRNGCDistCode == 'WB20' || strRNGCDistCode == 'WBD0' || strRNGCDistCode == 'WCK0' || strRNGCDistCode == 'WCE0'  || strRNGCDistCode == 'WCS0' )
		{ strLanguage = "eu"; }

	else if( strRNGCDistCode == 'W510' ){ strLanguage = "rr"; }	
	
	//strLanguage = "rr";	
}

function changeImages() 
{
	if( document.images ) 
	{
		for( var i = 0; i < changeImages.arguments.length; i += 2 ) 
		{
			document[ changeImages.arguments[ i ] ].src = changeImages.arguments[ i+ 1 ];
		}
	}
}

function launchGamePass()
{
	var strLauchGamePassText = "gamepassLinkTop";
	
	if( strLanguage == "rr" )// RR
	{
		strLauchGamePassText = "gamepassLinkTopRR";
	} 

	appendDistcode( strLauchGamePassText );
}

function launchGamePassInfo()
{
	var strGamePassTrialInfoLink = "gamepass_2game_free_trial_popup_usd.htm";

	if(strRNGCDistCode == 'W510')// RR
	{
		strGamePassTrialInfoLink = "gamepass_free_trial_popup_rr.htm";
	}	


	if( strLanguage == "eu" )// EU
	{
		strGamePassTrialInfoLink = "gamepass_2game_free_trial_popup_eu.htm";
	}
	else if( strLanguage == "gbp" )// GBP
	{
		strGamePassTrialInfoLink = "gamepass_2game_free_trial_popup_gbp.htm";
	}
	
	window.open( strGamePassTrialInfoLink,'cd_popup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=620,height=500,top=55,left=55');
}

function priceSwap2fg () {
	var freeGameValue = document.getElementById('freeGameValue');
	var bonusGameValue = document.getElementById('bonusGameValue');
	var newFreeGameValue = document.getElementById('newFreeGameValue');
	var billOverMontlyGP = document.getElementById('billOverMontlyGP');
	
	if( strLanguage == "eu" )// EU
	{
		freeGameValue.innerHTML = "20 &#8364;";
		bonusGameValue.innerHTML = "20 &#8364;";
		newFreeGameValue.innerHTML = "20 &#8364;";
		billOverMontlyGP.innerHTML = "9,95 &#8364;";
	} else if ( strLanguage == "gbp" )// GBP
	{
		freeGameValue.innerHTML = "&#163;13";
		bonusGameValue.innerHTML = "&#163;13";
		newFreeGameValue.innerHTML = "&#163;13";
		billOverMontlyGP.innerHTML = "&#163;6.50";
	} else {
		document.getElementById('greatdealsmodule').style.display = "block";
	}	
}

function swapFgoForNonUS() 
{
	
	//This changes the Free Game Offer to Super Collapse II instead of Mah Jong Medley for non-US EN offline RAC experiences (UK and NL) 
	if(strLanguage == "gbp" || strLanguage == "eu") { 
	 	document.getElementById("fgoGameName").innerHTML = "Super Collapse! II";
		document.getElementById("fgoBackSm").style.backgroundImage ='url("images/gp2fgbacksmgames_scii.jpg")';
	}
}

function processReplacement()
{
	var strFooterDescription = "You will be billed $9.99 per month. You may cancel your membership at any time.";
	var strMonthlyCreditTitle = "To Use Your Monthly Credit and $5 Discounts";
	var strMonthlyCreditText = "First, choose the game you want to buy. Then, click the &quot;Buy Full Version Online&quot; button on the game page and log in to your account. When you log in, you'll automatically be recognized as a GamePass member and have the choice to use your GamePass Credit or the $5 discount - it&#8217;s that easy.";
	var strLinkInfoTitle = "For a limited time only, get your first month free!";
	var strLinkInfoText = "No commitments. Cancel anytime.";
	var strGPLogoText = "Members save up to 60% every month!";
	var strLinkInfoExtra = "";
	var	strAppend01 = "";
	var	strAppend02 = "";
	var	strAppend03 = "";
	
	if( strLanguage == "eu" )// EU
	{
		strFooterDescription = "You will be billed 9,95 &#8364; per month. You may cancel your membership at any time.";
		strMonthlyCreditTitle = "To Use Your Monthly Credit and 5 &#8364; Discounts";
		strMonthlyCreditText = "First, choose the game you want to buy. Then, click the &quot;Buy Full Version Online&quot; button on the game page and log in to your account. When you log in, you'll automatically be recognized as a GamePass member and have the choice to use your GamePass Credit or the 5 &#8364; discount - it&#8217;s that easy.";
		strGPLogoText = "Members save up to 65% every month!";
		strAppend01 = strAppend03 = "_eu";
		
		greatdealsmodule.style.display = "none";
		document.getElementById("container01").src = "images/container01_eu.gif";	
		document.getElementById("container03").src = "images/container03_eu.gif";
	}
	else if( strLanguage == "gbp" )// GBP
	{
		strFooterDescription = "You will be billed &#163;6.50 per month. You may cancel your membership at any time.";
		strMonthlyCreditTitle = "To Use Your Monthly Credit and &#163;3 Discounts";
		strMonthlyCreditText = "First, choose the game you want to buy. Then, click the &quot;Buy Full Version Online&quot; button on the game page and log in to your account. When you log in, you'll automatically be recognized as a GamePass member and have the choice to use your GamePass Credit or the &#163;3 discount - it&#8217;s that easy.";
		strGPLogoText = "Members save up to 55% every month!";
		strAppend01 = strAppend02 = strAppend03 = "_gb";
		
		greatdealsmodule.style.display = "none";
		document.getElementById("container01").src = "images/container01_gb.gif";	
		document.getElementById("container03").src = "images/container03_gb.gif";
	}
	else if( strLanguage == "rr" )// RR
	{
		strFooterDescription = "You will be billed $4.95 per month. You may cancel your membership at any time.";
		strLinkInfoTitle = "Hey Road Runner Customer!";
		strLinkInfoText = "As a Road Runner High-Speed Internet subscriber, you are entitled to a special discount on GamePass from RealArcade. You can join GamePass for just $4.95/month.  That's a savings of over 28% off the regular price for GamePass, and lets you save over 75% on all games in RoadRunnerArcade.  Plus, your first 30 days are FREE!  Just click Join Now to sign up for your free trial.";
		strLinkInfoExtra = "(All for a low price of only $4.95/month*)";
		strGPLogoText = "Members save up to 75% every month!";
		
		strAppend1 = "_rr";
		
		greatdealsmodule.style.display = "none";
	}
	
	billinginfoprice.innerHTML = strFooterDescription;

}

function processGPStatus()
{
	var oMem = new oGPInfo();
	
	if( !oMem.MemActive ) 
	{
		gamepassactive.style.display = "block";
		
		if ( getCookie( 'gpOnlyMessage' ) == 'show' ) 
		{
			setCookie( 'gpOnlyMessage', 'show', 1 );
			//document.all['divGreatDeals'].style.display = "block";
			delCookie('gpOnlyMessage');
		}
	}
}	
var bGamePassMember = false;

// need to fix this and make text xml driven
function processCurrentGamePassStatus()  
{
	var strExpDate = "";
	var strNextAvail = "";
	
	var strActive = document.all.Active.value.toUpperCase();
	var strMemberName = document.all.FN.value;
	
	var dExpDate = document.all.ExpDate.value;// new Date( document.all.ExpDate.value );
	if( dExpDate ){ dExpDate = new Date( dExpDate ); }
	
	var dNextAvail = document.all.Next_avail.value;
	if( dNextAvail ){ dNextAvail  = new Date( dNextAvail ); }
	
	var iCredits = document.all.Cred.value;
	if( iCredits == 'None' ){ iCredits = 0; }
	
	var bCookie = false;
	var bStatusActive = false;

	// check to see if they have a gamepass cookie or any values in the status cookie
	if( strActive )
	{ 
		bCookie = true; 

		// process their current account status ACTIVE, STOPREQ		
		if( strActive == 'ACTIVE' ){ bStatusActive = true; }
		if( strActive == 'STOPREQ' ){ bStatusActive = false; }
		
		//if( strActive == 'CANCELLED' ){ bStatusActive == true; } 
	}
	
	if( !bCookie )
	{ 
		//document.all.welcome.innerHTML = 'Welcome to RealArcade!';
		//bad code to create a special case for rr. 
		document.all.cred_avail.innerHTML = 'Are you a GamePass Member?';
		//document.all.cred_avail_rr.innerHTML = 'Are you a GamePass Member?';
		document.all.cred_exp.innerHTML = '<a href="javascript:void gamepassSignIn()" class=tinybody>Sign In</a> to personalize your Game Guide';
		//document.all.cred_exp_rr.innerHTML = '<a href="javascript:void gamepassSignIn()" class=tinybody>Sign In</a> to personalize your Game Guide';
		//gamepassactive.style.display = "block";
		
		document.getElementById('gpTrialInfo').style.display = "block";
		document.getElementById('gpBenefitsInfo').className = "footBackOn";
		return; 
	} else {
		document.getElementById('gpHeader').style.display = "block";
		document.getElementById('gpBenefitsInfo').className = "footBackOff";	
	}
  
	var strMonth = [ "Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec" ];

	// check expiration times
	if( dExpDate && dNextAvail )
	{
		//if exp=next_avail, set exp to 30 days, and next_avail to 31 days
		if( dExpDate == dNextAvail )
		{
			dExpDate.setTime( dExpDate.getTime() + ( 30 * iDayInMilliseconds ) );
			dNextAvail.setTime( dNextAvail.getTime() + ( 31 * iDayInMilliseconds ) );
		}
		
		//if credit=1, their expiration is a month later than 30 days. 
		//as per credit rollover 3/07
		if(document.all.Cred.value == 1) { 
			dExpDate.setMonth(dExpDate.getMonth()+1);
		}
		

		strExpDate = strMonth[ dExpDate.getMonth() ] + ' ' + dExpDate.getDate() + ',  ' + dExpDate.getYear();
		strNextAvail = strMonth[ dNextAvail.getMonth() ] + ' ' + dNextAvail.getDate() + ',  ' + dNextAvail.getYear();
	}

	// now process the data
	document.all.mem_stat.innerHTML = 'GamePass Membership: <span class="minibodybld">' + strMemberName + '</span>';
	//document.all.mem_stat_rr.innerHTML = 'GamePass Membership: <span class="minibodybld">' + strMemberName + '</span>';
	
	if( bStatusActive )
	{
		document.all.cred_avail.innerHTML = 'Game Credit Available: <span class="minibodybld">' + iCredits + '</span>';
		//document.all.cred_avail_rr.innerHTML = 'Game Credit Available: <span class="minibodybld">' + iCredits + '</span>';
		if( iCredits > 0 )
		{
			document.all.cred_exp.innerHTML = 'Game Credit Expires: <span class="minibodybld">' + strExpDate + '</span>';
			//document.all.cred_exp_rr.innerHTML = 'Game Credit Expires: <span class="minibodybld">' + strExpDate + '</span>';
		}
		else
		{
			document.all.cred_exp.innerHTML = 'Next Credit Available: <span class="minibodybld">' + strNextAvail + '</span>';
			//document.all.cred_exp_rr.innerHTML = 'Next Credit Available: <span class="minibodybld">' + strNextAvail + '</span>';
		}
	}
	else
	{
		document.all.cred_avail.innerHTML = 'Game Credit Available: <span class="minibodybld">' + iCredits + '</span>';
		//document.all.cred_avail_rr.innerHTML = 'Game Credit Available: <span class="minibodybld">' + iCredits + '</span>';	
		if( iCredits > 0 )
		{
			document.all.cred_exp.innerHTML = 'Game Credit Expires: <span class="minibodybld">' + strExpDate + '</span>';
			//document.all.cred_exp_rr.innerHTML = 'Game Credit Expires: <span class="minibodybld">' + strExpDate + '</span>';
		}
		else
		{
			
			document.all.cred_exp.innerHTML = 'Your GamePass Expires: <span class="minibodybld" align=>' + strExpDate + '</span>';
			//document.all.cred_exp_rr.innerHTML = 'Your GamePass Expires: <span class="minibodybld" align=>' + strExpDate + '</span>';
		}
	}
}


var oWin, iTimer;
function gamepassSignIn()
{
	oWin = window.open( "https://order.real.com/pt/order.html?ppath=gamember102403a&language=EN&country=US&src=" + strSRC, "_blank","width=400,height=300,resizable=yes,scrollbars=no" );

	iTimer = window.setInterval( 'setWindowMonitor( oWin )',250 );
}

// function to monitor when the gamepass window is closed and refresh the doc
function setWindowMonitor( obj )
{
	window.onerror = function (){ window.document.location.reload();return true; }
	
	if( obj.closed ) 
	{
		window.document.location.reload();
		window.clearInterval( winTimer );
	}
}