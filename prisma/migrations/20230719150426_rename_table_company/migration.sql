/*
  Warnings:

  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `employees`;

-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `quantityEmployee` INTEGER NULL,
    `email` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `road` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `companies_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
