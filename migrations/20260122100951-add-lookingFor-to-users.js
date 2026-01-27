'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.addColumn('users', 'looking_for', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'gender'
  });
}
export async function down(queryInterface, Sequelize) {
}
