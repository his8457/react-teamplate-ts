import { PostItem } from "./PostItem";
import { type Post } from "../types/post";

interface PostListProps{
    posts: Post[];
}
export const PostList = ({ posts }: PostListProps ) => {

    return (
    <div>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>작성일시</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <PostItem key={post.id} post={post}/>
          ))}
        </tbody>
      </table>
    </div>
    )
}