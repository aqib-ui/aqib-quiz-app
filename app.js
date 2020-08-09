function checkanswers(){
    var score=0;
    var correct1=document.getElementById("q1-o2")
    var q1o2=document.getElementById("q1-o1")
    var q1o3=document.getElementById("q1-o3")
    if(correct1.checked == true){
        score++}
    //     alert("your Answer 1 is Right...")
    // }else{
    //     alert("Your Answer 1 is Wrong...")
    // }



    var correct2=document.getElementById("q2-o1")
    var q2o2=document.getElementById("q2-o2")
    var q2o3=document.getElementById("q2-o3")
    if(correct2.checked == true){
        score++}
    //     alert("your Answer 2 is Right...")
    // }else{
    //     alert("Your Answer 2 is Wrong...")
    // }







    var correct3=document.getElementById("q3-o1")
    var q3o2=document.getElementById("q3-o2")
    var q3o3=document.getElementById("q3-o3")
    if(correct3.checked == true){
        score++}
    //     alert("your Answer 3 is Right...")
    // }else{
    //     alert("Your Answer 3 is Wrong...")
    // }






    var correct4=document.getElementById("q4-o3")
    var q4o2=document.getElementById("q4-o2")
    var q4o3=document.getElementById("q4-o1")
    if(correct4.checked == true){
        score++}
    //     alert("your Answer 4 is Right...")
    // }else{
    //     alert("Your Answer 4 is Wrong...")
    // }






    var correct5=document.getElementById("q5-o2")
    var q5o2=document.getElementById("q5-o3")
    var q5o3=document.getElementById("q5-o1")
    if(correct5.checked == true){
        score++}
    //     alert("your Answer 5 is Right...")
    // }else{
    //     alert("Your Answer 5 is Wrong...")
    // }

var sc=score++
var per = (sc/5)*100
document.write("your total score is "+ sc +"<br>"+"<br>" +"<br>"  +"And Your Percentage is "+ per+"%"+"<br>"+"<br>"+"<br>"+"Back! To The Quiz Please Refresh The Page...")









}