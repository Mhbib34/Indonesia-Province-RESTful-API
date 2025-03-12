-- CreateTable
CREATE TABLE `provinces` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `code` VARCHAR(20) NULL,
    `capital` VARCHAR(100) NOT NULL,
    `image` VARCHAR(500) NULL,
    `island` VARCHAR(50) NOT NULL,
    `population` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
