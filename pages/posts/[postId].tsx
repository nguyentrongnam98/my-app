import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react'
interface PostDetailI {
    post:any
}
function PostDetail({post}:PostDetailI) {
  return (
    <div>
        {post.title}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    console.log('getStaticPaths');
    const res = await fetch('http://js-post-api.herokuapp.com/api/posts?_page=1')
    const data = await res.json()
    return {
        paths:data?.data.map((post:any) => ({params: {postId:post.id}})),
        fallback:false
    }
}
export const getStaticProps: GetStaticProps<PostDetailI> = async (context:GetStaticPropsContext) => {
    console.log('getStaticProps',context?.params?.postId);
    if (!context?.params?.postId) {
        return {
            notFound:true
        }
    }
    const res = await fetch(`http://js-post-api.herokuapp.com/api/posts/${context?.params?.postId}`)
    const data = await res.json()
    return {
        props: {
           post:data
        }
    }
}
export default PostDetail;