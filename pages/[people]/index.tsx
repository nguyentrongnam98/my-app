import { useRouter } from 'next/router';
import React from 'react'

function PeopleDetail() {
    const router = useRouter().query;
    console.log('router',router)
  return (
    <div>PeopleDetail</div>
  )
}

export default PeopleDetail;