var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getStaffByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
    
    })

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){
        if(person.FirstName != 'John'){
            let strHTML = '<div class="card col-2 mt-5 ml-5">';
            strHTML += '<img src="images/profile.png" alt="Profile Image" style="margin:auto; max-width:100%;">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="text-center">' + person.Title +'</h4>';
            strHTML += '<h4 class="mt-3">Contact Details</h4>';
            strHTML += '<p>Phone Number: '  + person.HomePhone + '</p>';
            strHTML += '<p> Email:' + person.Email + '</p>';
            strHTML += '<h4 class="mt-3">Adress</h4>';
            strHTML += '<p> '+ person.StreetAddress1 + '</p>';
            strHTML += '<p> '+ person.City + '</p>';
            strHTML += '<h4 class="mt-3">Pay Details</h4>';
            strHTML += '<p class="txtPayrate" data-rate="' + person.HourlyWage+ '">Pay Rate: ' + person.HourlyWage + '</p>';
            strHTML += '<p class="txtHours" data-rate="' + person.Hours + '">Hours Worked: ' + person.Hours + '</p>';
            strHTML += '<p> TaxRate: ' + person.TaxRate + '</p>';
            strHTML += '<div class="form-group mb-0">';
            strHTML += '</div>';
            strHTML += '<div class="form-group">';
            strHTML += '<label class="mr-2">Goal Pay</label>';
            strHTML += '<input class="txtGoalPay" disabled>';
            strHTML += '</div>';
            
            strHTML += '<button class="btn btn-primary btn-block btnCalculatePay">Find Hours For Pay</button>'
            strHTML += '</div>';
            $('#divEmployee').append(strHTML);
            $('#tblEmployees tbody').append('<tr><td>' + person.FirstName + '</td><td>' + person.LastName + '</td><td>' + person.Title + '</td><td></tr>');
            
        }
    });
    $('#tblEmployees').DataTable();
   
}
$(document).on('click','.btnCalculatePay',function() {
    let decHours = $(this).closest('card').find('txtHours').txt();
    let decRate = $(this).closest('card').find('txtHourlyWage').txt().split(': ')[1];
    $(this).closest('card').find('txtGoalPay').txt(decHours * decRate);
});
$(document).on('click','#btnCalculatePay',function(){
    $('#tblEmployees').slideToggle();
    $('#divEmployee').slideToggle();
})




