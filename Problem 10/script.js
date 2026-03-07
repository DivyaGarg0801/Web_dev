const calender={
    showCal(){
        let month =+document.getElementById("month").value;
        let year =+document.getElementById("year").value;
        let firstday=new Date(year, month, 1).getDay();
        let lastday=new Date(year, month+1, 0).getDate();
        let cal="<tr>";
        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for (let i=0;i<7;i++){
            cal +="<th>"+days[i]+"</th>";
        }
        cal+="</tr><tr>";
        for (let i=0;i<firstday;i++){
            cal+="<td></td>";
        }
        for (let i=1;i<=lastday;i++){
            cal+="<td>"+i+"</td>";
            if ((i+firstday)%7==0){
                cal+="</tr><tr>";
            }
        }
        cal+="</tr>";
        document.getElementById("cal").innerHTML=cal;
    }
}