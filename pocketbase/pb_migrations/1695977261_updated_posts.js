/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  collection.createRule = "@request.auth.id = author.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  collection.createRule = null

  return dao.saveCollection(collection)
})
