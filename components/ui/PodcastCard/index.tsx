import styles from "./podcastCard.module.scss";
import { FC } from "react";
import { type TPodcastCard } from "@/shared";
import Image from "next/image";

type Props = TPodcastCard;

export const PodcastCard: FC<Props> = (props) => {
  const { id, imgURL, title, description } = props;

  return (
    <div className={styles.card_wrapper}>
      <figure className={styles.card}>
        <Image className={styles.card_image} src={imgURL} alt={`Title ${title}`} width={174} height={174} />
        <div className='flex flex-col'>
          <h2 className={styles.card_title}>{title}</h2>
          <p className={styles.card_description}>{description}</p>
        </div>
      </figure>
    </div>
  );
};
