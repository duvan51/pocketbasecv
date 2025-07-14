/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1bh0k6huv4s3sa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cng3puvd",
    "name": "field2",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "eapo3q0zgrirqjl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i1bh0k6huv4s3sa")

  // remove
  collection.schema.removeField("cng3puvd")

  return dao.saveCollection(collection)
})
