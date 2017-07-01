import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import api from 'store/api'

export default class PostIndex extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    document.title = "Posts" 
    const ret = await api.newspost.getNewsPosts(1)
    this.setState({posts: ret.rows})
  }

  renderRow = post=>{
    return (      
      <Card key={post.id} className="mb-40">       
        <CardMedia
          overlay={<CardTitle title={post.title} subtitle={post.description} />}
        >          
          <img src={post.image} alt="" />        
        </CardMedia>                
        <CardActions>
          <FlatButton label="Like" />
          <Link to={`/post/${post.id}`}>
            <FlatButton label="View" />
          </Link>
        </CardActions>
      </Card>
    )
  }


  render() {  
    const {posts} = this.state    
    return (
      <section>        
        <h1 >Posts</h1>        
        {posts.map(this.renderRow)}       
      </section>
    )
  }
}

