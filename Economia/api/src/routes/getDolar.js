const { Router } = require("express");
const router = Router();
const { getExchangeRates } = require("./controllers/DolarInfo");
const axios = require("axios");

router.get("/dolar", async (req, res) => {
  try {
    const exchangeRates = await getExchangeRates();
    const officialExchangeRate = exchangeRates.official;
    const blueExchangeRate = exchangeRates.blue;

    res.json({ official: officialExchangeRate, blue: blueExchangeRate });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching exchange rates' });
  }
});

module.exports = router;























// const { Router } = require("express");
// const router = Router();
// const { getAllDogs } = require("./controllers/DogsInfo");
// const axios = require("axios");

// router.get("/dogs", async (req, res) => {
//     const name = req.query.name; //busca si hay un name por query, una constante name que pregunta si hay un name con esta propiedad, lo que pido es lo que me pasen por url //que me traiga los dogs por query es con respecto a lo que escriba en la url, y esa ruta se usa para buscar por nombre-
//     let dogTotal = await getAllDogs();
//     if(name) {
//         let dogName = await dogTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase())) // dentro del filtro le digo, agarra ese nombre, fijate si incluye ese name, o sea lo que le pase por query
//         dogName.length ? //pregunto si encuentro algo aca
//         res.status(200).send(dogName) :
//         res.status(404).send("No esta el dog")
//     } else {
//         res.status(200).send(dogTotal)
//     }
// })

// module.exports = router;
