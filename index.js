import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([

    {   /* Pass your questions in here */
        message:"Please enter a valid URL",
        /* Define the variable name for the answer, this variable name will be used to access the user's answer from the prompt question */
        name:"URL",
    },
  ])
  .then((answers) => {
    // Define the variable URL to be the "URL" variable stored in the answers object
    const url = answers.URL;
    // create and write QR image using the URL provided to qr.svg
    var qr_svg = qr.image(url, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('qr.svg'));

  });
