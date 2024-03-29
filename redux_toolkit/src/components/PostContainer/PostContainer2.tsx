import React from 'react'
import { IPost } from '../../models/IPost'
import { postAPI } from '../../services/PostService'
import PostItem from '../PostItem/PostItem'

function PostContainer2() {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)

    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {/* {posts && posts.map((post: IPost) => 
                    <PostItem key={post.id} post={post}/>
                )} */}
            </div>
        </div>
    )
}

export default PostContainer2