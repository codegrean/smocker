"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    entities: ['src/**/entities/*.entity.{ts,js}'],
    migrations: ['src/migration/**/*.{ts,js}'],
    ssl: process.env.DATABASE_DISABLE_CERT === 'true'
        ? false
        : {
            rejectUnauthorized: true,
            ca: process.env.DATABASE_CA_CERT,
        },
});
//# sourceMappingURL=datasource.js.map