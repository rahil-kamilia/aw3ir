// import contactStore from './store.js'

$(document).ready(function () {

    $('#valid').click(function () {
        /* votre code ici*/
        if ($("#name").val().length < 1 || $("#firstname").val().length < 1 || $("#birth").val().length < 1 || $("#adresse").val().length < 1 || $("#mail").val().length < 1) {
            $('#l-ModalLabel').text('Error');
            $('#modal1').text('Veuillez remplir tous les champs svp');
            $('#l-Modal').modal('show');
        }
        else {
            // console.log($("#birth").val());
            let _name = $("#name").val();
            let _firsname = $("#firstname").val();
            let _birth = $("#birth").val().toString();
            let _adresse = $("#adresse").val().toString();
            let _mail = $("#mail").val();
            console.log(_birth);
            contactStore.add(_name, _firsname, _birth, _adresse, _mail);
        }
        var contactList = contactStore.getList();
        

        for (var index in contactList) {
            // console.log(contactList[index].name);
            var lati, long = contactList[index].adress.split(',');
            // console.log(displayLocation(lati, long));
            console.log(contactList[index]);
            document.querySelector("table tbody").innerHTML =
            document.querySelector("table tbody").innerHTML +
            "<tr><td>" +
            contactList[index].name +
            "</td><td>" +
            contactList[index].firstname +
            "</td><td>" +
            contactList[index].date +
            "</td><td>" +
            contactList[index].adress +
            // getAddress(lati, long) +
            "</td><td>" +
            contactList[index].mail +
            "</td><td>";
          }
        });
    
    // $("#datepicker").datepicker({
    //     dateFormat: "dd/mm/yy",
    //     maxDate: 31
    // });
    // console.log($("#gps"));
    $("#gps").click(getLocation);

    $("#name").keyup(function () { $("#carNom").text($("#name").val().length + " car."); });
    $("#firstname").keyup(function () { $("#carPrenom").text($("#firstname").val().length + " car."); });
});