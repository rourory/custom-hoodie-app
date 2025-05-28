import Sweatshot from "@/components/models/Sweatshot";
import Mug from "@/components/models/Mug";
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
      service_name: serviceName,
    },
  });

  if (!service) {
    notFound();
  }

  let model: React.ReactNode | undefined;
  
  switch (service.service_name) {
    case "sweatshot": {
      model = <Sweatshot />;
      break;
    }
    case "mug": {
      model = <Mug />;
      break;
    }
  }

  if (!model) {
    notFound();
  }

  return (
    <Customizer
      modelProps={{
        model: model,
        uvUrl: service.uv_url,
        textureAspectWidth: service.texture_aspect_width,
        textureAspectHeight: service.texture_aspect_height,
      }}
    />
  );
}
