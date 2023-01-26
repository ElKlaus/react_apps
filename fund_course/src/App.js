import React, {useState, useMemo, useRef, useEffect} from "react";
import PostService from "./API/PostService";
import axios from 'axios';
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MySelect from "./components/UI/select/MySelect";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css';
import Loader from "./components/UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setIsPostLoading(true);
    setTimeout(async () => {
      const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

      setPosts(posts.data);
      setIsPostLoading(false);
    }, 2000);
    // const posts = await PostService.getAll();

  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
      }
    </div>
  )
}

export default App;
