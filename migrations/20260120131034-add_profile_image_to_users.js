'use strict';

import { default as sequelize } from '../config/db.js';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.addColumn('users', 'profile_image', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'password'
  });
}
export async function down(queryInterface, Sequelize) {
}
