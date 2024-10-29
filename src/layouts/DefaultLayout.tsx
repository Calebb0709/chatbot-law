import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

import NavBar from './partials/NavBar'

const { Content } = Layout

export const DefaultLayout = () => {
  return (
    <Layout className='w-full max-w-full overflow-hidden bg-white'>
      <NavBar/>
      <Content className='text-center min-h-[400px] text-black'>
        <Outlet />
      </Content>
      {/* <Footer /> */}
    </Layout>
  )
}