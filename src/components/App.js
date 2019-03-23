import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import './styles/styles.css'

const App = () => (
  <div className = 'wrap'>
    <AddTodo className = 'form-add'/>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App