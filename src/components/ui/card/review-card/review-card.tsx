import { LocalIcon } from "src/assets/icons";
import { UserAvatar } from "src/components/ui/user/user-avatar";

export type ReviewCardProps = {
  username: string;
  career: string;
  comment: string;
  imgSrc: string;
};

export const ReviewCard = ({
  username,
  career,
  imgSrc,
  comment,
}: ReviewCardProps) => {
  return (
    <div className="flex max-w-96 flex-col gap-y-4 rounded-2xl p-7 shadow-lg ring-1 ring-black/5">
      <div className="flex gap-x-1 text-yellow-500">
        <LocalIcon iconName="StarFilled" />
        <LocalIcon iconName="StarFilled" />
        <LocalIcon iconName="StarFilled" />
        <LocalIcon iconName="StarFilled" />
        <LocalIcon iconName="StarFilled" />
      </div>
      <p>{comment}</p>
      <div className="mt-3 flex gap-x-3">
        <UserAvatar src={imgSrc} />
        <div className="flex flex-col gap-1">
          <p className="font-bold">{username}</p>
          <p className="text-sm text-gray-400">{career}</p>
        </div>
      </div>
    </div>
  );
};
