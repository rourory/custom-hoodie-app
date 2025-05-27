-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "service_name" VARCHAR(255) NOT NULL,
    "uv_url" VARCHAR(255) NOT NULL,
    "texture_aspect_width" SMALLINT NOT NULL,
    "texture_aspect_height" SMALLINT NOT NULL,
    "model_url" VARCHAR(255) NOT NULL,
    "image_url" VARCHAR(255),
    "description" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "is_available" BOOLEAN NOT NULL,
    "icon_url" VARCHAR(255),

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_categories" (
    "id" SERIAL NOT NULL,
    "categoryName" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "stock_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_images" (
    "id" SERIAL NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "compressedImageUrl" VARCHAR(255) NOT NULL,
    "category" SMALLINT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "stock_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stock_images" ADD CONSTRAINT "fk_stock_images_stock_categories" FOREIGN KEY ("category") REFERENCES "stock_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
