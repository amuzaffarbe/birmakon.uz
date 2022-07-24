let  username = document.querySelector(".username"),
     email = document.querySelector(".email"),
     message = document.querySelector(".message"),
     phone = document.querySelector(".phone"),
     sendBtn = document.querySelector(".submit")

sendBtn.addEventListener("click", () => {
     if (username.value == "" && email.value == "" && phone.value == "") {
          return;
     } else {
          var my_text = `Yangi Feedback :%0A%0AIsmi - ${username.value}, %0A%0ATelefon raqami - %0A${phone.value}, %0A%0AElektron pochtasi - %0A${email.value}, %0A%0ASizga yuborgan matni - %0A${message.value}`

          var token = "5485668013:AAEmblSULQAqZo-fEaX9UllFUuPQa66qTUg";
          var chat_id = -1001327735292;
          var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
          //  https://api.telegram.org/bot5485668013:AAEmblSULQAqZo-fEaX9UllFUuPQa66qTUgm/sendMessage?chat_id=-1001327735292&text=Yangi Feedback :%0A%0AIsmi - %0A%0ATelefon raqami - %0A%0AElektron pochtasi - %0A%0ASizga yuborgan matni - %0A%0A

          let api = new XMLHttpRequest();
          api.open("GET", url, true);
          api.send();
          // alert("Malumotlar Muzaffarbekga yuborildi ✅")

          setTimeout(() => {
               window.location.reload()
          }, 5000);
     }
})