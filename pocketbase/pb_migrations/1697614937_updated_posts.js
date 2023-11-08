/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prodbl6f",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Cooking",
        "Travel",
        "Finance",
        "Gaming",
        "Fashion",
        "Make-up"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prodbl6f",
    "name": "category",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Cooking",
        "Travel",
        "Finance",
        "Gaming",
        "Fashion",
        "Make-up"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
