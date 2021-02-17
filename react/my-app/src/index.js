import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
    return <h4>This is Fox and this is my First Component</h4>;
}

ReactDom.render(<Greeting/>, document.getElementById('root'));