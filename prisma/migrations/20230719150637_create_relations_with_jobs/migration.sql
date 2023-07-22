-- AlterTable
ALTER TABLE `jobs` ADD COLUMN `companyId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
