export interface Post {
    title: string;
    content: string;
    publishDate?: Date;
    author: string;
    id: number;
    pending: boolean;
    rejected?: boolean;
    comments?: string[];
}