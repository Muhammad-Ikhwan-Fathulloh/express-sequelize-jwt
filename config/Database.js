import { Sequelize } from "sequelize"

const db = new Sequelize('skilvul_yia','root','',{
	host: "localhost",
	dialect: "mysql"
})

export default db