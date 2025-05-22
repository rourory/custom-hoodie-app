import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export interface StoreLinkButtonProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  storeName: string;
}

export default function StoreLinkButton(props: StoreLinkButtonProps) {
  return (
    <Button variant={"outline"} className="w-[150px] h-[60px]">
      <Link href={props.href} target="_blank" rel="noopener noreferrer">
        <div className={"flex"}>
          <Image
            src={props.imageSrc}
            alt={props.imageAlt}
            width={30}
            height={30}
          />
          <div className="ml-2">
            <p className="text-xs">Скачайте на</p>
            <p className="text-sm font-bold">{props.storeName}</p>
          </div>
        </div>
      </Link>
    </Button>
  );
}
