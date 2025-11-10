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

export type Articles = Article[];

export interface Topic {
    slug: string,
    description: string
}

export type Topics = Topic[];