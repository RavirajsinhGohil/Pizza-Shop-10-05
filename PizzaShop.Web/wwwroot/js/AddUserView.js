$(document).ready(function () {

    $.getJSON('/GetData/GetCountries', function (data) {
        $.each(data, function (index, country) {
            $("#Country").append(`<option value="${country.countryId}">${country.countryName}</option>`);
        });
    });

    $("#Country").change(function () {
        var countryId = $(this).val();
        $("#State").html('<option value="">Select State</option>').prop("disabled", true);
        $("#City").html('<option value="">Select City</option>').prop("disabled", true);

        if (countryId) {
            $.getJSON(`/GetData/GetStates?countryId=${countryId}`, function (data) {
                $("#State").prop("disabled", false);
                $.each(data, function (index, state) {
                    $("#State").append(`<option value="${state.stateId}">${state.stateName}</option>`);
                });
            });
        }
    });

    $("#State").change(function () {
        var stateId = $(this).val();
        $("#City").html('<option value="">Select City</option>').prop("disabled", true);

        if (stateId) {
            $.getJSON(`/GetData/GetCities?stateId=${stateId}`, function (data) {
                $("#City").prop("disabled", false);
                $.each(data, function (index, city) {
                    $("#City").append(`<option value="${city.cityId}">${city.cityName}</option>`);
                });
            });
        }
    });

    document.getElementById("inputFile").addEventListener("change", function (event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("ProfileImagePreview").src = e.target.result;
                document.getElementById("ProfileImagePreview").width = 70;
            };
            reader.readAsDataURL(file);
        }
    });

    const eyebtn = document.getElementById("togglePassword");
    const passfield = document.getElementById('password');
    togglePassword.addEventListener('click', function (e) {
        const type = passfield.getAttribute('type') === 'password' ? 'text' : 'password';
        passfield.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
});