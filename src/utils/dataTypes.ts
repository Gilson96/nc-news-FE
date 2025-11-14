export interface Article {
    author: string,
    title: string,
    article_id: number,
    topic: string,
    created_at: string,
    votes: number,
    article_img_url: string,
    count: number
}

export interface ArticleFilters {
    sort_by: string;
    order: string;
    topic: string;
}

export type Articles = Article[];

export type ArticleObj = {
    article: Article,
} | undefined

export interface User {
    username: string,
    name: string,
    avatar_url: string
}

export type Users = User[]

export interface Topic {
    slug: string,
    description: string
}

export type Topics = Topic[];

export interface Comment {
    comment_id: number,
    article_id: number,
    body: string,
    votes: number,
    author: string,
    created_at: string
}

export type CommentsArray = Comment[];