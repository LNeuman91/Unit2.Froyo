//Can you live serve the HTML file? Yes
//Is the HTML file connected to the JS file? Yes
//Can you prompt the user for froyo flavors and store their result? Yes
//Can you parse the user input into an array of froyo flavors? yes
//Can you build an object to track which flavors you have observed so far? Yes
//As you iterate through the array of flavors, when should that object be updated? Done
//Is your logic organized into a function? Done

const froyoFunction = () => {
  let userInput = prompt("What's your favorite froyo flavor?");
  console.log(userInput);

  const froyoFlavors = userInput.split(" ");
  console.log(`Number of flavors entered: ${froyoFlavors.length}`);

  const flavorObj = {}; // Object to track observed flavors

  // Loop through the input flavors
  for (let i = 0; i < froyoFlavors.length; i++) {
    let flavor = froyoFlavors[i];

    // Update the object with the observed flavor count
    if (flavorObj[flavor]) {
      flavorObj[flavor]++;
    } else {
      flavorObj[flavor] = 1;
    }
  }

  console.log("Observed flavors:", flavorObj);

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

  for (let flavor of froyoFlavors) {
    if (froyo[flavor]) {
      console.log(
        `${flavor} is available with ${froyo[flavor]} servings left.`
      );
    } else {
      console.log(`${flavor} is not available.`);
    }
  }
};

froyoFunction();
