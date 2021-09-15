$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function(result){
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
    $.each(result,function(i,person){
        console.log(person.FirstName);
        console.log(person.FirstName + ' ' + person.LastName);
        $('#txtEmail').val(person.Email);
    })
})

function buildEmployeeCard(){
    $.each(arrEmployees,function(i,person){
        if(person.FirstName != 'John'){
            let strHTML = '<div class="card col-3 mt-5">';
            strHTML += '<h3 class="text-center"><a href="mailto:' + person.Email + '">' + person.FirstName + ' ' + person.LastName + '</a></h3>';
            strHTML += '<h4 class="text-center">' + person.Postion +'</h4>';
            strHTML += '<h4 class="mt-3">Profile Details</h4>';
            strHTML += '<p>Hire Date: '  + person.HireDate + '</p>';
            strHTML += '<p>Hourly Rate: ' + person.HourlyRate + '</p>';
            strHTML += '<h4 class="mt-3">Pay Calculations</h4>'
            strHTML += '<p>Assignment:  Something hall</p>';
            strHTML += '<div class="form-group mb-0">';
            strHTML += '<label class="mr-2">Hours Worked</label>';
            strHTML +='input class="txtHours">';
            strHTML += '</div>';
            strHTML += '<div class="form-group">';
            strHTML += '<label class="mr-2>Total Pay</label>';
            strHTML += '<input class="txtTotalPay" disabled';
            strHTML += '<button class="btn btn-primary btn-block btnCalculatePay">Calculate Pay</button>'
            strHTML += '</div>';
            strHTML += '</div>';
            $('#divEmployee').append(strHTML);
        }
        
    });
}

$('#btnTest').click(function() {
    const decTaxRate = .0925;
    let decHours = $('#txtHours').val();
    let decRate = $('#txtPayRate').val();
    console.log(decHours * decRate);
});
$('#cboEmployeeType').change(function() {
    if($('#cboEmployeeType').val() == 'FULL'){
     
        $('#divHours').addClass('d-none');
    }else {
        $('#divHours').removeClass('d-none').slideDown();
    }
})

function calculatePay(decHoursWorked, decPayRate){
    return decHoursWorked * decPayRate;
}

$(document).on('click','.btnCalculatePay',function() {
    calculatePay($this);
    let decHours = $(this).closest('card').find('.txthours').val();
    let decRate = $(this).closest('card').find('.txtHourlyRate').val().split(': '[1]);
    $(this).closest('card').find('txtTotalPay').val(calculatePay(decHours.decRate));
})