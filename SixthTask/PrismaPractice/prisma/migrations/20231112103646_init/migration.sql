-- CreateTable
CREATE TABLE "Battery" (
    "id" SERIAL NOT NULL,
    "capacity" SMALLINT NOT NULL,
    "price" MONEY NOT NULL,
    "expirationDate" DATE NOT NULL,
    "brandID" INTEGER NOT NULL,

    CONSTRAINT "Battery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "founded" DATE NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Camera" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "price" MONEY NOT NULL,
    "withStabilisation" BOOLEAN NOT NULL,
    "brandID" INTEGER NOT NULL,
    "resolutionId" INTEGER NOT NULL,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Processor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "brandID" INTEGER NOT NULL,

    CONSTRAINT "Processor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Display" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "brandID" INTEGER NOT NULL,
    "resolutionId" INTEGER NOT NULL,

    CONSTRAINT "Display_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resolution" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "width" SMALLINT NOT NULL,
    "height" SMALLINT NOT NULL,

    CONSTRAINT "Resolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Core" (
    "id" SERIAL NOT NULL,
    "quantity" SMALLINT NOT NULL,
    "frequency" DECIMAL(20,2) NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Core_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Smartphone" (
    "id" SERIAL NOT NULL,
    "model" VARCHAR(20) NOT NULL,
    "batteryId" INTEGER NOT NULL,
    "cameraId" INTEGER NOT NULL,
    "processorId" INTEGER NOT NULL,
    "displayId" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "Smartphone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CoreToProcessor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CoreToProcessor_AB_unique" ON "_CoreToProcessor"("A", "B");

-- CreateIndex
CREATE INDEX "_CoreToProcessor_B_index" ON "_CoreToProcessor"("B");

-- AddForeignKey
ALTER TABLE "Battery" ADD CONSTRAINT "Battery_brandID_fkey" FOREIGN KEY ("brandID") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Camera" ADD CONSTRAINT "Camera_brandID_fkey" FOREIGN KEY ("brandID") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Camera" ADD CONSTRAINT "Camera_resolutionId_fkey" FOREIGN KEY ("resolutionId") REFERENCES "Resolution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Processor" ADD CONSTRAINT "Processor_brandID_fkey" FOREIGN KEY ("brandID") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Display" ADD CONSTRAINT "Display_brandID_fkey" FOREIGN KEY ("brandID") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Display" ADD CONSTRAINT "Display_resolutionId_fkey" FOREIGN KEY ("resolutionId") REFERENCES "Resolution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smartphone" ADD CONSTRAINT "Smartphone_batteryId_fkey" FOREIGN KEY ("batteryId") REFERENCES "Battery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smartphone" ADD CONSTRAINT "Smartphone_cameraId_fkey" FOREIGN KEY ("cameraId") REFERENCES "Camera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smartphone" ADD CONSTRAINT "Smartphone_processorId_fkey" FOREIGN KEY ("processorId") REFERENCES "Processor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smartphone" ADD CONSTRAINT "Smartphone_displayId_fkey" FOREIGN KEY ("displayId") REFERENCES "Display"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smartphone" ADD CONSTRAINT "Smartphone_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoreToProcessor" ADD CONSTRAINT "_CoreToProcessor_A_fkey" FOREIGN KEY ("A") REFERENCES "Core"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoreToProcessor" ADD CONSTRAINT "_CoreToProcessor_B_fkey" FOREIGN KEY ("B") REFERENCES "Processor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
