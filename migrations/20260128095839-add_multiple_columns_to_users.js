'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */


await queryInterface.addColumn(
  'users',     
  'otp',       
  {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'email'
  }
);

await queryInterface.addColumn(
  'users',
  'otp_expire_at',
  {
    type: Sequelize.DATE,
    allowNull: true,
    after: 'otp'
  }
);





}
export async function down(queryInterface, Sequelize) {
  /**
   * Add reverting commands here.
   *
   * Example:
   * await queryInterface.dropTable('users');
   */
}
