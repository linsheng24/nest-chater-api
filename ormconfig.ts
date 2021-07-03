// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10) || 3306,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/entities/*.entity{.ts,.js}'],
  synchronize: true,
};
