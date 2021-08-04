var firebaseConfig = {
      apiKey: "AIzaSyBjcDqcXEq9bZCDfiQ7xvoBYu80MUP7dmo",
      authDomain: "kwitter-eb522.firebaseapp.com",
      databaseURL: "https://kwitter-eb522-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb522",
      storageBucket: "kwitter-eb522.appspot.com",
      messagingSenderId: "545067593333",
      appId: "1:545067593333:web:1d5a6c85286506cf5e523c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome  " + user_name + "!!";
    function addroom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id=" + Room_names + "  onclick='redirectToRoom(this.id)'> # " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoom(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}