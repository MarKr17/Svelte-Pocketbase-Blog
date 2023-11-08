/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jz1gescs",
    "name": "Likes",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  // remove
  collection.schema.removeField("jz1gescs")

  return dao.saveCollection(collection)
})
