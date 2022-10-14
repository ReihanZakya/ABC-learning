// const signUp = e => {
//     let fname = document.getElementById('fname').val(),
//         username = document.getElementById('username').val(),
//         email = document.getElementById('email').val(),
//         brithday = document.getElementById('brithday').val();
//         phone = document.getElementById('phone').val();
//         region = document.getElementById('region').val();

//     let formData = JSON.parse(localStorage.getItem('formData')) || [];

//     let exist = formData.length && 
//         JSON.parse(localStorage.getItem('formData')).some(data => 
//             data.email.toLowerCase() == email.toLowerCase()
//         );

//     if(!exist){
//         formData.push({ fname, username, email, brithday, phone, region });
//         localStorage.setItem('formData', JSON.stringify(formData));
//         document.querySelector('form').reset();
//         document.getElementById('fname').focus();
//         // window.open("thankyou.html");
//         document.location.href = "thankyou.html";

//     }
//     else{
//         alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
//         document.location.href= "regis.html";
//     }
//     e.preventDefault();
// }

// function signIn(e) {
//     let email = document.getElementById('email').val(), pwd = document.getElementById('pwd').val();
//     let formData = JSON.parse(localStorage.getItem('formData')) || [];
//     let exist = formData.length && 
//     JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
//     if(!exist){
//         alert("Incorrect login credentials");
//     }
//     else{
//         location.href = "/";
//     }
//     e.preventDefault();
// }

$(document).ready(function(){

    $("#form").submit(function(e){

        let fname = $("#fname").val();
        let username = $("#username").val();
        let email = $("#email").val();
        let brithday = $("#brithday").val();
        let phone = $("#phone").val();
        let region = $("#region").val();



        let formData = JSON.parse(localStorage.getItem('formData')) || [];


        let exist = formData.length && 
            JSON.parse(localStorage.getItem('formData')).some(data => 
                data.email.toLowerCase() == email.toLowerCase()
            );

        if(!exist){
            e.preventDefault();
            formData.push({ fname, username, email, brithday, phone, region });
            localStorage.setItem('formData', JSON.stringify(formData));
            // window.open("thankyou.html");
            document.location.href = "thankyou.html";

        }
        else{
            alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
            document.location.href= "regis.html";
        }
       
    })
});