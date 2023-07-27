-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `quantityEmployee` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `road` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `description_text` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `companies_cnpj_key`(`cnpj`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jobs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `job_title` VARCHAR(191) NOT NULL,
    `job_companyId` INTEGER NOT NULL,
    `job_quantity` VARCHAR(191) NOT NULL,
    `technologies` VARCHAR(191) NOT NULL,
    `salary` VARCHAR(191) NOT NULL,
    `modality` VARCHAR(191) NOT NULL,
    `seniority` VARCHAR(191) NOT NULL,
    `requirements` VARCHAR(191) NOT NULL,
    `details` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_job_companyId_fkey` FOREIGN KEY (`job_companyId`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
