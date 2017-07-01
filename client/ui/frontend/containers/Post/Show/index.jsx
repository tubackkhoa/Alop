import React, { Component } from 'react'
import api from 'store/api'
import moment from 'moment'


export default class PostShow extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      post: {}
    }
  }

  async componentDidMount() {    
    const post = await api.newspost.getNewsPost(this.props.params.id)
    this.setState({post})    
    document.title = post.title
  }

  render() {
    const {post} = this.state    
    return (
      <section>        
        <div >
          <h1>{post.title} </h1>
          <strong>{moment(post.updated_at).format('MMMM Do YYYY, h:mm:ss a')}</strong>
          <img src={post.image} />
          <p dangerouslySetInnerHTML={{__html:post.content}}/>          
        </div>                
      </section>
    )
  }
}


