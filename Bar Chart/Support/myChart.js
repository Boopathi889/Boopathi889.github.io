function setChart(data)
{


//convert string to JSON
//将字符串转换成json数据
testJson = eval("(" + data + ")");
var ctx = document.getElementById('myChart').getContext('2d');	
var barChart = new Chart(ctx, testJson);

}

