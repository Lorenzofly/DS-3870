var arrIsis;
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrIsis = result;
    buildTable();
    
})
function buildTable(){
    $.each(arrIsis,function(i,Stub){
        $('#tblPayStubs tbody').append('<tr><td>' + Stub.Month + '</td><td>' + Stub.Year + '</td><td>' + Stub.Sales + '</td><td>'+ Stub.Hours +'</td><td>' + Stub.Rate + '</td><td>' + Stub.CommissionRate + '</td></tr>');
})};
$('#tblPayStubs').DataTable();

var arrArcher;
$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrArcher = result;
    buildArcher();
    buildArchermore();
    })
    $(document).on('click','#btnDetails',function(){
        $('#divContactDetails').slideToggle();
   
    
    })    
    
function buildArcher(){
    $.each(arrArcher,function(i,person){
        let strHTML = '<div class=" col-8 mt-2 ">';
        strHTML += '<img src="images/archer.png"  class="ml-1" alt="Avatar " style="margin:auto; max-width:100%;">';
        strHTML += '<h4 class="text-align:right offset-4  "><p style="color:lightblue">' +person.FirstName+' '+person.LastName+'</p> </h5>';
        strHTML += '<h5 class="text-align:right offset-4 ">CodeName: '+person.CodeName+ '</h5>';
        strHTML += '<h5 class="text-align:right offset-4 ">Billing Agency: ' +person.Agency+ '</h5>';
        strHTML += '<h5 class="text-align:right offset-4 ">Position: ' +person.Job+ '</h5>';
        strHTML += '<h5 class="text-align:right offset-4 ">Hire Date: '  +person.HireDate+ '</h5>';
        

        $('#divArcher').append(strHTML);
    })};
    function buildArchermore(){
        $.each(arrArcher,function(i,person){
            let strHTML = '<div class=" col-8 mt-2 ">';
            strHTML += '<h5 class="text-align:right">Email: <a href="">'+person.Email+'</a></h5>';
            strHTML += '<h5 class="text-align:right mt-2">Phone: <a href="">'+person.Phone+'</a></h5>';
            strHTML += '<h5 class="text-align:right mt-4">Street Adress: ' +person.Street1+ '</h5>';
            strHTML += '<h5 class="text-align:right">City: ' +person.City+ '</h5>';
            strHTML += '<h5 class="text-align:right">State: ' +person.State+ '</h5>';
            strHTML += '<h5 class="text-align:right ">Zip Code: ' +person.ZIP+ '</h5>';

            strHTML += '<h5 class="text-align:right mt-4">EContact: ' +person.EContact+ '</h5>';
            strHTML += '<h5 class="text-align:right">Emergency Contact:<a href=""> '+person.EContactNumber+'</a></h5>';


            $('#divContactDetails').append(strHTML);
        })};