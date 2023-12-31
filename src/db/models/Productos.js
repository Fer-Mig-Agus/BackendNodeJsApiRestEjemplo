const {DataTypes}=require("sequelize");

const sequelize=require("../index");

const Productos=sequelize.define("productos",{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    task:{
        type: DataTypes.STRING,
    },
    is_completed:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
},{
    freezeTableName:true,
});

module.exports=Productos;