const db = require('./db-config')


const interactions = {
    async selectCars(){
        const conn = await db.connect()
        const [rows] = await conn.query('SELECT * FROM cars;')
        return rows
    },

    async insertCar(car){
        const conn = await db.connect()
        const sql = `INSERT INTO cars(model, brand, image) VALUES (?, ?, ?);`
        const values = [car.model, car.brand, car.image]
        await conn.query(sql, values)
    },

    async updateCar(id, car){
        const conn = await db.connect()
        const sql = 'UPDATE cars SET model=?, brand=?, image=? WHERE id=?'
        const values = [car.model, car.brand, car.image, id]
        await conn.query(sql, values)
    },

    async deleteCar(id){
        const conn =await db.connect()
        const sql = 'DELETE FROM cars WHERE id=?'
        await conn.query(sql, [id])
    }
}




module.exports = interactions




