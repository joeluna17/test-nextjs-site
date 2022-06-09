import axios from 'axios'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Characters({ newData }) {
  return (
    <Layout>
      <Head>
        <title>Characters</title>
      </Head>
      <ul>
        {newData.map(({ _id: id, name, race }) => {
          return (
            <li>
              {' '}
              <Link href={`/characters/character/${id}`}>
                <a>
                  {name} - {race}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = await axios.get('https://the-one-api.dev/v2/character', { headers: { Authorization: 'Bearer DK9JmbAt0ZsjBaCYgtdP' } })
  const newData = allPostsData.data.docs
  return {
    props: {
      newData,
    },
  }
}

// export async function getStaticPaths() {
//   const paths = await axios.get('https://the-one-api.dev/v2/character', { Headers: { Authorization: 'Bearer DK9JmbAt0ZsjBaCYgtdP' } })

//    const newPaths = paths ?  paths.map(path => {
//     return {
//         params: {
//           id: path._id
//         },
//       }
//   }) : []
//   return {
//     newPaths,
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params }) {
//   const postData = getPostData(params.id)
//   return {
//     props: {
//       postData,
//     },
//   }
// }
