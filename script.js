var counter;

counter=setInterval(function(){
	var date, Year, countYear, tmp, Msec, countDay, countHour, countMin, countSec;
	date = new Date();
	Year = date.getFullYear();
	countYear = new Date( 2016 , 8 , 19 ,00,00,00);
	tmp=countYear;
	Msec = countYear.getTime() - date.getTime();

	if(Msec<=1000){
		clearInterval(counter);
	}
	countDay = Math.floor ( Msec / (1000*60*60*24) );
	Msec -= ( countDay * (1000*60*60*24) );
	
	countHour = Math.floor ( Msec / (1000*60*60) );
	Msec -= ( countHour * (1000*60*60) );
	
	countMin = Math.floor ( Msec / (1000*60) );
	Msec -= ( countMin * (1000*60) );
	
	countSec = Math.floor ( Msec / 1000);
	changeColor(countDay);
	myDisp = "";
	if ( countDay != 0 ) myDisp += '<span class=\"dseg\">'+countDay + "</span>日<span class=\"br\">";
	if ( countHour != 0 ) myDisp += '<span class=\"dseg\">'+countHour + "</span>時間 ";
	if ( countMin != 0 ) myDisp += '<span class=\"dseg\">'+countMin + "</span>分 ";
	myDisp += '<span class=\"dseg\">'+countSec + "</span>秒";
	document.getElementById("countdown1").innerHTML = myDisp;
}, 1000 );

function changeColor(count){
	var count1=document.getElementById("count1");
	var dialog1=document.getElementById("dialog1");
	if(count>=20){
		document.body.style.backgroundColor = "#ffffff";
		count1.style.backgroundColor="#fafafa";
		count1.style.borderColor="#59b1eb";
		count1.style.color="#1976d2";
		dialog1.src=("./gif_b.gif");
	}
	else if(count>=10){
		document.body.style.backgroundColor = "#ffffff";
		count1.style.backgroundColor="#fafafa";
		count1.style.borderColor="#8bc34a";
		count1.style.color="#689f38";
		dialog1.src=("./gif_g.gif");
	}
	else if(count>=7){
		document.body.style.backgroundColor = "#fafafa";
		count1.style.backgroundColor="#eeeeee";
		count1.style.borderColor="#ffeb3b";
		count1.style.color="#ffa000";
		dialog1.src=("./gif_y.gif");
	}
	else if(count>=3){
		document.body.style.backgroundColor = "#000000";
		count1.style.backgroundColor="#310D01";
		count1.style.borderColor="#521F00";
		count1.style.color="#FF7900";
		dialog1.src=("./gif.gif");
	}
	else{
		document.body.style.backgroundColor = "#000000";
		count1.style.backgroundColor="#000000";
		count1.style.borderColor="#ff0000";
		count1.style.color="#ff0000";
		dialog1.src=("./gif_r.gif");
	}
}