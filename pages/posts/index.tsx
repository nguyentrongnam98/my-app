import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react'

interface ListPost {
  posts:any[]
}
function CLGT(props:ListPost) {
  console.log('props',props.posts)
  return (
    <div>
      <ul>
        {
          props.posts.map((item,index) => <li key={index}>
            <Link href={`/posts/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>)
        }
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ListPost> = async (context:GetStaticPropsContext) => {
  console.log('static props123')
  const res = await fetch('http://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await res.json()
  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props:{
       posts:data.data
    }
  }
}

// export const getServerSideProps = () => {}

export default CLGT;