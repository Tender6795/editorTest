import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export const RichTextEditor = () => {
  return (
    <>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData()
          // console.log({ event, editor, data })
          console.log("data====", data)
        }}
        // onBlur={(event, editor) => {
        //   console.log('Blur.', editor)
        // }}
        // onFocus={(event, editor) => {
        //   console.log('Focus.', editor)
        // }}
      />
    </>
  )
}
