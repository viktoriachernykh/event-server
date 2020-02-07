const { Router } = require("express");
const Event = require("./model");
// const Vent = require("../vent/model");

const router = new Router();

router.post("/event", async function(request, response, next) {
  try {
    const event = await Event.create(request.body);
    response.send(event);
  } catch (error) {
    next(error);
  }
});

router.get("/event", async (request, response, next) => {
  try {
    const events = await Event.findAll();
    // ({
    //   include: [Vent]
    // });
    response.send(events);
  } catch (error) {
    next(error);
  }
});

router.get("/event/:id", async (request, response, next) => {
  try {
    const event = await Event.findByPk(request.params.id);
    // const event = await Event.findByPk(request.params.id, { include: [Vent] });
    response.send(event);
  } catch (error) {
    next(error);
  }
});

router.put("/event/:id", (request, response, next) =>
  Event.findByPk(request.params.id)
    .then(event => event.update(request.body))
    .then(event => response.send(event))
    .catch(next)
);

router.delete("/event/:id", (request, response, next) =>
  Event.destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
);

module.exports = router;
