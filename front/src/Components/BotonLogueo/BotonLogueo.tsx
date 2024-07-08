import { Button } from "flowbite-react";
import { ReactNode } from "react";

interface BotonLogueoProps {
  ariaLabel: string;
  children: ReactNode; 
}

const BotonLogueo: React.FC<BotonLogueoProps> = ({ ariaLabel, children }) => {
  return (
    <Button
      outline
      gradientDuoTone="from-blue-500 to-green-300"
      className="bg-gradient-to-br from-skin-400 to-blue-300 via-green-300  text-black focus:ring-4 focus:ring-skin-200 hover:bg-gradient-to-bl dark:focus:ring-skin-600  "
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  );
};

export default BotonLogueo;
