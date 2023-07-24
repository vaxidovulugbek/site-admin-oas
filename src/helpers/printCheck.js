import { get } from "lodash";
import { httpClient, queryBuilder } from "services";
import time from "./time";

const mmToPixel = (mm) => mm * 3.77;

async function printCheck(row) {
    try {
        const checkWidth = mmToPixel(80);

        const newWindow = window.open(
            "",
            "",
            "width=1000,height=800,scrollbars=0,resizable=0,top=50,left=300"
        );

        newWindow.document.write(`

        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap" rel="stylesheet">
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <title>OASIS ADMIN</title>

                <style>
                  
                </style>
            </head>

            <body>
                
            </body>
        </html>
        `);

        setTimeout(() => {
            newWindow.print();
        }, 500);
    } catch (error) {
        console.log(error);
    }
}

export default printCheck;
