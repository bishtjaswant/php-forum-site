$(function () {
    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    // signup implementation using jquery
    $("#sign-form").on('submit', function (e) {
        e.preventDefault();

        let first = $("#first").val()
        let last = $("#last").val()
        let email = $("#email").val()
        let password = $("#password").val()
        let address = $("#address").val()
        let phone = $("#phone").val();
        let gender = document.querySelector("input[name=gender]:checked").value;

        let userdata = {
            first,
            last,
            email,
            password,
            address,
            phone,
            gender
        }

        $.ajax({
            url: "http://localhost/php-online-forum-project/data/users/register.php",
            method: "POST",
            data: userdata,
            cache: false,
            dataType: "json",
            success: function (data) {
                console.log(data.msg);
                if (data.status) {
                    $("#modal-footer").html(`<hr/><p class="text-success text-left">${data.msg.toUpperCase()}</p>`);
                    $("#sign-form")[0].reset();
                    setTimeout(() => {
                        $("#modal-footer").html('');
                    }, 2000);
                } else {
                    $("#modal-footer").html(`<span class="text-danger">${data.msg}</>`);
                }
            }
        });


    });






    // login implementation using jquery
    $("#login-frm").on("submit", function (e) {

        e.preventDefault();
        let login_email = $("#login_email").val();
        let login_password = $("#login_password").val();
        let userlogin = { login_email, login_password };

        $.ajax({
            url: "http://localhost/php-online-forum-project/data/users/login.php",
            method: "POST",
            data: userlogin,
            cache: false,
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.status==true) {
                  localStorage.setItem('loggedinUser',data['data']);
                    $("#modal-footer").html(`<hr/><p class="text-success text-left">${data.msg.toUpperCase()}</p>`);
                    $("#login-frm")[0].reset();
                    setTimeout(() => {
                        $("#modal-footer").html('');
                    }, 5000);
                } else {
                    $("#modal-footer").html(`<span class="text-danger">${data.msg}</>`);
                }
            }
        });


    });

    // comment_again Impleantation
    //  initial Comment  will be applied in case of user  left blank field;
    let initialComment = document.querySelector("#comment_again").textContent;
    $("#comment_again").on("click blur focus", function (e) {
        this.contentEditable = true;
        let new_comment = document.querySelector("#comment_again").textContent;
        console.log(new_comment.length);
        if (new_comment.length <= 0) {
            this.innerText = `${initialComment}`
        } else {
            //  console.log('nc'+new_comment);
            const comment_id= $("#comment_again").attr("data-commentid");
            $.ajax({
                url: "http://localhost/php-online-forum-project/thread.php",
                method: "POST",
                data: {new_comment,comment_id},
                cache: false,
                dataType: "json",
                success: function (data) {
                    console.log(data);

                }
            });
        }

    });




});
