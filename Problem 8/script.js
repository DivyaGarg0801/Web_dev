function form1() {
    alert("Welcome To Registration Portal");
    let a = prompt("Enter Your Name");
    if (a) {
        let cf = confirm("Do you want to continue ?");
        if (cf) {
            open("admit.html", "_blank");
        } else {
            alert("You chose to return to the old page");
        }
    } else {
        alert("Enter a valid name");
    }
    name.value = ""
}
