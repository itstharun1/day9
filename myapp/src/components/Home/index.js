import { Component } from "react"

import BlogItem from "../BlogItem"

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component{

    state={
        blogList:[],
        isLoading:true
    }

    componentDidMount(){
        this.getBlogsData()
    }
    
    getBlogsData = async()=>{
        const response = await fetch('https://apis.ccbp.in/blogs')
        const data = await response.json()
        const updatedData=data.map(eachItem=>({
            id:eachItem.id,
            title:eachItem.title,
            imageUrl:eachItem.image_url,
            avatarUrl:eachItem.avatar_url,
            author:eachItem.author,
            topic:eachItem.topic
        }),)
        this.setState({blogList:updatedData,isLoading:false})

    }

    render(){
        const{blogList,isLoading}=this.state

        return(
            <div className="div2">
                <div className="div2">
                {
                    isLoading ? <Loader type='Taispin' color="#00BFFF" height={50} width={50}/>:
                    blogList.map((item)=>(
                        <BlogItem blogItem={item} key={item.id}/>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Home