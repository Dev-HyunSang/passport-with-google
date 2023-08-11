const { Sequelize, DataTypes, UUIDV4 } = require("sequelize");

module.exports = async function(sequelize, DataTypes) {
    const users = sequelize.define("users", {
        user_uuid: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        profile_image: {
            type: DataTypes.STRING(255),
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defalutValue: sequelize.literal('now()')
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defalutValue: sequelize.literal('now()')
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defalutValue: sequelize.literal('now()')
        },
    }, {
        timestamps: false
    });
    return users;
}