import Link from "next/link";
import Image from "next/image";

interface FooterSocialMediaLinkProps {
  socialMediaName: string;
}
export default function FooterSocialMediaLink({
  socialMediaName,
}: FooterSocialMediaLinkProps) {
  return (
    <Link
      href={`https://www.${socialMediaName}.com/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={`/social/${socialMediaName}.svg`}
        alt={`${socialMediaName}-contact`}
        width={35}
        height={35}
      />{" "}
    </Link>
  );
}
