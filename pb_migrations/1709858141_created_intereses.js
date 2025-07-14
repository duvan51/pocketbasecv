/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v37hsr9z1zo6d9k",
    "created": "2024-03-08 00:35:41.933Z",
    "updated": "2024-03-08 00:35:41.933Z",
    "name": "intereses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ccuekmvh",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v37hsr9z1zo6d9k");

  return dao.deleteCollection(collection);
})
