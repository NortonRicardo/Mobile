import React, { useState } from 'react'
import { Button, Text } from 'react-native'

import Filho from './Filho'

export default props => {
    let  x = 13
    let  y = 130

       return (
           <Filho a={x} b={y} />
       )
 } 