function checChanLe() {
    var x = prompt("Nhap mot so nguyen");

    if (Number(x) % 2 == 0) {
        alert(x + " la so chan");
    } else {
        alert(x + " la so le");
    }
}