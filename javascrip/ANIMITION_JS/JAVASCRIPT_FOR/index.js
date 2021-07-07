var index = 0;
var arr = ['red', 'blue', 'yellow', 'black', 'gray', 'while'];
var armg = ['25px', '50px', '75px', '-50px', '-25px']

function change() {
    document.getElementById("change").style.backgroundColor = arr[index];
    document.getElementById("change").style.marginLeft = armg[index];
    index++;
    if (index == arr.length) {
        index = 0;
    }
    setTimeout('change()', 300);
}