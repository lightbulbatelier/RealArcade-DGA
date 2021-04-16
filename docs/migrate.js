function migrationDist() {
	var distCode = RNGCIEPLUG.RealArcadeDistCode;	
	var forMigration = new Array()
	forMigration.push('W5C0');
	forMigration.push('WG60');
	forMigration.push('W4N0');
	
	for ( i in forMigration ) {
		if(forMigration[i] == distCode){
			return true;
		}	
	}	
}