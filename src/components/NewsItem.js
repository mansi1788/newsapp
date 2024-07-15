import React from 'react'

    
 
  const NewsItem=(props)=> {
    const {title,description,imageurl,author,date} = props;

    return (
      <div >
            <div className="card" style={{width: "18rem"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author ? author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
    <a href="/newsdetail" className="btn btn-primary">Read more</a>
  </div>
</div>
        
      </div>
    )
  }

export default NewsItem