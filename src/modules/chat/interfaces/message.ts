interface Chat {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: string;
    unread: boolean;
    avatarUrl: string;
    lastMessageIsMine: boolean;
    lastMessageRead: boolean;
}

interface Message {
    id: string;
    content: string;
    readed: boolean;
    isMine: boolean;
    timestamp: Date;
}

export { Chat, Message };