export const steps = [
  "metamask",
  "x",
  "followGalactica",
  "repost",
  "issueSBT",
  "receiveSBT",
] as const;

export type Step = (typeof steps)[number];

export type State = {
  isFollowingConfirmed: boolean;
  isRepost: boolean;
  isSBTIssued: boolean;
  isXConnected: boolean;
};
