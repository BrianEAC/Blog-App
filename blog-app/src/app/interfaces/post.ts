import { PostComment } from "./comment";

export interface Post {
    title: string;
    content: string;
    publishDate?: string;
    author: string;
    id: number;
    pending: boolean;
    rejected?: boolean;
    comments?: PostComment[];
}