import { Sequelize } from "sequelize";
import { DataTypes } from 'sequelize'; 

import db from "../config/db.js";
// import Roles from "./RolesModel.js";

const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  refresh_token: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true
  }, 
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  created_by: {
    type: DataTypes.STRING(50),
    allowNull: true 
  },
  modified_by: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "modified_at",
    tableName: "users",
});

const Roles = db.define('Roles', { 
  role_name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'roles', // Ganti dengan nama tabel Anda
  timestamps: false
});

const UserRole = db.define('UserRole', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: 'id'
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Roles,
        key: 'id'
      }
    }
  }, {
    tableName: 'user_roles', // Ganti dengan nama tabel penghubung Anda
    timestamps: false
  });

Users.belongsToMany(Roles, { through: UserRole, foreignKey: 'userId' });
Roles.belongsToMany(Users, { through: UserRole, foreignKey: 'roleId' });

export default {Users, Roles, UserRole};
// Path: backend/models/UsersModel.js