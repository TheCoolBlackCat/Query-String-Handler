# Query-String-Handler
A simple snippet to deal convert a query string to an easy to use object

Go to: [About](#about) | [Setup](#setup) | [Usage](#usage) | [Reference](#reference)

### About
This script simply converts this...

    ?name="Tim"&job="coder"&id="123"
    
To this, allowing the values to be easily used...

    query.name = "Tim"
    query.job = "coder"
    query.id = "123"
When I first wanted to use variables from a query string, I thought there must be a built in function or method to grab them.

Apparently not, so I wrote this first for my own use, but then thought I'd share it because of how helpful it might be.

### Setup
#### Method 1: Copy and Paste

    var queryString = location.search.substring(1).split('&');
    var query = {};
    for (var i = 0; i < queryString.length; i++) {
      var temp = queryString[i].split('=');
      query[temp[0]] = temp[1];
    }
    
#### Method 2: Embed the code
Either download or attach the production code found at the URL below

    https://thecoolblackcat.github.io/Query-String-Handler/script.min.js

### Usage
Even though this script creates three variables, you actually only need to reference one object to access values.
See ['Reference'](#reference) below for the complete list of variables

#### To Access Values
    query.name  // = "value"
    query["name"] // = "value"
    
Where 'name' is any variable you are accessing, and 'value' is the value of that variable

**N.B.** The value will ALWAYS be returned as a string

### Reference
The following variables are created by the script
They are listed in the order of their declaration

**queryString** Stores the full length query string as an array, with values that look like ["name=value"]
**query** Initially declared blank, it stores the queries as an object, and has the contents of the query string added to it
**temp** Temporarily stores the values in the loop as an array. For each item, it stores the name at index '0' and the value at index '1'

**N.B.** To find out more about how the code works, refer to the comments in the 'code.js' file

&nbsp;

Go to: [Top](#) | [About](#about) | [Setup](#setup) | [Usage](#usage) | [Reference](#reference)
