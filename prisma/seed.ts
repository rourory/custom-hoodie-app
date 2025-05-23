import { services } from "@/generated/prisma";
import { prisma } from "@/prisma/prisma-clent";

const mockServices: services[] = [
  {
    id: 0,
    service_name: "sweatshot",
    uv_url: "/models/sweatshot-background.png",
    texture_aspect_width: 1,
    texture_aspect_height: 1,
    model_url: "/models/sweatshot.glb",
    image_url: "/carousel/sweatshot-2-carousel.webp",
    description:
      "Создайте свой дизайн свитшота, используя готовые изображения или загрузите свои",
    title: "Свитшот",
    is_available: true,
    icon_url: "/icons/sparkles.svg",
  },
  {
    id: 1,
    service_name: "cup",
    uv_url: "/models/cup_background.webp",
    texture_aspect_width: 1,
    texture_aspect_height: 1,
    model_url: "/models/cup.glb",
    image_url: "/carousel/cup-carousel.webp",
    description:
      "Разнообразьте предмет обихода яркими логотипами собственного дизайна",
    title: "Кружка",
    is_available: true,
    icon_url: "/icons/coffee.svg",
  },
  {
    id: 2,
    service_name: "t-shirt",
    uv_url: "/models/t-shirt_background.webp",
    texture_aspect_width: 1,
    texture_aspect_height: 1,
    model_url: "/models/t-shirt.glb",
    image_url: "/carousel/t-shirt-w-carousel.webp",
    description: "Отличный подарок для ваших близких с собственным дизайном",
    title: "Футболка",
    is_available: false,
    icon_url: "/icons/t-shirt.svg",
  },
  {
    id: 3,
    service_name: "hoodie",
    uv_url: "/models/hoodie_background.webp",
    texture_aspect_width: 1,
    texture_aspect_height: 1,
    model_url: "/models/hoodie.glb",
    image_url: "/carousel/hoodie-carousel.webp",
    description:
      "Хотите худи с вашим логотипом? Печать DTG-методом на худи с возможностью выбора цвета",
    title: "Худи",
    is_available: false,
    icon_url: "/icons/star.svg",
  },
  {
    id: 4,
    service_name: "backback",
    uv_url: "/models/backback_background.webp",
    texture_aspect_width: 1,
    texture_aspect_height: 1,
    model_url: "/models/backback.glb",
    image_url: "/carousel/backpack-carousel.webp",
    description:
      "Рюкзак с вашим логотипом. Печать DTG-методом на худи с возможностью выбора цвета",
    title: "Рюкзак",
    is_available: false,
    icon_url: "/icons/backpack.svg",
  },
  {
    id: 5,
    service_name: "shopper",
    uv_url: "/models/shopper_background.webp",
    texture_aspect_width: 1,
    texture_aspect_height: 1,
    model_url: "/models/shopper.glb",
    image_url: "/carousel/shopper-carousel.webp",
    description: "Модный шоппер для ваших покупок. Будьте в тренде везде",
    title: "Шоппер",
    is_available: false,
    icon_url: "/icons/banknote.svg",
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
