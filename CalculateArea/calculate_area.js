function calculateArea() {
    let width;
    let length;

    width = parseFloat(document.getElementById("width").value);
    length = parseFloat(document.getElementById("length").value);

    let result = width * length;

    document.getElementById("area").innerHTML = `The area of rectangle is ${result}`;
}