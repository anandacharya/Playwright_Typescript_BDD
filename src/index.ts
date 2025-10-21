import { exec } from 'child_process';

//Define a common command string to run cucumber tests with ts-node

const common = './src/features/*.feature \
--require-module ts-node/register \
--require ./src/step-definitions/**/**/*.ts \
--require ./src/Utils/*.ts \
--tags "not @ignore"';

//Define an interface for the profile object
//It defines an interface where each key is a string and the value is also a string
interface ProfileCommands {
    [key: string]: string;
}

//Define a command strings for different test profiles
const profilea: ProfileCommands = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags "@regression"`,
    login: `${common} --tags "@login"`,
    contactUs: `${common} --tags "@contact-us"`,
};

//Get the third command line argument and assign it to the profile
//i.e smaoke, regression, login
const profile = process.argv[2];

//construct the command string based on the selected profile
//command is the full command to run the tests for the selected profile
const command =   `npx cucumber-js ${profilea[profile as 'smoke' | 'regression' | 'login' | 'contactUs']}`;

//print the constructed command
console.log(command);

//Execute the constructed command
exec(command, {encoding: 'utf-8'}, (error: Error | null, stdout: string) => {
    //log the output of the command
    console.log(stdout);
    //check if error during execution
    if (error) {
        throw new Error(`Error executing command: ${error.message}`)
    }
});