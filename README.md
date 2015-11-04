# angular-intro
Questions
-Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
Because employers are hiring more Angular developers over other frameworks
-People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
It's a framework that wasn't originally intended to assist developers, contains serious DOM performance problems and wasn't optimized to support its own mobile platform. Also, the Angular documentation is incredibly thin – meaning it briefly covers every topic – and suffers from a lack of code examples.
-Is Angular an MVC framework?
It is MVC-like
-Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
ng-app: This directive defines and links an AngularJS application to HTML
-What does ng-model do?
This directive defines the model that is variable to be used in AngularJS.
The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive
-What is "dirty checking"?
Dirty checking is a simple process that boils down to a very basic concept: It checks whether a value has changed that hasn’t yet been synchronized across the app.
-What are those {{ }} expressions? Are they Handlebars?
They are not Handlebars. They are Angular bindings
-Explain what two-way data binding is.
Data-binding in Angular apps is the automatic synchronization of data between the model and view components.
-What are Angular expressions?
AngularJS expressions binds data to HTML the same way as the ng-bind directive. AngularJS will "output" data exactly where the expression is written. AngularJS expressions are much like JavaScript expressions: They can contain literals, operators, and variables.
-What happens when you write invalid code in an expression?
No error occurs, but you'll see the brackets appear
-What are Angular filters? 
Filters are simply bits of code that format data before displaying it.
four built-in filters: lowercase, uppercase, number, json
-What's the syntax for filters?
{{expression | filter}}
-Can you use more than one filter?
Yes it's called chaining
-What is a use case for a custom filter?
can build a filter to manipulate an entire data set












