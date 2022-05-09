/*
  Warnings:

  - The values [insum] on the enum `Category_type` will be removed. If these variants are still used in the database, this will fail.
  - The values [insum] on the enum `Transaction_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `type` ENUM('expense', 'income') NOT NULL;

-- AlterTable
ALTER TABLE `transaction` MODIFY `type` ENUM('expense', 'income') NOT NULL;
