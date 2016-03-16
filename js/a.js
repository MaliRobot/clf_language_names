jQuery.ajax({
   type: "POST",
   url: "/script.py",
   success: function (msg) {
       alert("Data Saved: " + msg);
   }
});