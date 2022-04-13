// Отправка заявки 
$(document).ready(function () {
    $('#form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
        if (document.form.name.value == '' || document.form.phone.value == '') {
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "../php/telegram.php",
            data: $(this).serialize()
        }).done(function () {
            $('.popup-over').toggleClass('active');
            $('.popup-order').toggleClass('active');
            $(this).find('input').val('');
            $('#form').trigger('reset');
        });
        return false;
    });
});

