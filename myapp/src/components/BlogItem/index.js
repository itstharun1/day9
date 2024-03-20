import './index.css'


const BlogItem=(props)=>{
    const{blogItem}=props
    const{title,imageUrl,topic,author}=blogItem

return(
    <div className='div1'>
        <div>
        <img alt='img' className="img1" src={imageUrl}/>
        </div>
        <div>
        <h4>{title}</h4>
        <h3>{author}</h3>
        <h5>{topic}</h5>
        </div>
        
    </div>
)
}

export default BlogItem