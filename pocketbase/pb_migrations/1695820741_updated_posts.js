/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2b1sjzjj",
    "name": "author",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  // remove
  collection.schema.removeField("2b1sjzjj")

  return dao.saveCollection(collection)
})
