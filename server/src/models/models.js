const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique:true, allowNull:false },
  password: { type: DataTypes.STRING, allowNull:false  },
})

const Page = sequelize.define('page', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: {type: DataTypes.STRING, allowNull:false }
})

User.hasMany(Page)
Page.hasOne(User)