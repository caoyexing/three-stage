import React, { Component } from 'react'
import ReactQuill  from 'react-quill';
import {Button} from 'antd'
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }
 
  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
 
  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  
 toggle(){
   console.log('hello')
 }
  render() {
    return (
      <div className="text-editor">
        <ReactQuill theme="snow"
                    modules={this.modules}
                    formats={this.formats}>
        </ReactQuill>
        <Button type='primary' onClick={this.toggle}>点我</Button>
      </div>
    );
  }
}
export default Setting