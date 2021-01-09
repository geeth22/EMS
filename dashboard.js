$(document).ready(function () {

    var $Employees = $('#Employees')
    var $firstname = $('#firstname')
    var $lastname = $('#lastname')
    var $email = $('#email')
    var url = "http://localhost:3000/Employees"
    function AddEmploy(Employ) {
        $Employees.append('<li>firstname: ' + Employ.firstname + ',lastname: ' + Employ.lastname + ',email: ' + Employ.email + '</li>');
    }
    $.ajax({
        type: 'GET',
        url: url,
        success: function (Employees) {
            $.each(Employees, function (i, Employe) {
                AddEmploy(Employe)
            })
        },
        error: function () {
            alert('error loading data')
        }
    });
    $('#add-employ').on('click', function () {
        var employ = {
            firstname: $firstname.val(),
            lastname: $lastname.val(),
            email: $email.val(),
        };
        $.ajax({
            type: 'POST',
            url: url,
            data: employ,
            success: function (newEmploy) {
                AddEmploy(newEmploy)
            },
            error: function () {
                alert('error loading data')
            }
        })
    });
});

//     $.getJSON("./db.json", function (data) {
//       let employ = ''

//       $.each(data, function (key,value) {
//         employ +=`<tr>
//                         <td>${value.firstname}</td>
//                         <td>${value.lastname}</td>
//                         <td>${value.email}</td>
//                         <td><button class="add-button edit" formaction="editemploy.html">edit</button></td>
//                         <td><button class="add-button edit">delete</button></td>
//         </tr>
//       `
//         });

//       $('#Employee').append(employ)

//     }).fail(function(){
//       console.log("An error has occurred.");
//    });
// });