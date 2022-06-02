import React from 'react'
import ReactDOM from 'react-dom'
import Direction from './directions'
import { ChakraProvider, theme } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Direction />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)