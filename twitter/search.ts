export interface Tweet {
  avatar: string;
  userName: string;
  id: string;
  createdAt: string;
  text: string;
  fullText: string;
  truncated: boolean;
  hastags: string[];
  urls: string[];
  userMentions: UserMention[];
  source: string;
}

export type UserMention = {
  screenName: string;
  id: string;
};
