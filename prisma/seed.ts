import { services } from "@/generated/prisma";
import { prisma } from "@/prisma/prisma-clent";

const mockServices: services[] = [
  {
    id: 0,
    serviceName: "sweatshot",
    uvUrl: "/models/swetshot_background.webp",
    darkModeUvUrl: "swetshot_background.webp",
    textureAspectWidth: 1,
    textureAspectHeight: 1,
    modelUrl: "/models/sweatshot.glb",
    imageUrl: "/carousel/sweatshot-2-carousel.webp",
    description:
      "Создайте свой дизайн свитшота, используя готовые изображения или загрузите свои",
    title: "Свитшот",
  },
  {
    id: 1,
    serviceName: "cup",
    uvUrl: "/models/cup_background.webp",
    darkModeUvUrl: "cup_background.webp",
    textureAspectWidth: 1,
    textureAspectHeight: 1,
    modelUrl: "/models/cup.glb",
    imageUrl: "/carousel/cup-carousel.webp",
    description:
      "Разнообразьте предмет обихода яркими логотипами собственного дизайна",
    title: "Кружка",
  },
  {
    id: 2,
    serviceName: "t-shirt",
    uvUrl: "/models/t-shirt_background.webp",
    darkModeUvUrl: "t-shirt_background.webp",
    textureAspectWidth: 1,
    textureAspectHeight: 1,
    modelUrl: "/models/t-shirt.glb",
    imageUrl: "/carousel/t-shirt-w-carousel.webp",
    description: "Отличный подарок для ваших близких с собственным дизайном",
    title: "Футболка",
  },
  {
    id: 3,
    serviceName: "hoodie",
    uvUrl: "/models/hoodie_background.webp",
    darkModeUvUrl: "hoodie_background.webp",
    textureAspectWidth: 1,
    textureAspectHeight: 1,
    modelUrl: "/models/hoodie.glb",
    imageUrl: "/carousel/hoodie-carousel.webp",
    description:
      "Хотите худи с вашим логотипом? Печать DTG-методом на худи с возможностью выбора цвета",
    title: "Худи",
  },
  {
    id: 4,
    serviceName: "backback",
    uvUrl: "/models/backback_background.webp",
    darkModeUvUrl: "backback_background.webp",
    textureAspectWidth: 1,
    textureAspectHeight: 1,
    modelUrl: "/models/backback.glb",
    imageUrl: "/carousel/backpack-carousel.webp",
    description:
      "Рюкзак с вашим логотипом. Печать DTG-методом на худи с возможностью выбора цвета",
    title: "Рюкзак",
  },
  {
    id: 5,
    serviceName: "shopper",
    uvUrl: "/models/shopper_background.webp",
    darkModeUvUrl: "shopper_background.webp",
    textureAspectWidth: 1,
    textureAspectHeight: 1,
    modelUrl: "/models/shopper.glb",
    imageUrl: "/carousel/shopper-carousel.webp",
    description: "Модный шоппер для ваших покупок. Будьте в тренде везде",
    title: "Шоппер",
  },
];

async function up() {
  await prisma.services.createMany({
    data: mockServices,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "services" CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log("Error while seeding the database", error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Fatal error", e);
    await prisma.$disconnect();
    process.exit(1);
  });
