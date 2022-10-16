$(document).ready(function () { })

let trow = $("#form-data").DataTable({
    order: [[0, 'desc']],  
    autoWidth: false,
  });
  // parse itu mengkonversi ke objek
  let formData = JSON.parse(localStorage.getItem("formData")) || []; //ambil data
  // (data) itu parameter
  function table(data) {
    formData.forEach((formData, index) => {
      trow.row
        .add([
          `<p> ABC01-` + Math.floor(Math.random()*9999) + `</p>` ,
          formData.fname,
          formData.username,
          formData.brithday,
          formData.region,
          formData.email,
          formData.phone,
          `<a class=\"edit\" href=\"` +index +`\""><img src=\"img/icon/editing.png\"></a>
          <a class=\"delete\" href=\"` +index +`\""><img src=\"img/icon/delete.png\"></a>
          `,
        ])
        .draw();
    });
  }
  table(formData);

// delete
// DELETE FUNCTION
$('.delete').click(function(e){
    e.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    if (result.isConfirmed) {

        let DeleteIndex = $(this).attr("href");

        $(this).removeAttr("href");

        formData.splice(DeleteIndex, 1);
        localStorage.setItem('formData', JSON.stringify(formData));
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'deleted',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((ogeh) => {
            if (ogeh.isConfirmed) {
                location.reload();
            }
        })
    }
    e.preventDefault();
    })
   

});

$(".edit").click(function (a) {

    let formData = JSON.parse(localStorage.getItem('formData')) || []; //ambil data


    $(".content").css("display","block");
    $(".close").click(function(){
       $(".content").css("display","none");
       location.reload();
    })

    let EditIndex = $(this).attr('href');
    // pangggil datanya sesuai index
    let fname = $("#fname").val(formData[EditIndex].fname);
    let username = $("#username").val(formData[EditIndex].username);
    let email = $("#email").val(formData[EditIndex].email);
    let brithday = $("#brithday").val(formData[EditIndex].brithday);
    let phone = $("#phone").val(formData[EditIndex].phone);
    let region = $("#region").val(formData[EditIndex].region);

    a.preventDefault();
    // editnya dan submit
    $("#form-edit").submit(function (a) {

        $(".fade").eq(EditIndex).addClass("color-change-2x");

        formData[EditIndex].fname = $("#fname").val();
        formData[EditIndex].username = $("#username").val();
        formData[EditIndex].email = $("#email").val();
        formData[EditIndex].brithday = $("#brithday").val();
        formData[EditIndex].phone = $("#phone").val();
        formData[EditIndex].region = $("#region").val();

        formData.splice(EditIndex, 1, formData[EditIndex]);

        setTimeout(function(){
            localStorage.setItem("formData", JSON.stringify(formData));
        },1000);

        ;

        a.preventDefault();
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your change has been saved',
        showConfirmButton: false,
        timer: 1000
        })
        setTimeout(function(){
            location.reload();
        },1000);

       
    })
})
