import Sweatshot from "@/components/models/Sweatshot";
import Customizer from "@/components/organisms/Customizer";

export default function Customize() {
  return (
    <Customizer
      modelProps={{
        model: <Sweatshot />,
        uvUrl: "/models/swetshot_background.webp",
        darkModeUvUrl: "/models/dark-swetshot_background.webp",
        textureAspectWidth: 1,
        textureAspectHeight: 1,
      }}
    />
  );
}
