function caleandar(el, data, settings){
  var obj = new Calendar(data, settings);
  createCalendar(obj, el);
}

//JSON verisi
var datas = [{"title":"event 1", "date":"2019/10/25"},

            {"title":"event 2", "date":"2019/10/26","enddate":"2019/10/29"},

            {"title":"event 3", "date":"2019/10/28"},

            {"title":"event 4", "date":"2019/11/7"}];
			

//JSON'dan gelen veriyi tutacak olan array
var events = [];

//Json verisinden sayı çekmek için split fonksiyonu
function date_(x, y){
	return Number(datas[x]['date'].split("/")[y])
}
function enddate_(x, y){
	return Number(datas[x]['enddate'].split("/")[y])
}

//JSON verisini array'e eklemek için döngü
for (i = 0; i < datas.length; i++) {
	events.push({'Date': new Date (date_(i,0),(date_(i,1)-1),date_(i,2)), 'Title':datas[i]['title'], 'Link':"#"});
	if(datas[i]['enddate']!==undefined){
		for ( t = (date_(i,2)+1); t <= enddate_(i,2); t++ ) {
			events.push({'Date': new Date (date_(i,0),(date_(i,1)-1),t), 'Title':datas[i]['title'], 'Link':"#"});
		}
	}
} 	

var settings = {};
var element = document.getElementById('takvim');
caleandar(element, events, settings);