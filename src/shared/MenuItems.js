import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const MenuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      name: 'Home',
      url: '/',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      name: 'Sports',
      url: '/sports',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      name: 'Politics',
      url: '/politics',
    },
  ].map( x => ({
    label: (<Link to={x.url}>{ x.name}</Link>),
    // label: x.name,
    icon: x.icon,
    key: x.key
}))