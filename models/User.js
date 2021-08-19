module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        profession:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        avatar:{
            type:DataTypes.STRING,
            allowNull:true
        },
        role:{
            type:DataTypes.ENUM,
            values:['admin','student'],
            allowNull:false,
            defaultValue:'student'

        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        createdAt:{
            field:'created_at',
            type:DataTypes.DATE,
            allowNull:false
        },
        updatedAt:{
            field:'updated_at',
            type:DataTypes.DATE,
            allowNull:false
        }
    },{
        tabelName:'users',
        timestamps:true
    });

    return User;
}