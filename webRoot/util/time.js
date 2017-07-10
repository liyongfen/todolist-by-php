function getTime(seperator,type){
	var date = new Date();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minnutes = date.getMinutes();
	var seconds = date.getSeconds();

	if(day <= 9 && day >= 1){
		day = "0" + day;
	}
	if(month <= 9 && month >= 1){
		month = "0" + month;
	}

	switch(type){
		case 0: 
			return (date.getFullYear() + seperator + month + seperator + day);	
		case 1: 
			return (date.getFullYear() + seperator + month + seperator + day 
				+ " " + hours + ":" + minnutes + ":" + seconds);
		default:
			return 0;			
	}
	
}