import Layout from '../../../components/Layout'
import Head from 'next/head'
import axios from 'axios'

export default function Character({ character }) {
  return (
    <Layout>
      <Head>
        <title>Character | {character.name}</title>
      </Head>
      <div>
        <p>name: {character.name}</p>
        <p>Gender: {character.gender}</p>
        <p>Spouse: {character.spouse}</p>
        <p>Death: {character.death}</p>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await axios.get(`https://the-one-api.dev/v2/character/${params.id}`, { headers: { Authorization: 'Bearer DK9JmbAt0ZsjBaCYgtdP' } })
  const character = res.data.docs[0]
  // Pass data to the page via props
  return { props: { character } }
}
