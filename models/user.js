'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_uuid: DataTypes.UUID,
    auth_id: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    profile_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};