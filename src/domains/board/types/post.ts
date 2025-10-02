export interface Post {
    id: number; //id
    title: string; //제목
    content: string; //내용
    author: string; //작성자
    createdAt: string; //작성일시
    viewCount: number; //조회수
}

export const POSTS_SAMPLES: Post[] = [
    {
        id: 1,
        title: 'React Sample Data1',
        content: 'React Sample Data1',
        author: '황인선',
        createdAt: '2025-09-24T23:43:12Z',
        viewCount: 0,
    },
    {
        id: 2,
        title: 'React Sample Data2',
        content: 'React Sample Data2',
        author: '홍길동',
        createdAt: '2025-09-24T21:43:12Z',
        viewCount: 5,
    },
    {
        id: 3,
        title: 'React Sample Data3',
        content: 'React Sample Data3',
        author: '고한솔',
        createdAt: '2025-09-24T13:43:12Z',
        viewCount: 23,
    }

];