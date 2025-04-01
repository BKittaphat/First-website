console.log("สวัสดี");
var a = 12;
let y = 5;
const z = 15;
y = 10;
let m = a + y + z;
console.log(m);
if (m > 10) {
    console.log(true);
} else {
    console.log(false);
}
for (let i = 0; i < 5; i++) {
    console.log(i)
}
// alert("สวัสดี")
function test_alert() {
    let a = document.getElementById("input-a").value;
    let b = document.getElementById("input-b").value;
    let r = parseInt(a) + parseInt(b);
    // alert(r);
    document.getElementById("output").textContent = r;
}
