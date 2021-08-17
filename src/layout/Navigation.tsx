import React from 'react';
import '../styles/layout/Navigation.css'

interface NavigationProps {
  open: boolean,
}

export default function Navigation({ open }: NavigationProps) {
   const hidden = open ? '' : 'hidden';

  return (
    <div className={'side-bar side-bar-transform ' + hidden}>
      SideBar
    </div>
  )
}