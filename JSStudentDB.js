let names = ["Taako", "Magnus", "Merle", "Lucrecia", "Davenport","Lup","Barry BlueJeans"];
let favefood = ["Macarons", "Steak", "Salad", "Wine", "Davenport", "Stew","Pgorp"];
let homeTown = ["Magic", "Ravensroost", "The Beach", "The Moon", "Davenport", "Umbrastaff", "Lichlyfe"];
let OneMo = true;

while (OneMo === true){
printStudents(names);
let input = selectStudent();
getNavChoice(names, input);
goAgain = OneMoAgain();
}
function printStudents(names)
{
    for (i = 0; i < names.length; i++){
        console.log((i+1) + ": "  + names[i]);
    }
}
function selectStudent()
{
    let input = prompt("Please Choose a Student from the above list");
    if (input -1 < 0 || input -1 > names.length ){
        console.log("Sorry we don't seem to have that student registered. Please select a different student");
        return selectStudent();
    }
    else {
        return input;
    }
}
function OneMoAgain()
{
   let input = prompt("Wanna check out someone else? Please enter y/n");
    if (input.includes ("y")){
        return true;
    }
    else if (input.includes ("n")){
        return false;
    }
    else {
        console.log("Whoops. I didn't catch that. Please try again.");
        return OneMoAgain();
    }
}
function getNavChoice(names, input)
{
    let navChoice = prompt(`You've selected ${names[input -1]} Would you like to learn about ${names[input -1]}'s favorite food or home town?`).toLowerCase().trim();

    if (navChoice.includes("food")){
       console.log(`${names[input -1]}'s favorite food is ${favefood[input -1]}`); 
       return navChoice;
    }
    else if (navChoice.includes("town"))
    {
        console.log(`${names[input -1]}'s hometown is ${homeTown[input-1]}`);
        return navChoice;
    }
    else 
    {
        console.log("Sorry, I didn't quite get that. Please try again");
        return getNavChoice(names, input);
    }
}