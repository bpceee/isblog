import { FC } from "react";

type Props = {
  dateString: string;
  className?: string;
};

export const PostDate: FC<Props> = ({ dateString, className }) => {
  const splits = new Date(dateString).toString().substring(4, 15).split(" ");
  splits.unshift(...splits.splice(1, 1));
  const transformedDataString = splits.join(" ");
  return <span className={className}>{transformedDataString}</span>;
};
