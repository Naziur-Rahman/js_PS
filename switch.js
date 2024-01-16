let marks = 70;

switch(true){
    case(marks>=80 && 100>=marks):
        console.log("you have get A+");
    break;
    case(marks>=70 && 80>marks):
        console.log("you have get A");
    break;
    case(marks>=60 && 70>marks):
        console.log("you have get A-");
    break;
    case(marks>=50 && 60>marks):
        console.log("you have get B");
    break;
    case(marks>=40 && 50>marks):
        console.log("you have get C");
    break;
    case(marks>=33 && 40>marks):
        console.log("you have get D");
    break;
    case(marks>=0 && 33>=marks):
        console.log("you have get F");
    break;
    default:
        console.log("Enter Write Numbr ");
}