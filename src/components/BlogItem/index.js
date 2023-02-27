// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <li className="list-item">
      <div className="title-container">
        <div>
          <h1 className="title-heading">{title}</h1>
        </div>
        <div>
          <p className="date">{publishedDate}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <hr className="separator" />
    </li>
  )
}
export default BlogItem
