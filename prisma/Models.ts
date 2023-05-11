export type User = {
    id: string;
    name: string;
    email: string;
    emailVerified: string | null;
    image: string | null;
    posts: Post[];
    comments: Comment[];
};

export type Post = {
    id: string;
    tag: string;
    likes: number,
    content: string;
    city: string;
    region: string;
    createdAt: Date;
    updatedAt: Date | null;
    authorId: string;
    author: User;
    comments: CommentType[];
};

export type CommentType = {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
    authorId: string;
    postId: string;
    author: User;
    post: Post;
};

export type CommentTypeRequest = {
    content: string;
    createdAt: Date;
    authorId: string;
    postId: string;
};
