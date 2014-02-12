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
* Create a view file in views/home.ejs. Sails uses ejs as its templating engine.
* In the home.ejs file, let's add some code so we can see all the messages that have been displayed

```html
<div class="messages">
 <% messages.forEach(function(message) { %>
  <p><%=message.body%></p>
 <% }); %>
</div>
```



##Step 4: Only allow authenticated workers to post messages
