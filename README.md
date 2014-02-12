worktalk
==========

A simple SailsJS project

##Step 1: Create your Sails project

```javascript
sails new .
```

##Step 2: Generate the messages scaffolds
Sails.js auto-generates controllers and models for us when we use the `generate` command. Let's use that to create our messages structure.
* Create a messages scaffold (`sails generate messages`)
* Note how both the controller and the model were created (api/controllers/MessagesController.js and api/models/Messages.js)

##Step 3: Test your endpoint, add a schema
* Use postman to POST some messages to your new endpoint. At this point, you can use any attributes you want.
* Add a schema to your messages model. Open Messages.js and do the following:
  * Add some attributes: 'name', 'team', 'body'
  * Before the `attributes`, add the line: `schema: true`. When you're done, your model should resemble this:

```javascript
module.exports = {

 schema: true,

 attributes: {
   ///...your attributes here
 }
};
```

