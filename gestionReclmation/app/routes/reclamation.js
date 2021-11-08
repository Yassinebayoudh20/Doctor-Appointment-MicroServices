module.exports = (app) => {
  const Reclamation = require("../controllers/reclamation.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", Reclamation.createpur);
  router.post("/addDoctorClaim/:idP/:idD", Reclamation.create);

  // Retrieve all Reclamation
  router.get("/", Reclamation.findAll);

  // Retrieve all Reclamation By Type
  //router.get("/:contentId", Reclamation.findAllByType);

  // Retrieve all Reclamation By Type
  router.get("/seanceReclame/:id", Reclamation.teste);

  // Retrieve a single Tutorial with id
  router.get("/:id", Reclamation.findOne);
  // Retrieve a single Tutorial with idDoc
  router.get("/findByIddoc/:id", Reclamation.findOneByIDDoc);

  // Update a Tutorial with id
  router.put("/:id", Reclamation.update);

  // Delete a Tutorial with id
  router.delete("/:id", Reclamation.delete);

  // Create a new Tutorial
  router.delete("/", Reclamation.deleteAll);

  app.use("/api/Reclamation", router);
};
