export interface PhotoComment {
  date: Date;
  text: string;
  userName: string;
}

export type CommentPhoto = PhotoComment | undefined;
