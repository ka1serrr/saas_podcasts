import styles from "./displayingPodcasts.module.scss";
import { podcastData } from "@/app/config";
import React from "react";
import { PodcastCard } from "@/ui";

export const DisplayingPodcasts = () => {
  return (
    <div className={styles.podcast_grid}>
      {podcastData.map((podcast) => (
        <React.Fragment key={podcast.id}>
          <PodcastCard
            title={podcast.title}
            description={podcast.description}
            imgURL={podcast.imgURL}
            id={podcast.id}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
