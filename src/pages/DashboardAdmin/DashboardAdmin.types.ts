export interface IUsers {
    createdAt: string;
    email: string;
    id: string;
    status: string;
    streakCount: number;
}

export interface IAllStreaks {
        userId: string,
        count: number,
        lastOpened: string,
        user: IUserStreak
}

interface IUserStreak {
    email: string,
    streakCount: number
}

export interface INewsOpen {
    id: string
    openedAt: string
    postId: string
    userId: string
    user: IUserStreak
}

export type TNewsOpen = { openedAt: string };