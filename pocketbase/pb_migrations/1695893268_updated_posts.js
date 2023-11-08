/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  collection.listRule = "@request.auth.id != author.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hgwfevjaon6jvoa")

  collection.listRule = null

  return dao.saveCollection(collection)
})
