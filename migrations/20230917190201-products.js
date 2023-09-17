'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('products', {
    "id": {
      "type":"int",
      "primaryKey": true,
      "autoIncrement": true,
      "unsigned": true
    },
    "name":{
      "type":"string",
      "length": 100,
      "notNull": true
    },
    "description":{
      "type":"string",
      "length": 1000,
      "notNull": true
    },
    "price":{
      "type":"int",
      "unsigned": true,
      "notNull": true
    },
    "modified":{
      "type":"datetime",
      "notNull": true,
      "defaultValue": new String('CURRENT_TIMESTAMP')
    }
  })
};

exports.down = function(db) {
  return db.dropTable('products');
};

exports._meta = {
  "version": 1
};
