-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerId" BIGINT NOT NULL,
    "productId" BIGINT NOT NULL,
    "reviewTitle" TEXT NOT NULL,
    "decription" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending'
);
