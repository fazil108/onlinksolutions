AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


$(".nav-item a").on('click', function() {
    $(".navbar-collapse").removeClass("show");
});



var number1 = document.getElementById("number1");
var counter1 = 0;
setInterval(() => {
    if (counter1 == 99) {
        clearInterval();
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
}, 15);

var number2 = document.getElementById("number2");
var counter2 = 0;
setInterval(() => {
    if (counter2 == 99) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 15);

var number3 = document.getElementById("number3");
var counter3 = 0;
setInterval(() => {
    if (counter3 == 99) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
}, 15);

var number4 = document.getElementById("number4");
var counter4 = 0;
setInterval(() => {
    if (counter4 == 95) {
        clearInterval();
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + "%";
    }
}, 15);


let valueDisplay = document.querySelectorAll(".num");
let interval = 2000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let count = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(count);
        }
    }, duration);
});

const navbar = document.querySelector(".fixed-top");
window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }

};

// START EMAIL SUBSCRIPTION

function subscription() {
    var email = document.getElementById("subscribe");

    var f = new FormData();
    f.append("e", email.value);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "Success") {
                email.value = "";
                swal("Subscription Successs!", "", "success");
            } else if (t == "Already Subscribed") {
                swal({
                    title: "Already Subscribed Your Email!",
                    text: "",
                    icon: "warning",
                    dangerMode: true,
                });
            } else {
                alert(t);
            }
        }
    }
    r.open("POST", "subscriptionProcess.php", true);
    r.send(f);
}
// END EMAIL SUBSCRIPTION

// START MESSAGE SENDING

function sendMessage() {
    var name = document.getElementById("uname");
    var email = document.getElementById("uemail");
    var mobile = document.getElementById("umobile");
    var msg = document.getElementById("umsg");

    var f = new FormData();
    f.append("n", name.value);
    f.append("e", email.value);
    f.append("mo", mobile.value);
    f.append("ms", msg.value);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function() {
        if (r.readyState == 4) {
            var t = r.responseText;
            if (t == "Success") {
                name.value = "";
                email.value = "";
                mobile.value = "";
                msg.value = "";
                swal("Message Sent Successs!", "", "success");
            } else {
                document.getElementById("errormsg").innerHTML = t;
            }
        }
    }
    r.open("POST", "msgSendingProcess.php", true);
    r.send(f);
}
// END MESSAGE SENDING