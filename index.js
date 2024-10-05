//Can you live serve the HTML file? Yes
//Is the HTML file connected to the JS file? Yes
//Can you prompt the user for froyo flavors and store their result? Yes
//Can you parse the user input into an array of froyo flavors? yes
//Can you build an object to track which flavors you have observed so far? Yes
//As you iterate through the array of flavors, when should that object be updated? Done
//Is your logic organized into a function? Done

const froyoFunction = () => {
  let userInput = prompt("Whats your favorite froyo flavor?");
  console.log(userInput);

  const froyoFlavors = userInput.split(" ");


  console.log(froyoFlavors.length);

  const flavorObj = {};

  for (let i = 0; i < froyoFlavors.length; i++) {
    console.log(froyoFlavors[i]);
  }
}


// for (let i = froyoFlavors.length -1; i >= 0; i--) {
//   console.log(froyoFlavors[i])
// }


  const froyo = {
  vanilla: 12,
  chocolate: 20,
  strawberry: 8,
  rockyRoad: 14,
  caramel: 16,
};

console.log();