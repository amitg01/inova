function removeUser() {
  var confirm = window.confirm(
    "warning!!! if you click ok, all records of this user will be removed"
  );
  if (confirm) {
    document.getElementById("remove").click();
  }
}
