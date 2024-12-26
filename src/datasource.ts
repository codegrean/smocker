import { DataSource } from 'typeorm';
import 'dotenv/config';

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  entities: ['src/**/entities/*.entity.{ts,js}'],
  migrations: ['src/migration/**/*.{ts,js}'],
  ssl:
    process.env.DATABASE_DISABLE_CERT === 'true'
      ? false
      : {
          rejectUnauthorized: true,
          ca: process.env.DATABASE_CA_CERT,
        },
});