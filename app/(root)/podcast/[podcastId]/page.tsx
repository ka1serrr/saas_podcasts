import { FC } from "react";

type Props = {
  params: { podcastId: string };
};

export const PodcastDetails: FC<Props> = ({ params }) => {
  return <p className='text-white-1'>PodcastDetails for {params.podcastId}</p>;
};
