// modules to be imported
import React, { Component } from 'react'
import 'tachyons'

// views to be imported
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import ListBox from './components/ListBox'

class App extends Component {
  // since it's a class component, usually constructor, super , state ...
  constructor () {
    super()
    // set the state for the data...
    this.state = {
      blogpost: [],
      searchField: ''
    }
    console.log('constructor')
  }

  // component mount? if so...
  componentDidMount () {
    console.log('did mount')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ blogpost: data })
      })
  }
  // dynamic search goes here...
  onSearchChange = (event) => {
    console.log(event.target.value)
    this.setState({ searchField: event.target.value })
  }

  render () {
    // console.log(this.state.blogpost) 100{...}
    // unpacking for readbility
    const { blogpost, searchField } = this.state
    // filter the blogposts
    const filterBlogPost = blogpost.filter(blog => {
      return blog.title.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="tc">
        <Header />
        <SearchBox dynamicSearch={this.onSearchChange} />
        <ListBox blogpost={filterBlogPost} />
      </div>

    )
  }
}

export default App
