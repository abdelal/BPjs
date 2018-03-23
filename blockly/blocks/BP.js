'use strict';

goog.provide('Blockly.Blocks.BP');

goog.require('Blockly.Blocks');
goog.require('Blockly');

/** @export */ Blockly.Msg.BPThread = "BPThread";
Blockly.Constants.Colour.HUE = 15;
/** @deprecated Use Blockly.Constants.Colour.HUE */



Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for text value
  {
    "type": "varnottxt",
    "message0": "%1",
    "args0": [{
      "type": "field_input",
      "name": "TEXT",
      "text": ""
    }],
    "output": "String",
    "colour": "%{BKY_BP_HUE}",
    "helpUrl": "%{BKY_TEXT_TEXT_HELPURL}",
    "tooltip": "%{BKY_TEXT_TEXT_TOOLTIP}",
    "extensions": [
      "text_quotes",
      "parent_tooltip_when_inline"
    ]
  }]);

/*   this.setOutput(true, null);*/

Blockly.Blocks['Bthread'] = {
   init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("BthreadName");
    this.appendValueInput("procedure")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("CallBack");
      this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bsync'] = {
   init: function() {
    this.appendValueInput("reqtype")
      //  .setCheck("reqtype","json_create_with")
        .appendField("bsync");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['BPlog'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("Log")
         .appendField(new Blockly.FieldDropdown([["fine","\"fine\""], ["info","\"info\""], ["warn","\"warn\""], ["off","\"off\""]]), "NAME");
   this.appendValueInput("Message")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['assignvalue'] = {
  init: function() {
    this.appendDummyInput("varname")
        .appendField(new Blockly.FieldTextInput("varname"), "varname");
        this.appendDummyInput("operator")
  	          .appendField(new Blockly.FieldDropdown([["=","="],["+","+"],["-","-"],["*","*"],["/","/"],[":",":"]]), "operator");
    this.appendValueInput("value")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
        this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Colour.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['BPlogLevel'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("Log Level")
        .appendField(new Blockly.FieldDropdown([["fine","\"fine\""], ["info","\"info\""], ["warn","\"warn\""], ["off","\"off\""]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['event'] = {
  init: function() {
    this.appendValueInput("nameoftheevent")
        .setCheck("String")
        .appendField("Event's Name");
    this.appendValueInput("data")
        .setCheck(null)
        .appendField("Data");
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['eventwrapper'] = {
  init: function() {
  	 this.appendDummyInput("evtype")
  	    .appendField("Event Wrapper")
        .appendField(new Blockly.FieldDropdown([["interrupt","interrupt"],["request","request"], ["waitFor","waitFor"], ["block","block"]]), "Type");

    this.appendValueInput("event")
        .setCheck("event");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['callback'] = {
  init: function() {
  	  this.appendValueInput("functionname")
        .setCheck(null)
         .appendField("functionName")
    this.setInputsInline(false);
        this.appendValueInput("variable")
        .setCheck(null)
        .appendField("vars");
     this.appendValueInput("localvariables")
          .appendField("local Variables")
        .setCheck(["Array","String"]);
    this.setInputsInline(false);
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("CallBack");
              this.appendValueInput("returns")
        .setCheck(null)
        .appendField("return");
          this.setOutput(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};





Blockly.Blocks['jsonfield'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("String");
    this.appendValueInput("value")
        .setCheck(null);
    this.setInputsInline(true);
     this.setOutput(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['varField'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("String");
    this.appendValueInput("value")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
        this.setInputsInline(true);
    this.setColour(Blockly.Constants.Colour.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['json_create_with'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Constants.Colour.HUE );
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Json');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField("empty json");
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          input.appendField(Blockly.Msg.JSON_CREATE_WITH_INPUT_WITH);
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['InterruptHandler'] = {
  init: function() {
    this.appendStatementInput("body")
        .setCheck(null)
        .appendField("InterruptHandler");
    //      this.setOutput(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['randomBool'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RandomBoolean")
    this.setOutput(true, null);

    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['randomFloat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("randomFloat")
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['randomint'] = {
  init: function() {
    this.appendValueInput("int")
        .appendField("randomint")
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['getTime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GetTime")
    this.setOutput(true, null);

    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['Date'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Date")
    this.setOutput(true, null);

    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['externalevent'] = {
   init: function() {
    this.appendValueInput("reqtype")
      //  .setCheck("reqtype","json_create_with")
        .appendField("enqueue External Event");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['eventSet'] = {
   init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("EventSetName");
    this.appendValueInput("procedure")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("predicate");
      this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Constants.Colour.HUE );
 this.setTooltip("somthing something something");
 this.setHelpUrl("");
  }
};