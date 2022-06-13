import { useRouter } from 'next/router'
import React from 'react'

function DetailPost() {
    const router = useRouter().query;
    console.log('router',router)
  return (
    <div>DetailPost</div>
  )
}

export default DetailPost