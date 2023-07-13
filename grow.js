document.addEventListener('DOMContentLoaded', function() {
    let cups = 0;
    document.querySelector('button').addEventListener('click', function() {
        cups += 1;
        if (cups < 4) {
            document.querySelector('#stage1').style.opacity = '1';
        } else if (cups < 8) {
            document.querySelector('#stage1').style.opacity = '0';
            document.querySelector('#stage2').style.opacity = '1';
        } else if (cups < 12) {
            document.querySelector('#stage2').style.opacity = '0'
            document.querySelector('#stage3').style.opacity = '1'
        } else {
            document.querySelector('#stage3').style.opacity = '0'
            document.querySelector('#stage4').style.opacity = '1'
        }

        if (cups >= 16) {
            document.querySelector('div').innerHTML = "Congratulations you have drank enough water today!";
        } else {
            document.querySelector('div').innerHTML = cups + "/16 cups"
        }
    });
});