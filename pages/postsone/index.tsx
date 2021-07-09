import { useState, useEffect } from "react";
import axios from "axios";
import {Icon,Form,FormInput, FromBtnLink,FormBtn, FormContent,FormH1,FormLabel, FormWrap,Container} from '../Elements/Elements'
export default function PostForm() {
 
  const [values, setValues] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, body } = values;
    const user = { title, body };

    let res = await axios.post("https://simple-blog-api.crew.red/posts", user);
    console.log(res);
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div>
      <Container>
     <FormWrap>
       <Icon href={'/'}><a>dev</a></Icon>
     <FormContent>
      <Form onSubmit={handleSubmit}>
        <FormH1>Create your post</FormH1>
       <FormLabel>Title</FormLabel>
          <FormInput
            value={values.title}
            onChange={handleChange("title")}
            type="text"
            className="form-control"
            placeholder="Type your title"
          />
       
       <FormLabel>Message</FormLabel>
        
          <FormInput
            value={values.body}
            onChange={handleChange("body")}
            type="text"
            className="form-control"
            placeholder="Type your body"
          />
       

        <FormBtn>
          <FromBtnLink>Sumbit

          </FromBtnLink>
        </FormBtn>
      </Form>
      </FormContent>
      </FormWrap>
      </Container>
    </div>
  );
}
