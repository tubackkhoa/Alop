import { sequelize, DataTypes } from 'models/config'

export default sequelize.define("users", {    
  id         : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },    
  email : DataTypes.STRING,
  username : DataTypes.STRING,
  name: DataTypes.STRING,
  encrypted_password : DataTypes.STRING,
  phone : DataTypes.STRING,
  login_type: DataTypes.ENUM('local','facebook','google'), 
  user_type: DataTypes.ENUM(1,2), 
  avatar: DataTypes.STRING,
  // login_token: DataTypes.STRING,
  block: DataTypes.BOOLEAN,
}, {
  createdAt: 'registered_at',
  updatedAt: 'updated_at',
})

