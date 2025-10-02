import type { Post } from '../types/post';

interface PostItemProps {
    post: Post;
}

export const PostItem = ({post}: PostItemProps) => {
    return (
        <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.author}</td>
            <td>{post.createdAt}</td>
            <td>{post.viewCount}</td>
        </tr>
    );
};