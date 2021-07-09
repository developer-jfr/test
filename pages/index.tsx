import Head from "next/head";
import Link  from 'next/link'
import MainLayout from "../components/MainLayout";
import style from './../styles/Home.module.css';
import {PostPropsType} from  './../components/interface/interface'




type PropsType = {
  posts: PostPropsType[]
}

export default function PostsFC({ posts}: PropsType) {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Test Work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div className={style.wrapp}>
     {posts.map((post) => (
        <div className={style.wrapped}  key={post.id}>
          <Link href={"/post/[id]"} as={`/post/${post.id}`}>
            <a>
              <div className={style.container}>
              
                <div className={style.main}>
                  <h1 className={style.title}>{post.title}</h1>
                  <span className={style.span}>{post.body}</span>

                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
     </div>
      ;
    </MainLayout>
  );
}


PostsFC.getInitialProps = async () => {
  const response = await fetch("https://simple-blog-api.crew.red/posts");
  const posts = await response.json();

  return {
    posts
  }
};
