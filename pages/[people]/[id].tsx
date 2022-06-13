import { useRouter } from 'next/router';
import React from 'react'

function Id() {
    const router = useRouter().query;
    console.log('router',router)
  return (
    <div>abc</div>
  )
}
export default Id;