import inquirer from "inquirer"; //? this is used to get input from user and to run that on IDE
while (1) {
  let bill: number = 0;
  let choice = await inquirer.prompt([
    {
      name: "user",
      type: "number",
      message: "\n\n\n\tPress 1 for Buying Groceries:\n\tPress 2 for exit:\n",
    },
  ]);
  if (choice.user == 1) {
    let choice = await inquirer.prompt([
      {
        name: "User",
        type: "string",
        message:
          "\n\n\tPress A for buying Fruits:\n\tPress B for buying Vegetables:\n",
      },
    ]);
    if (choice.User == "A" || choice.User == "a") {
      console.log("\n\t\tThis is the following fruits that are available:\n");
      console.log("\t\t1.Apple\n\t\t2.Banana\n\t\t3.Peach\n");
      let fruits_choice = await inquirer.prompt([
        {
          name: "fruit",
          type: "number",
          message: "\tPress 1 or 2 or 3 for buying fruits:\n",
        },
      ]);
      switch (fruits_choice.fruit) {
        case 1:
          let apple_quantity = await inquirer.prompt([
            {
              name: "Quantity",
              type: "number",
              message: "\tHow many quantity you want to buy:\n",
            },
          ]);
          console.log(`\tYou select ${apple_quantity.Quantity} quantity:\n`);
          bill = apple_quantity.Quantity * 20;
          console.log(`\tYour total bill is ${bill}:`);
          if (bill > 400) {
            console.log(
              `\tYour bill is above 400 so you get 10% discount:\n\tThe total bill is: ${
                bill * 0.1
              }`
            );
          }
          break;
        case 2:
          let banana_quantity = await inquirer.prompt([
            {
              name: "Quantity",
              type: "number",
              message: "\tHow many quantity you want to buy:\n",
            },
          ]);
          console.log(`\tYou select ${banana_quantity.Quantity} Quantity:\n`);
          bill = banana_quantity.Quantity * 15;
          console.log(`\tYour total bill is ${bill}:`);
          if (bill > 300) {
            console.log(
              `\tYour bill is above than 300 so you get 8% discount:\n\tThe total bill is ${
                bill - 0.08
              }`
            );
          }
          break;
        case 3:
          let peach_quantity = await inquirer.prompt([
            {
              name: "Quantity",
              type: "number",
              message: "How many quantity you want to buy:\n",
            },
          ]);
          console.log(`\tYou select ${peach_quantity.Quantity} Quantity:\n`);
          bill = peach_quantity.Quantity * 15;
          console.log(`\tYour total bill is ${bill}:`);
          if (bill > 500) {
            console.log(
              `\tYour bill is above than 500 so you get 14% discount:\n\tThe total bill is${
                bill - 0.14
              }`
            );
          }
          break;
        default:
          console.log("\tInvalid Number Enter:");
          break;
      }
    } else if (choice.User == "B" || choice.User == "b") {
      console.log("\n\tThis is the following vegetables that are available:\n");
      console.log("\t\t1.Carrot\n\t\t2.Broccoli\n\t\t3.Potatoes\n");
      let vegetables_choice = await inquirer.prompt([
        {
          name: "vegetables",
          type: "number",
          message: "\tPress 1 or 2 or 3 for buying Vegetables:\n",
        },
      ]);
      switch (vegetables_choice.vegetables) {
        case 1:
          let carrot_quantity = await inquirer.prompt([
            {
              name: "Quantity",
              type: "number",
              message: "\tHow many quantity you want to buy:\n",
            },
          ]);
          console.log(`\tYou select ${carrot_quantity.Quantity} Quantity:\n`);
          bill = carrot_quantity.Quantity * 35;
          console.log(`\tYour total bill is ${bill}:`);
          if (bill > 350) {
            console.log(
              `\tYour bill is above than 350 so you get 9% discount:\n\tThe total bill is${
                bill - 0.09
              }`
            );
          }
          break;
        case 2:
          let broccoli_quantity = await inquirer.prompt([
            {
              name: "Quantity",
              type: "number",
              message: "\tHow many quantity you want to buy:\n",
            },
          ]);
          console.log(`\tYou select ${broccoli_quantity.Quantity} Quantity:\n`);
          bill = broccoli_quantity.Quantity * 40;
          console.log(`\tYour total bill is ${bill}:`);
          if (bill > 430) {
            console.log(
              `\tYour bill is above than 430 so you get 12% discount:\n\tThe total bill is ${
                bill - 0.12
              }`
            );
          }
          break;
        case 3:
          let potatoes_quantity = await inquirer.prompt([
            {
              name: "Quantity",
              type: "number",
              message: "\tHow many quantity you want to buy:\n",
            },
          ]);
          console.log(`\tYou select ${potatoes_quantity.Quantity} Quantity:\n`);
          bill = potatoes_quantity.Quantity * 25;
          console.log(`\tYour total bill is ${bill}:\n`);
          if (bill > 340) {
            console.log(
              `\tYour bill is above than 340 so you get 8.5% discount:\n\tThe total bill is${
                bill - 0.085
              }`
            );
          }
          break;
        default:
          console.log("\tInvalid Number Enter:\n");
          break;
      }
    } else {
      console.log("\tInvalid Value enter:\n");
    }
    if (bill != 0) {
      //   Payment_method();]
      let payment_choice;
      do {
        console.log("\tPlease select the payment method:\n");
        payment_choice = await inquirer.prompt([
          {
            name: "Choice",
            type: "number",
            message:
              "\t\t1. Cash:\n\t\t2. Credit card\n\t\t3. Debit card\n\t\t4. Coupon\n",
          },
        ]);
        if (payment_choice.Choice == 1) {
          console.log("\n\tThe bill has been paid though Cash:");
        } else if (payment_choice.Choice == 2) {
          console.log("\n\tThe bill has been paid though Credit card:");
        } else if (payment_choice.Choice == 3) {
          console.log("\n\tThe bill has been paid through Debit card:");
        } else if (payment_choice.Choice == 4) {
          console.log("\n\tThe bill has been paid through Coupon:");
        } else {
          console.log("\n\tInvalid Option, Please try again!");
        }
      } while (payment_choice.Choice <= 0 || payment_choice.Choice > 4);
    }
  } else if (choice.user == 2) {
    console.log("\tThanks for visiting:\n");
    break;
  } else {
    console.log("\tInvalid Value enter:\n");
  }
}
