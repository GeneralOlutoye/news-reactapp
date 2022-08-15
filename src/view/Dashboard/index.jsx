import React from 'react'
import { LayoutContainer } from '../../shared/Layout'
import { DashboardComponent } from './components/Dashboard'

export const Dashboard = () => {
  return (
    <LayoutContainer headerTitle='Dashboard' defaultSelectedKeys='1' >
      <DashboardComponent />
    </LayoutContainer>
  )
}
