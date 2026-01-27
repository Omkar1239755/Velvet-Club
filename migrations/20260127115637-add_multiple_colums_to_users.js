'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {


  await queryInterface.addColumn('users', 'dob', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'looking_for'
  });


  await queryInterface.addColumn('users', 'height', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'dob'
  });



  await queryInterface.addColumn('users', 'weight', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'height'
  });



  await queryInterface.addColumn('users', 'body_type', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'weight'
  });


  await queryInterface.addColumn('users', 'hair_color', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'body_type'
  });



  await queryInterface.addColumn('users', 'eye_color', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'hair_color'
  });


  await queryInterface.addColumn('users', 'nationality', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'eye_color'
  });


  await queryInterface.addColumn('users', 'region', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'nationality'
  });


  await queryInterface.addColumn('users', 'city', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'region'
  });


  await queryInterface.addColumn('users', 'sexuall_orientation', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'city'
  });



  await queryInterface.addColumn('users', 'education', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'sexuall_orientation'
  });


  await queryInterface.addColumn('users', 'field_of_work', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'education'
  });


  await queryInterface.addColumn('users', 'relation_Status', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'field_of_work'
  });


  await queryInterface.addColumn('users', 'smoking', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'relation_Status'
  });


  await queryInterface.addColumn('users', 'drinking', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'smoking'
  });

  await queryInterface.addColumn('users', 'tatto', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'drinking'
  });



  await queryInterface.addColumn('users', 'about_me', {
    type: Sequelize.STRING,
    allowNull: true,
    after: 'tatto'
  });



}
export async function down(queryInterface, Sequelize) {
}
