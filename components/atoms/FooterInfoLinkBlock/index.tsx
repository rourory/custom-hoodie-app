import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface FooterInfoLinkBlockProps {
  title: string;
  blockElements: Array<{ title: string; href: string }>;
}

export default function FooterInfoLinkBlock(props: FooterInfoLinkBlockProps) {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-2 mt-5 flex flex-col items-center sm:items-start">
      <p className="font-semibold text-lg mb-1">{props.title}</p>
      <Separator className="max-w-[200px]" />
      <ul className="sm:pl-2 flex flex-col items-center sm:items-start">
        {props.blockElements.map((element) => (
          <li className="text-sm mt-1" key={element.title}>
            <Link href={element.href}>{element.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
