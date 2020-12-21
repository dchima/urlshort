module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define(
    'Url',
    {
      initial_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url_short: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Url.associate = () => {

  };
  return Url;
};
