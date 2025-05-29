import PageTextInfoBlock from "@/components/atoms/PageTextInfoBlock";
import Container from "@/components/organisms/Container";
import Footer from "@/components/organisms/Footer";
import MainPageCarousel from "@/components/organisms/MainPageCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Container className="py-7 px-2">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-header">
            Printique
          </h1>
          <div className="lg:h-[54vh] mt-2 md:mt-5">
            <Image
              className="rounded-lg h-[100%] object-contain"
              src={"/images/3.webp"}
              width={1280}
              height={720}
              alt={"main-page-intro"}
            />
          </div>

          <PageTextInfoBlock
            title="Создай свой уникальный дизайн"
            text="В нашем интернет-магазине вы можете найти все необходимое для
              создания уникальных дизайнов одежды, многого другого и заказать их
              в любом размере."
          />
          <div className="flex justify-center mt-7">
            <Link href={"/services"}>
              <Button
                variant={"default"}
                className="text-md lg:text-xl font-medium w-[55vw] max-w-[500px] cursor-pointer"
              >
                Перейти к сервисам
              </Button>
            </Link>
          </div>
        </Container>
        <MainPageCarousel />
        <Container className="px-2">
          <PageTextInfoBlock
            title="Используй современные технологии"
            text="Все, что нужно для вашего собственного изделия - это воспользоваться удобным веб-интерфейсом, созданным специально для вас."
          />
          <div className="lg:h-[54vh] mt-5 md:mt-10">
            <Image
              className="rounded-lg h-[100%] object-contain"
              src={"/images/5.webp"}
              width={1280}
              height={720}
              alt={"main-page-intro"}
            />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
