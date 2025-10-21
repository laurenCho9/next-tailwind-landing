export type TMemo = {
  id: string;
  created_at: string;
  username: string;
  play_title: string;
  playwright: string;
  genres: string[];
  body: string;
  likes: number;
  comments: number;
  body_title: string | null;
};
