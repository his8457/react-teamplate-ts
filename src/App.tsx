import { PostList } from './domains/board/components/PostList';
import { POSTS_SAMPLES } from './domains/board/types/post';

function App() {
  return (
    <PostList posts={POSTS_SAMPLES}/>
  )
}

export default App;