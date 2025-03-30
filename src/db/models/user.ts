import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

export interface UserAttributes {
    id: number;
    name: string;
    balance: number;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export const User = sequelize.define<UserInstance>('User', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    balance: {
        type: DataTypes.NUMBER,
        allowNull: true,
        validate: {
            min: 0,
        },
    },
});
