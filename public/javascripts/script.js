
function removeUser(){
    var confirm = window.confirm("warning!!! if you click ok, all records of this user will be removed");
    if(confirm){
        console.log("cp");
        document.getElementById("remove").click();
    }
}