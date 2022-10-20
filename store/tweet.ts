import create from "zustand";
import { TweetState } from "./types";

export const useTweetStore = create<TweetState>((set) => ({
  tweetInfo: {
    profile_image_url:
      "data:image/jpeg;base64,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",
    name: "Andrej",
    username: "reactive_dude",
    text: "It's not possible to learn everything.\n\nGreat software engineers are not those who know everything but those who can solve problems and adapt.",
    retweet_count: 51,
    reply_count: 26,
    like_count: 323,
  },
  isMetricsVisible: false,
  setTweetInfo(callback) {
    set(({ tweetInfo }) => ({ tweetInfo: callback(tweetInfo) }));
  },
  setIsMetricsVisible(callback) {
    set(({ isMetricsVisible }) => ({
      isMetricsVisible: callback(isMetricsVisible),
    }));
  },
}));
