import Sweatshot from "@/components/models/Sweatshot";
import Customizer from "@/components/organisms/Customizer";
import { prisma } from "@/prisma/prisma-clent";
import { notFound } from "next/navigation";

interface ProductPageProps {
  product: string;
}
export default async function Product({
  params,
}: {
  params: Promise<ProductPageProps>;
}) {
  let serviceName: string = "";
  await params.then((p) => {
    serviceName = p.product;
  });

  const service = await prisma.services.findFirst({
    where: {
      serviceName,
    },
  });
  
  if (!service) {
    notFound();
  }

  let model: React.ReactNode | undefined;

  switch (serviceName) {
    case "sweatshot": {
      model = <Sweatshot />;
    }
  }
  return (
    <Customizer
      modelProps={{
        model: model,
        uvUrl: service.modelUrl,
        darkModeUvUrl: service.darkModeUvUrl,
        textureAspectWidth: service.textureAspectWidth,
        textureAspectHeight: service.textureAspectHeight,
      }}
    />
  );
}
