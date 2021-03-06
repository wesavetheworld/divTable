Description
===========
The **divTable** is a javascript based HTML div table. 
It provide the possibility to inline edit your rows with input fields and selectors.

####_Easy to define, powerful to use!_

#####[Try Me](https://thegr8nik.github.io/divTable/)
How use divTable
================

##1. Include the source in the html file
  ```HTML
<link rel="stylesheet" type="text/css" href="css/divTable.css"/>
<script type="text/javascript" src="js/divTable.js" ></script>
```
##2. Define the size of the table and of the columns
  ```CSS
#tableTest {
  width  : 100%;
  height : 300px;
}

.cell-0, .cell-1, .cell-2, .cell-3, .cell-4 {
  width : 20%;
}
```

##3. Initialize your table
  ```javascript
var table,
  table_test  = document.getElementById( 'tableTest' );

table = divTableMaker( table_test, {
  columns : [
    { name : 'text',           text : 'Text',            edit : 'text'                                },
    { name : 'number',         text : 'Number',          edit : 'number'                              },
    { name : 'select',         text : 'Select',          edit : [ '0', '1', '2' ]                     },
    { name : 'advancedSelect', text : 'Advanced Select', edit : {1: 'first', 2: 'second', 3: 'third'} },
    { name : 'checkbox',       text : 'Checkbox',        edit : 'checkbox'                            }	]
});
```

##4. Enjoy your table!

![Image of div table](https://github.com/TheGr8Nik/divTable/blob/master/images/example.png)


#Advanced Topics
##1. Advanced edit
```javascript
advancedEdit : {
  hide   : [],
  edit   : {},
  depend : 'select',
  values : [{
    value : '0',
    hide  : [ 'checkbox' ],
  },{
    value : '1',
    hide  : [ 'number', 'text' ],
    edit  : {
      'checkbox' : [ '1', '2', '3', '4', '5' ]
    }
  }]
}
```
