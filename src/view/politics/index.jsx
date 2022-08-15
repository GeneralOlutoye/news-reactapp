import React from 'react'
import { LayoutContainer } from '../../shared/Layout'
import { PoliticsComponent } from './components/politics'

export const Politics = () => {
  return (
    <LayoutContainer headerTitle='Politics' defaultSelectedKeys='3' >
      <PoliticsComponent />
    </LayoutContainer>
  )
}
