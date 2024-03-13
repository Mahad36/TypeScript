console.log("------------------02------------------");
var f_name = "Mahad";
console.log("Hello" + " " + f_name + " " + "would you like to learn some Python today?");
console.log("------------------03------------------");
console.log(f_name.toLowerCase());
console.log(f_name.toUpperCase());
console.log(f_name.toLocaleLowerCase());
console.log("------------------04------------------");
console.log("Rumi said,You are not a drop,You are the entire drop.");
console.log("------------------05------------------");
var famous_person = "Rumi said";
var message = "Do not feel lonely, the entire universe is inside you.";
console.log(famous_person + ", " + message);
console.log("------------------06------------------");
var m_name = "\tMahad here....\n";
console.log(m_name);
console.log("------------------07------------------");
console.log(6 + 2);
console.log(10 - 2);
console.log(4 * 2);
console.log(40 / 5);
console.log("------------------08------------------");
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(48 / 6);
console.log("------------------09------------------");
var no = 10;
console.log("My favourite no is:" + no);
console.log("------------------10------------------");
// Here is my name and current date
console.log("Name:Mahad Yasir");
console.log("Date:25-02-2024");
console.log("------------------11------------------");
var A_name = ["Ali", "Ahmed", "Raza"];
for (var i = 0; i < A_name.length; i++) {
    console.log(A_name[0]);
}
console.log("------------------12------------------");
console.log("Good luck:", A_name[0]);
console.log("Have a safe journey", A_name[1]);
console.log("Nice to met you", A_name[2]);
console.log("------------------13------------------");
var cars = ["Honda", "Toyota", "BMW", "Audii"];
for (var i = 0; i < cars.length; i++) {
    console.log("I would like to own a", cars[i], "car");
}
console.log("------------------14------------------");
for (var i = 0; i < A_name.length; i++) {
    console.log(A_name[i], "join us for dinner, please!");
}
console.log("------------------15------------------");
console.log(A_name[2] + " is not coming and update list is:");
A_name[2] = "Irfan";
for (var i = 0; i < A_name.length; i++) {
    console.log(A_name[i], "join us for dinner, please!");
}
console.log("------------------16------------------");
A_name.unshift("Usama");
var middleIndex = Math.floor(A_name.length / 2);
A_name.splice(middleIndex, 0, "Mahad");
A_name.push("Usman");
console.log("Good news! We found a bigger dinner table!");
for (var i = 0; i < A_name.length; i++) {
    console.log(A_name[i], "join us for dinner, please!");
}
