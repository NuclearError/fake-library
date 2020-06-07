
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Button } from './components/atoms/button'


ReactDOM.render(
        <Button 
            type="button" 
            variant="primary" 
            withMarginBottom={true}
            backgroundColor="palegreen" // no worky
            fontSize="16px"
            fontWeight={400}
        >
            This is an atomic button
        </Button>,
    document.getElementById('root')
)