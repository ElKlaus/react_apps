import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);

    setPost(response.data);
  });
  const [fetchComments, isCommLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentByPostId(id);

    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <div>Вы открыли страницу поста c ID = {params.id}</div>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h1>
        Комментарии
      </h1>
      {isCommLoading
        ? <Loader/>
        : <div>
          {comments.map(comm => 
            <div key={comm.id} style={{marginTop: 15}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          )}
        </div>
      }
    </div>
  )
}
