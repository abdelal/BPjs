'use strict';

goog.provide('Blockly.JavaScript.BP');

/*anchor*/
Blockly.JavaScript['bsync'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'reqtype');

  if(msg.startsWith('{'))
      var code ='bsync(' + msg +');\n';
  else 
  var code ='bsync({' + msg +'});\n';
   //  code = code.replace(/'/g,"");
     return code
};

Blockly.JavaScript['Bthread'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
    var msg2 = Blockly.JavaScript.valueToCode(block, 'NAME',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var branch = Blockly.JavaScript.statementToCode(block, 'procedure');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);

  return 'bp.registerBThread(' + msg2 +","+branch+ ');\n';
};


Blockly.JavaScript['event'] = function(block) {
  var nameoftheevent = Blockly.JavaScript.valueToCode(block, 'nameoftheevent');
  var flag=true;
  var data = Blockly.JavaScript.valueToCode(block, 'data');
  // TODO: Assemble JavaScript into code variable.
  //TODO: check if data is null or not 
  if (data=='')
    flag=false;
  if (flag)
  var code = 'bp.Event(' +nameoftheevent +","+ data+")";
 else 
   var code = 'bp.Event(' +nameoftheevent +")";
   return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



function allnull(arr){
  var flag=false;
  var index=-1;
  for (var i = 0; i <arr.length ; i++) {
    if (!flag){
      if (arr[i]!=="null"&&arr[i]!==" null"){
      flag=true;
      index=i;
      break;
    }}}
  return index;
};


Blockly.JavaScript['callback'] = function(block) {
 var branch;
 var code;
  var functionName = Blockly.JavaScript.valueToCode(block, 'functionname');
    var variables = Blockly.JavaScript.valueToCode(block, 'variable');
      var localvariables = Blockly.JavaScript.valueToCode(block, 'localvariables');
  var branch = Blockly.JavaScript.valueToCode(block, 'body');
  var value_returns = Blockly.JavaScript.valueToCode(block, 'returns');
  variables=variables.replace(/'/g,"");
 functionName=functionName.replace(/'/g,"");

  localvariables = localvariables.replace(/]/g,"");
  localvariables = localvariables.replace(/'/g,"");
  localvariables = localvariables.replace(/\[/g,"");
  localvariables = localvariables.replace(/\xa0/g,"");
  //  value_variable = value_variable.replace(/]/g,"");
  var value_variable=localvariables.split(",");
  var flag=true;
  var locvars="var ";
  var first=allnull(value_variable);
  if (localvariables==""||first==(-1)){
    locvars="";
  }
  else

  for (var i = first; i <value_variable.length ; i++) {
     if (value_variable[i]!=="null"&&value_variable[i]!==" null")
    if (flag){
      if (value_variable[i]!=="null"&&value_variable[i]!==" null"){
      locvars=locvars+value_variable[i]
      flag=false;

    }
  }
    else 
      if (value_variable[i]!=="null"&&value_variable[i]!==" null")
      locvars=locvars+","+value_variable[i];

    if(i==value_variable.length-1)
      locvars=locvars+';';
  }
try{
   branch= Blockly.JavaScript.statementToCode(block, 'body');
}
catch(err){
branch = Blockly.JavaScript.valueToCode(block, 'body');
}
  if(value_returns!="")
 code = "function "+  '('+ variables +'){'+ "\n"+locvars+"\n"+branch+'\nreturn '+ value_returns + '\n}';
 
 if(value_returns=="")
   code = "function "+ functionName+ '('+ variables +'){'+ "\n"+"\n" +locvars +"\n"+branch+ '\n}';

   //code = code.replace(/'/g,"");
  return code;
};





Blockly.JavaScript['json_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
        Blockly.JavaScript.ORDER_COMMA) || 'null';
  }
  var code = '{' + elements.join(',') + '}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['jsonfield'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'variable');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  value_variable=value_variable.replace(/'/g,"");
  var code = value_variable+':'+value_value;
  return  [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['eventwrapper'] = function(block) {
  var value_event = Blockly.JavaScript.valueToCode(block, 'event');
    var dropdown_type = block.getFieldValue('Type');
  var code = dropdown_type+':'+ value_event;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['BPlog'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_message = Blockly.JavaScript.valueToCode(block, 'Message', Blockly.JavaScript.ORDER_ATOMIC);
 dropdown_name=dropdown_name.replace(/\"/g,"");
 // if(dropdown_name=="Off")
    if(value_message.startsWith('('))

      var code = 'bp.log.'+ dropdown_name+ ''+value_message+';';
      else
    var code = 'bp.log.'+dropdown_name + '('+ value_message+');';

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['BPlogLevel'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
  var code = 'bp.log.setLevel('+dropdown_name+');'
 
  return[code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['varField'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'variable');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  value_variable=value_variable.replace(/'/g,"");
  var code = value_variable+'='+value_value+'';
  return  [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['varnottxt'] = function(block) {
  // Text value.
  var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  code = code.replace(/'/g,"");
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['assignvalue'] = function(block) {
  // Text value.
  var code = Blockly.JavaScript.quote_(block.getFieldValue('varname'));
    code = code.replace(/'/g,"");
   var dropdown_name = block.getFieldValue('operator');
   var value_variable = Blockly.JavaScript.valueToCode(block, 'value');
   code=code+dropdown_name+value_variable+"";
//  code = code.replace(/'/g,"");
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['InterruptHandler'] = function(block) {
  // Text value.

  var branch;
var code="";
  try{
   branch= Blockly.JavaScript.statementToCode(block, 'body');
}
catch(err){
branch = Blockly.JavaScript.valueToCode(block, 'body');
}
//  code = code.replace(/'/g,"");

code = "setInterruptHandler(function(evt) {\n" + branch+ "\n}"
  return code;
};


  Blockly.JavaScript['randomBool'] = function(block) {
  var code = "bp.random.nextBoolean()";
  return  [code, Blockly.JavaScript.ORDER_ATOMIC];
};

  Blockly.JavaScript['randomFloat'] = function(block) {
  var code = "bp.random.nextFloat()";
  return  [code, Blockly.JavaScript.ORDER_ATOMIC];
};


  Blockly.JavaScript['randomint'] = function(block) {
var int = Blockly.JavaScript.valueToCode(block, 'int');

  var code = "bp.random.nextInt("+ int +")";
  return  [code, Blockly.JavaScript.ORDER_ATOMIC];
};

  Blockly.JavaScript['getTime'] = function(block) {
  var code = "bp.getTime()";
  return  [code, Blockly.JavaScript.ORDER_ATOMIC];
};
  Blockly.JavaScript['Date'] = function(block) {
  var code = "new Date(bp.getTime())";
  return  [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['externalevent'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'reqtype');

  var code ='bp.enqueueExternalEvent(' + msg +');\n';
   //  code = code.replace(/'/g,"");
     return code
};


Blockly.JavaScript['eventSet'] = function(block) {
  // Print statement.
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
    var msg2 = Blockly.JavaScript.valueToCode(block, 'NAME',
      Blockly.JavaScript.ORDER_NONE) || '\'\'';
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var branch = Blockly.JavaScript.statementToCode(block, 'procedure');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);

  return 'bp.EventSet(' + msg2 +","+branch+ ');\n';
};
