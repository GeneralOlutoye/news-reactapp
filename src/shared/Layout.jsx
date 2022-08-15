import { MenuItems } from './MenuItems';
import './style.css'
import React from 'react'
import { Menu, Layout } from 'antd'


const { Header, Sider, Content } = Layout;

export const LayoutContainer = (props) => {

  return (
    <div className='layoutContainer'>
        <Sider className="sideBar" theme="light" breakpoint="lg" collapsedWidth="0" >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[props.defaultSelectedKeys]}
          items={MenuItems}
        />
      </Sider>
        <header className="layoutHeader">
            <div className='layoutHeaderChildren'>
                <h1>
                    {props.headerTitle}
                </h1>
            </div>
        <main>
            {props.children}
        </main>
        </header>
    </div>
  )
}
