import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CardProps {
  image?: string;
  name: string;
  description: string;
  institution?: string;
}
export function CardFaculty({
  image,
  name,
  description,
  institution,
}: CardProps) {
  const imageUrl = image !== "" ? image : "/asset/avatar.png";
  return (
    <Card className="w-[350px] min-h-[360px] text-center bg-white dark:bg-black border border-gray-300 rounded-md shadow-md p-4 hover:shadow-2xl transition duration-300 ease-in-out">
      <CardContent className="flex flex-col items-center">
        <Avatar className="mb-4">
          <AvatarImage src={imageUrl} />
          <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-semibold mb-2 min-h-[56px]">
          {name}
        </CardTitle>
        <CardDescription className="text-base mb-2 min-h-[96px]">
          {description}
        </CardDescription>
        {institution && (
          <p className="text-base underline text-gray-600 min-h-[56px]">
            {institution}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
