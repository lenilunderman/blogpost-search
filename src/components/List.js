import React from 'react'

const List = ({ id, title, body }) => {
  return (
    <div className="fl w-50 tc br bl b--blue-60 ">
      <p> The post is: {id} </p>
      <p> Title is: <b> {title}</b> </p>
      <p> Blog post: <br /> {body} </p>
      <hr />
    </div>
  )
}

export default List
