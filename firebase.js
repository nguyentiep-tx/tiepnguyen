import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYhRp-Dl7-p6b7EljvtcOFBq99g5l-gB4",
    authDomain: "nguyenthetiep-25b5b.firebaseapp.com",
    projectId: "nguyenthetiep-25b5b",
    storageBucket: "nguyenthetiep-25b5b.appspot.com",
    messagingSenderId: "417100921666",
    appId: "1:417100921666:web:fd46c4ebeae4265f5fe6db"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const db = getDatabase();
let name = document.getElementById("nameInput");
let diaChi = document.getElementById("addressInput");
let ngheNghiep = document.getElementById("jobDecreption");
let gioiTinh = document.getElementById("gender");

let addBtn = document.getElementById("addBtn");
let retBtn = document.getElementById("retBtn");
let updBtn = document.getElementById("updBtn");
let delBtn = document.getElementById("delBtn");


let cccd = document.getElementById("cccd");
function AddData() {
  set(ref(db, "TestDB/" + cccd.value), {
    id: Number(cccd.value),
    name: name.value,
    diaChi: diaChi.value,
    ngheNghiep: ngheNghiep.value,
    gioiTinh: gioiTinh.value == 1,
  })
    .then(() => {
      alert("Add Success");
    })
    .catch((error) => {
      alert("Unsuccess");
      console.log(error);
    });
}

function retrieveData() {
  const dbRef = ref(db);
  get(child(dbRef, "TestDB" + cccd.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        name.value = snapshot.val().name;
        diaChi.value = snapshot.val().diaChi;
        gioiTinh.value = snapshot.val().gioiTinh ? 1 : 0;
        ngheNghiep.value = snapshot.val().ngheNghiep;
      } else {
        alert("Chua ton tai");
      }
    })
    .catch((error) => {
      alert("Unsuccess");
      console.log(error);
    });
}
retBtn.addEventListener("click", retrieveData);
function UpdateData() {
  update(ref(db, "TestDB" + cccd.value), {
    name: name.value,
    diaChi: diaChi.value,
    ngheNghiep: ngheNghiep.value,
    gioiTinh: gioiTinh.value == 1,
  })
    .then(() => {
      alert("update Success");
    })
    .catch((error) => {
      alert("Unsuccess");
      console.log(error);
    });
}
function DeleteData() {
  remove(ref(db, "TestDB" + cccd.value))
    .then(() => {
      alert("Delete Success");
    })
    .catch((error) => {
      alert("Unsuccess");
      console.log(error);
    });
}
updBtn.addEventListener("click", UpdateData);
delBtn.addEventListener("click", DeleteData);
addBtn.addEventListener("click", AddData);




