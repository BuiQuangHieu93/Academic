import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface CardProps {
  image?: string;
  name: string;
  description: string;
  institution?: string;
  type: string;
}
export function CardFaculty({
  image,
  name,
  description,
  institution,
  type,
}: CardProps) {
  let imageUrl;
  if (image !== undefined) {
    imageUrl = image;
  } else {
    switch (type) {
      case "faculty":
        imageUrl =
          "https://t4.ftcdn.net/jpg/05/49/98/39/240_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg";
        break;
      case "institution":
        imageUrl = "/asset/194312.png";
        break;
      case "venue":
        imageUrl = "/asset/location-logo.png";
        break;
      default:
        imageUrl = "/asset/194312.png";
    }
  }
  return (
    <Card className="w-[320px] min-h-[360px] text-center bg-white dark:bg-black border border-gray-300 rounded-md shadow-md p-4 hover:shadow-2xl transition duration-300 ease-in-out">
      <CardContent className="flex flex-col items-center">
        {/* <Avatar className="rounded-full">
          <AvatarImage src={imageUrl} />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar> */}
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src={imageUrl}
            alt={imageUrl}
            className="w-full h-full object-cover"
          />
        </div>
        <CardTitle className="text-xl font-semibold mb-2 min-h-[56px]">
          {name}
        </CardTitle>
        <CardDescription className="text-base mb-2 min-h-[96px]">
          {description}
        </CardDescription>
        {institution && (
          <Link
            className="text-base underline text-gray-600 min-h-[56px]"
            href="/"
          >
            {institution}
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
