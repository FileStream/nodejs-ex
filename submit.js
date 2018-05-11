var mongo = require('mongodb').MongoClient;
   
window.insert = function() {
  if (document.getElementById("firstname").value==''||document.getElementById("lastname").value=='') {
   document.getElementById("notif").style.color = "red";
  document.getElementById("notif").innerHTML = "<b>ERROR:</b> First name or last name field is blank. Please fill out both.";
    return; 
  }
  if (!Array.from(document.getElementsByName("likes")).find(x=>x.checked==true)) {
  document.getElementById("notif").style.color = "red";
  document.getElementById("notif").innerHTML = "<b>ERROR:</b> Please select at least 1 checkbox.";
    return;
  }
  uploadData((document.getElementById("firstname").value+' '+document.getElementById("lastname").value),Array.from(document.getElementsByName("likes")).filter(x=>x.checked==true).map(x=>x.value));
  document.getElementById("notif").style.color = "green";
  document.getElementById("notif").innerHTML = "<b>Done!</b>";
}
const uri = "mongodb+srv://bin:4BW2HdoPX3IdDu1e@cluster0-zo6ui.mongodb.net/test?retryWrites=true";
function uploadData(name,likes) {
  mongo.connect(uri, function(err, cli) {
        if (err)
            console.log(err);
        var collection = cli.db("test").collection("students");
            collection.insert({
               name: name,
               likes: likes
              });
  });
}
