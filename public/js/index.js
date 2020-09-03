/**
 * Created by yzou on 8/7/20.
 */

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log(user);
        indexControl.displayUser();
        
    } else {
        console.log("not logged in");
    }
});



var indexControl = (function () {

    //global variables
    var pub = {};
    
    pub.displayUser = function(){
        $("#loggerRemove").remove();
        $("#createrRemove").remove();
        $("#logger").html('<i class=\"fa fa-user\">Welcome '+firebase.auth().currentUser.uid+'</i>');
    }

    //set  drop down list to database variables
    pub.dropDownControl = function() {
        $("#dropper").ready(function () {
            $("#dropper").html("");
            $("#dropper").append('<li><a href="#">Does this work</a></li>');
        });
    }
    return pub;

}());

$(document).ready(indexControl.dropDownControl());