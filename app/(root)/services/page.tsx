import LockedState from "@/components/atoms/LockedState";
import Container from "@/components/organisms/Container";
import Footer from "@/components/organisms/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/prisma/prisma-clent";
import Image from "next/image";
import Link from "next/link";

export default async function Services() {
  const services = await prisma.services.findMany();

  return (
    <>
      <main>
        <Container className="py-7 px-2">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center text-header">
            Наши сервисы
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 mx-5">
            {services.map((service) => (
              <Card
                key={service.service_name}
                className={
                  "flex flex-col col-span-1 hover:bg-accent transition-all duration-150 cursor-pointer relative" +
                  (service.is_available
                    ? " hover:scale-105"
                    : " pointer-events-none")
                }
              >
                {!service.is_available && (
                  <LockedState reason="Функция в разработке" />
                )}
                <Link href={`/services/${service.service_name}`}>
                  <CardContent>
                    <Image
                      src={service.image_url || ""}
                      alt={service.service_name}
                      width={400}
                      height={400}
                      className="w-full rounded-md aspect-[4/3.5] object-cover"
                    />
                    <h2 className="text-lg font-semibold mt-2 text-header">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium mt-2 text-info">
                      {service.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
