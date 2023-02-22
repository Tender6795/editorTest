import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export const RichTextEditor = ({ changeData, data }) => {
  return (
    <>
      <CKEditor
        data={data}
        editor={ClassicEditor}
        onChange={(event, editor) => {
          changeData(editor.getData())
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
