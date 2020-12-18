//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDkUO-8I_ZVhPUTV1GmCQvWEkFXxHvhkWY",
      authDomain: "kwitter-9c2c2.firebaseapp.com",
      databaseURL: "https://kwitter-9c2c2-default-rtdb.firebaseio.com",
      projectId: "kwitter-9c2c2",
      storageBucket: "kwitter-9c2c2.appspot.com",
      messagingSenderId: "145352224925",
      appId: "1:145352224925:web:367ec56ff9205d4c8d2474"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value ;
      localStorage.setItem("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_name = childKey;
                  console.log(Room_name);
                  row = "<div class='room_name' id=" + Room_name + " onclick='redirectToRoomName(this.id)' > #" + Room_name + " </div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name") ;
      localStorage.removeItem("room_name") ;
      window.location = "index.html" ;
}