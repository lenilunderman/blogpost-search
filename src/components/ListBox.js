import React from 'react'
import List from './List'

const ListBox = ({ blogpost }) => {
  return (
    <div className="avenir fl w-100 dark-blue tc">
      {
        blogpost.map((blog, index) => {
          return (
            <List
              key={index}
              id={blogpost[index].id}
              title={blogpost[index].title}
              body={blogpost[index].body}
            />
          )
        })
      }
    </div>
  )
}

export default ListBox