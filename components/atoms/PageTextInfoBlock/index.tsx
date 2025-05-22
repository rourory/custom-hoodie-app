
interface PageTextInfoBlockProps {
  title: string;
  text: string;
}
export default function PageTextInfoBlock({ title, text }: PageTextInfoBlockProps) {
  return <div className="flex flex-col gap-3 md:gap-5 mt-5 md:mt-10 md:flex-row w-[100%] lg:px-[5%]">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-center px-1 md:w-[30%] text-gray-700">
              {title}
            </h2>
            <p className="text-sm text-center md:text-left md:text-xl lg:text-2xl px-4 md:w-[70%] text-gray-600">
              {text}
            </p>
          </div>;
}