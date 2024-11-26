import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <div className="">
      <Link
        href={link}
        className="mb-5 flex items-center gap-1 font-bold text-gray-500 hover:underline"
      >
        <ArrowLeftCircleIcon size={18} /> {text}
      </Link>
    </div>
  );
};

export default BackButton;
