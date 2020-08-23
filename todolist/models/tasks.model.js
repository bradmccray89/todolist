module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      completingid: {
        type: Sequelize.INTEGER
      },
      requestingid: {
        type: Sequelize.INTEGER
      }
    });
  
    return Task;
  };