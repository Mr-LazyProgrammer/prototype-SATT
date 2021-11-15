// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7RuXVlV37Xn4Cz0Dl0MV6nhwoFOFrLjI",
    authDomain: "satt-8f551.firebaseapp.com",
    projectId: "satt-8f551",
    storageBucket: "satt-8f551.appspot.com",
    messagingSenderId: "625407997658",
    appId: "1:625407997658:web:7152024201b999dd3ed7e3",
    measurementId: "G-VB0R5B025W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref('submissions');//reference to contact info collection

document.querySelector('#contactForm').addEventListener('submit',
submitForm);

function submitForm(e){
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
   
    saveContactInfo(name, email, subject, message);
    document.querySelector('#contactForm').reset();
}

function saveContactInfo(name, email, subject, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        Name: name,
        eMail: email,
        Subject: subject,
        Message: message
    });
}