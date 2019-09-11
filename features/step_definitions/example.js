/**
  *
*/

/**
 * @author 
 * @file example.js
 * @description file with the code to execute the feature´s instructions
 */

//Definition of the constants that we are going to use to manage standardization and good practices 
const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const test = require ('../../selectors/test.json');
const { APP_URL } = require ('../../Config.js');
const {sumar} = require ('../../utilities/helper.js')
const { IdSearchForm } = require ('../../Config.js')

Given(/^I open Google's search page$/, () => {
  //Example using constant to calculate the queue time of an element. The constant "sumar", is a function created in the file helper.js 
  const waitMiliseconds = sumar(500,500);
  //You can also see that the URL works with a configuration variable, defined in the Config.js file.
  return client.url( APP_URL ).waitForElementVisible('body', waitMiliseconds);
  //The usual way to write that line would be:
  //return client.url( APP_URL ).waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^the Google "([^"]*)" exists$/, form => {
  console.log(form)
  console.log(test)
  //Since the local variable "form" adopts the text "search_form" according to the feature, we can also use these keywords
  //to create variables that encapsulate the value of the ids of the elements we require from the window.
  console.log(test[form])
  // "form" contains the text "search_form", and that text, in turn, alludes to an element defined in a json called "test.json".
  return client.assert.visible(test[form]);
});

Then(/^I write the word "([^"]*)" in the search form$/, word => {
  //using the id directly in the function:
  //return client.setValue('input[name="q"]', word)
  //Using the id in a configuration variable looks like this:
  return client
    .setValue(IdSearchForm, word)
    .pause(2000);
});
