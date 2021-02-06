(async () => {
    const db = require('./database/db-config')
    const interactionDB = require('./database/db-interactions')

    console.log('ok')

    await interactionDB.deleteCar(4)

    const cars = await interactionDB.selectCars()
    console.log(cars)
})()
