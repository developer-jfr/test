
import Link from 'next/link';
import style from './post.module.css'
import { PostPropsType } from '../../components/interface/interface'; 
import type { NextPageContext } from 'next'
import {NavBtn,NavBtnLink} from './../Header/HeaderElements'

type PostType = {
  post: PostPropsType
}
export default function Post({post}: PostType) {
    return (
        <>
      
          <div className={style.wrap}>
          <h1> {post.title} </h1>
           <hr/>
           <p>{post.body}</p>
          <NavBtn>
            <NavBtnLink><Link href={'/'}><a>Back to Home</a></Link></NavBtnLink>
          </NavBtn>
          
          </div>
        </>
    )
}




Post.getInitialProps = async ({query, req} : NextPageContext) => {
 
  
    const response = await fetch(`https://simple-blog-api.crew.red/posts/${query.id}`);
    const post = await response.json();
  
    return {
      post
    }
}


