document.getElementById("eachTotal").style.display = "none";
document.getElementById("onePerson").style.display = "none";

$(function(){
	$('#histbtn').on('click',function(){
        $('#histPage').fadeIn(1000);
       $('#homePage').css('display', 'none');
    // var fetchkeys = Object.keys(localStorage);
        
	// for (var p = 0; p < fetchkeys.length; p++) {
    //     // const element = array[p];
	// 	   var ann = JSON.parse(localStorage.getItem(fetchkeys[p]));
	// 	   var timer = ann.timers;
   
	// 	   var series = ann.categoeries;
   
	// 	   var serialNo = ann.cnt;
            
    //        var rrt  = ann.endedTime;
    //         var mn = `<tr><td>`+serialNo+`</td><td>`+series+`</td><td>`+timer+`</td><td>`+rrt+`</td></tr>`;
    //      tbody.innerHTML += mn;
    //      } 
    // basicaddon1.value = bbt;
   })
})

function calEvery() {
    var eachamt = document.getElementById("amt").value;
    var myTips = document.getElementById("chooseTips").value;
    var eachamtofPerson = document.getElementById("eachPersonAmt").value;

    if (eachamt === "" ||  eachamtofPerson == "") {
      alert("Please Enter The Values");
      return;
    }
    if (eachamtofPerson === "" || eachamtofPerson <= 1) {
      document.getElementById("onePerson").style.display = "none";
    } else {
      document.getElementById("onePerson").style.display = "block";
    }
    var allTot = (eachamt * myTips) / eachamtofPerson;
    allTot = Math.round(allTot * 100) / 100;
    allTot = allTot.toFixed(2);
    document.getElementById("eachTotal").style.display = "block";
    document.getElementById("sharedTip").innerHTML = allTot;
}
document.getElementById("calculate").onclick = function() {
    
    var goods = Object.keys(localStorage);
    var good = "myGoods" + goods.length;
    var obje = {
     firstInp: amt.value,
     secondInp: chooseTips.value,
     thirdInp: eachPersonAmt.value
   } 
     var allInps = JSON.stringify(obje);
     localStorage.setItem(good,allInps);

    calEvery();
  
  };

  $(function(){
    $('#menu1').hide();
     $('#menu').on('click', function(){
         $('#sidebar').css('width','230px')
         $('#sidebar').css('display','block');
         $('#menu').hide();
         $('#menu1').show();
 })
     $('#menu1').on('click', function(){
         $('#sidebar').hide();
         $('#sidebar').css('width','0')
         $('#menu').show();
         $('#menu1').hide();
})
}())
  