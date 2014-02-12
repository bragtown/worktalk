worktalk
==========

A simple SailsJS project

##Step 1: Create your Sails project

```javascript
sails new .
```

##Step 2: Generate the messages scaffolds
Sails.js auto-generates controllers and models for us when we use the `generate` command. Let's use that to create our messages structure.
* Create a message scaffold (`sails generate message`)
* Note how both the controller and the model were created (api/controllers/MessageController.js and api/models/Message.js)
* Use postman to POST some messages to your new endpoint. At this point, you can use any attributes you want. (Also, make sure your server is running)

##Step 3: Create a custom route and view
We have an auto-generated API, but let's create a simple view so we can see our data.
* Let's start by creating a controller called HomeController.

```javascript
sails generate controller home
```
* Open up the generated controller in api/controllers/HomeController.js
* Add an `index` method. Sails is built on express, and each of the controller's methods will expect a request and response parameter, just like Express does.
* Let's render a view.

```javascript
index: function(req, res) {
  res.view('home');
}
```
* Create a view file at views/home.ejs. Sails uses ejs as its templating engine.
* In the home.ejs file, let's add some code so we can see all the messages that have been displayed

```html
<div class="messages">
 <% messages.forEach(function(message) { %>
  <p><%=message.body%></p>
 <% }); %>
</div>
```
* Notice the tags that are particular to ejs. These are obviously very different from the syntax that Angular uses.
* In order for our view to work, let's send the messages to the view function back in our controller. Use the [`find`](http://sailsjs.org/#!documentation/models) method of the Message model, then use the promise's success method to render the view.

```javascript
index: function(req, res) {
  Message.find().success(function(messages) {
    res.view('home', {messages: messages});
  }
}
```
* Test your new view and controller in the browser

##Step 4: Only allow authenticated workers to post messages
This has been fast and easy, but let's take it one step futher. You only want certain people to be able to post messages. Let's make a new policy file that will limit who can POST messages to our API.
* Create a file at api/policies/isEmployee.js
* Model your file after what is at api/policies/isAuthenticated.js (you can copy the text over to start with if you'd like)
* Notice the `next()` function. Just like with Express, this middleware allows us to preform some logic before a request is processed at the controller level. We can intervene if we don't like what the request contains (or doesn't contain).
* Let's use an if statement to check and see if the request has a query param named "employee_id." If it doesn't, let's return "forbidden." See the isAuthenticated policy file for reference.
* Add the policy to the config/policies.js

```javascript
  '*': true,
  MessageController: {
    '*': ['isEmployee'],
    'index': true
  }
```
* Now test POSTing messages. You now have to include an employee_id parameter in the query string in order to POST anything.
