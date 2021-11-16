// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7RuXVlV37Xn4Cz0Dl0MV6nhwoFOFrLjI",
    authDomain: "satt-8f551.firebaseapp.com",
    projectId: "satt-8f551",
    storageBucket: "satt-8f551.appspot.com",
    messagingSenderId: "625407997658",
    appId: "1:625407997658:web:319542fbf70389413ed7e3",
    measurementId: "G-2CJRB45840"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let firestore = firebase.firestore()
const db = firestore.collection("submissions")

let submit = document.getElementById('submit')

submit.addEventListener('click', submitForm)

function submitForm(e){
    e.preventDefault()
    
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const subject = document.querySelector('#subject').value
    const message = document.querySelector('#message').value

    db.doc().set({
        Name: name,
        eMail: email,
        Subject: subject,
        Message: message
    }).then( ()=>{
        console.log("Data Saved")
    }).catch((error) => {
        console.log(error)
    })
   
    document.querySelector('#contactForm').reset()

    alert("Your Form has been successfully submitted !")
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);