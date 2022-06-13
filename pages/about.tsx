import { useRouter } from 'next/router';
import React from 'react'

function About() {
    const router = useRouter()
    console.log('about query', router.query)
  return (
    <div>ABOUT</div>
  )
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default About;