"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1723714042793 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1723714042793 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "first_name",
                    type: "varchar",
                },
                {
                    name: "last_name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUsers1723714042793 = CreateUsers1723714042793;
//# sourceMappingURL=1723714042793-create_users.js.map