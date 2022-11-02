export interface Post {
    title: string;
    content: string;
    publishDate?: Date;
    id: number;
    pending: boolean;
}