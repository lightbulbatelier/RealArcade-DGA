// This function returns the currency code as USD, GBP, EUR, EUR_IT, EUR_NL, EUR_SE, or USD_BR based on Current DistCode. 
// GetCurrencyFromDist is dependent on the Active X control RNGCIEPLUG being created on the
// calling HTML page prior to this function's call. 

function GetCurrencyFromDist() 
{

	//UK Dist Codes 
	var DistCodesUK = new Array() 
	DistCodesUK.push('W330');
	DistCodesUK.push('W610');
	DistCodesUK.push('W6Z0');
	DistCodesUK.push('W710');
	DistCodesUK.push('W7F0');
	DistCodesUK.push('W7W0');
	DistCodesUK.push('W8H0');
	DistCodesUK.push('W8R0');
	DistCodesUK.push('W920');
	DistCodesUK.push('W980');
	DistCodesUK.push('W9C0');
	DistCodesUK.push('WA40');
	DistCodesUK.push('WA60');
	DistCodesUK.push('WA70');
	DistCodesUK.push('WA80');
	DistCodesUK.push('WA90');
	DistCodesUK.push('WAE0');
	DistCodesUK.push('WAF0');
	DistCodesUK.push('WAT0');
	DistCodesUK.push('WB30');
	DistCodesUK.push('WBN0');
	DistCodesUK.push('WBR0');
	DistCodesUK.push('WBX0');
	DistCodesUK.push('WCD0');
	DistCodesUK.push('WD10');
	DistCodesUK.push('WD90');
	DistCodesUK.push('WDY0');
	DistCodesUK.push('WDZ0');
	DistCodesUK.push('WE10');
	DistCodesUK.push('WE20');
	DistCodesUK.push('WE50');
	DistCodesUK.push('WE70');
	DistCodesUK.push('WEL0');
	DistCodesUK.push('WEP0');
	DistCodesUK.push('WF80');
	
	//EU DistCodes
	var DistCodesEU = new Array()
	DistCodesEU.push('W5T0');
	DistCodesEU.push('WB60');
	DistCodesEU.push('WBI0');
	DistCodesEU.push('WBS0');
	DistCodesEU.push('WC80');
	DistCodesEU.push('WCK0');
	DistCodesEU.push('WCS0');
	DistCodesEU.push('WDT0');
	DistCodesEU.push('WEE0');
	DistCodesEU.push('WEK0');
	DistCodesEU.push('WF30');
	DistCodesEU.push('WFK0');
	
	//SE DistCodes
	var DistCodesSE = new Array()
	DistCodesSE.push('W1J0');
	DistCodesSE.push('W7Y0');
	DistCodesSE.push('WBM0');
	DistCodesSE.push('WER0');
	DistCodesSE.push('W690');
	DistCodesSE.push('WCC0');
	DistCodesSE.push('WEJ0');
	DistCodesSE.push('WF70');
	DistCodesSE.push('W8B0');
	
	//IT DistCodes
	var DistCodesIT = new Array()
	DistCodesIT.push('W1F0');
	DistCodesIT.push('W480');
	DistCodesIT.push('W640');
	DistCodesIT.push('W7V0');
	DistCodesIT.push('W8A0');
	DistCodesIT.push('WB20');
	DistCodesIT.push('WBD0');
	DistCodesIT.push('WBJ0');
	DistCodesIT.push('WBT0');
	DistCodesIT.push('WC90');
	DistCodesIT.push('WDD0');
	DistCodesIT.push('WDN0');
	DistCodesIT.push('WEF0');
	DistCodesIT.push('WET0');
	DistCodesIT.push('WF40');

	//NL DistCodes
	var DistCodesNL = new Array()
	DistCodesNL.push('W1H0');
	DistCodesNL.push('W680');
	DistCodesNL.push('W7Z0');
	DistCodesNL.push('W8C0');
	DistCodesNL.push('WA20');
	DistCodesNL.push('WB40');
	DistCodesNL.push('WB90');
	DistCodesNL.push('WBE0');
	DistCodesNL.push('WBL0');
	DistCodesNL.push('WCB0');
	DistCodesNL.push('WCE0');
	DistCodesNL.push('WDP0');
	DistCodesNL.push('WE60');
	DistCodesNL.push('WE90');
	DistCodesNL.push('WEA0');
	DistCodesNL.push('WEB0');
	DistCodesNL.push('WEH0');
	DistCodesNL.push('WES0');
	DistCodesNL.push('WF60');
	
	//BR DistCodes
	var DistCodesBR = new Array()
	DistCodesBR.push('W1B0');
	DistCodesBR.push('W6A0');
	DistCodesBR.push('W8D0');
	DistCodesBR.push('WB10');
	DistCodesBR.push('WBH0');
	DistCodesBR.push('WBU0');
	DistCodesBR.push('WC70');
	DistCodesBR.push('WDE0');
	DistCodesBR.push('WDM0');
	DistCodesBR.push('WED0');
	DistCodesBR.push('WF20');
	
	//AP DistCodes
	var DistCodesAP = new Array()
	DistCodesAP.push('W2W0');
	DistCodesAP.push('W6C0');
	DistCodesAP.push('WB50');
	DistCodesAP.push('WBG0');
	DistCodesAP.push('WC60');
	DistCodesAP.push('WEC0');
	DistCodesAP.push('WF10');
	
	var dc = RNGCIEPLUG.RealArcadeDistCode;

	for (i in DistCodesUK) {
		if (DistCodesUK[i] == dc) {
			return 'GBP';
		}
	}
	for (i in DistCodesEU) {
		if (DistCodesEU[i] == dc) {
			return 'EUR';
		}
	}
	for (i in DistCodesIT) {
		if (DistCodesIT[i] == dc) {
			return 'EUR_IT';
		}
	}
	for (i in DistCodesNL) {
		if (DistCodesNL[i] == dc) {
			return 'EUR_NL';
		}
	}
	for (i in DistCodesSE) {
		if (DistCodesSE[i] == dc) {
			return 'EUR_SE';
		}
	}
	for (i in DistCodesBR) {
		if (DistCodesBR[i] == dc) {
			return 'USD_BR';
		}
	}
	for (i in DistCodesAP) {
		if (DistCodesAP[i] == dc) {
			return 'USD_AP';
		}
	}
	return 'USD';
} 


		


	
	