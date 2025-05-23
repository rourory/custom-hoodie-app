import SpinnerPinwheel from "@/components/ui/spinner";
import React from "react";

const HWComponentMountingDelayer: React.FC<
  React.PropsWithChildren & { delay: number }
> = ({ children, delay }) => {
  const [readyToDrawKonva, setReadyToDrawKonva] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setReadyToDrawKonva(true), delay);
  }, []);

  return readyToDrawKonva ? (
    children
  ) : (
    <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
      <SpinnerPinwheel />
    </div>
  );
};

export default HWComponentMountingDelayer;
