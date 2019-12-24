
document.getElementById("set").addEventListener("click",setData,false);
document.getElementById("reset").addEventListener("click",reSetData,false);
//document.getElementById("newNote").addEventListener("click",remove,false);
var notes=[];
var i=0;
function setData()
{
    var ind = 0;
   var data = document.getElementById("note-input").value;
   var date = document.getElementById("date-input").value;
   var time = document.getElementById("time-input").value;
   newNote(data ,date ,time,ind);
}

function reSetData()
{
    document.getElementById("note-input").value = "";
    document.getElementById("date-input").value = "";
    document.getElementById("time-input").value = "";
}

function newNote(data ,date,time,ind)
{
    var html_note = "";
    html_note = `<div id="newNote-${i}" class="new"> 
    <img src="images/notebg.png" id="note-img" />
    <div id="note-body">
    <i onclick="remove(${i})" class="fas fa-times"></i>
        <p id="data-par"> ${data}</p>
    </div>
    <div id="date-time" >
        <h5 id="date-par">${date}</h5>
        <h5 id="time-par">${time}</h5> 
    </div>
    </div>`
    document.getElementById("Notes").innerHTML += html_note;

     var obj = {
        data : data,
        date : date,
        time : time ,
        index : i
    };
    notes.push(obj);
    localStorage.setItem('Notes', JSON.stringify(notes));
    i++;

}
function remove(index)
{
    var div=document.getElementById("Notes");
    var notes2=JSON.parse(localStorage.getItem("Notes"));
    var notediv=document.getElementById("newNote-"+index);
    notes2.splice(index,1);
    localStorage.setItem('Notes',JSON.stringify(notes2));
    div.removeChild(notediv);

}