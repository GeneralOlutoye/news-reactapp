import React from 'react'
import { LayoutContainer } from '../../shared/Layout'
import { SportsComponent } from './components/sports'

export const Sports = () => {
  return (
    <LayoutContainer headerTitle='Sports' defaultSelectedKeys='2' >
      <SportsComponent />
    </LayoutContainer>
  )
}
