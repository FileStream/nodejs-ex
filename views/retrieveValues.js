module.exports = { function() {
return [document.getElementById("firstname").value+document.getElementById("lastname").value,[document.getElementsByName("likes").filter(x=>x.checked==true).map(x=x.id)]];
}
}
