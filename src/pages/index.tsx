import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { GetServerSideProps } from 'next'
import { parseCookies } from "nookies"
import Layout from "../layouts"

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
      <Layout>
        <div className="text-gray-100">
            {/* {user?.username} */}
        </div>
      </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['tunechatter.token']: token } = parseCookies(ctx)
  
    if (!token) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
}