import FooterInfoLinkBlock from "@/components/atoms/FooterInfoLinkBlock";
import FooterSocialMediaLink from "@/components/atoms/FooterSocialMediaLink";
import StoreLinkButton from "@/components/atoms/StoreLinkButton";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 shadow-[1px_-5px_10px_rgba(0,0,0,0.1)] dark:shadow-[1px_-5px_10px_rgba(255,255,255,0.1)]">
        <div className=" grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-9 p-5 gap-2">
          <FooterInfoLinkBlock
            title="Популярные сервисы"
            blockElements={[
              { title: "Свитшоты", href: "/services/sweatshot" },
              { title: "Кружки", href: "/services/cup" },
              { title: "Футболки", href: "/services/t-shirt" },
            ]}
          />
          <FooterInfoLinkBlock
            title="Покупателям"
            blockElements={[
              {
                title: "Порядок предоставления услуг",
                href: "/consumer/service",
              },
              { title: "Сроки доставки", href: "/consumer/delivery" },
              { title: "Акции", href: "/consumer/discount" },
              {
                title: "Политика конфиденциальности",
                href: "/consumer/privacy",
              },
            ]}
          />
          <FooterInfoLinkBlock
            title="Информация"
            blockElements={[
              { title: "Платежи", href: "/payings" },
              { title: "Сотрудничество", href: "/cooperating" },
              { title: "О нас", href: "/about" },
            ]}
          />
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-5">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex align-middle">
                <Image
                  src={"/icons/phone.svg"}
                  alt="phone"
                  width={20}
                  height={20}
                  className="dark:invert"
                />
                <p className="font-extrabold text-xl ml-3 text-header">
                  +375 (29) 999-99-99
                </p>
              </div>
              <p className="text-xs text-info">
                Время работы: пн-вс с 09:00 до 21:00,
              </p>
              <p className="text-xs text-info">
                заказы через корзину круглосуточно
              </p>
              <p className="mt-10 text-sm font-medium">
                Получайте уведомления об акциях и скидках:
              </p>
              <Input
                type="email"
                placeholder="Ваш e-mail"
                className="max-w-[300px] mt-2 text-sm"
              />
              <div className="flex justify-between mt-6 w-[100%] max-w-[350px]">
                <FooterSocialMediaLink socialMediaName="facebook" />
                <FooterSocialMediaLink socialMediaName="google" />
                <FooterSocialMediaLink socialMediaName="instagram" />
                <FooterSocialMediaLink socialMediaName="pinterest" />
                <FooterSocialMediaLink socialMediaName="youtube" />
                <FooterSocialMediaLink socialMediaName="twitter" />
              </div>
              <div className="mt-10 flex gap-1 justify-around max-w-[600px]">
                <StoreLinkButton
                  href={"https://play.google.com/store/apps?hl=ru"}
                  imageSrc={"/stores/playstore.svg"}
                  imageAlt={"playstore"}
                  storeName={"Play Store"}
                />
                <StoreLinkButton
                  href={"https://www.apple.com/by/app-store/"}
                  imageSrc={"/stores/apple-app-store.svg"}
                  imageAlt={"apple-app-store"}
                  storeName={"App Store"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-around items-center my-4">
          <Separator />
          <p className="mt-4 text-xs text-gray-700">
            © 2025. Printique. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
