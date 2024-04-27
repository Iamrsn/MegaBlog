import React from 'react'
import {Editor } from '@tinymce/tinymce-react'; //tinymce se lie hai..
import {Controller } from 'react-hook-form'; //control karta streamline process ke lie or ye key value pair leta hai..


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller  //key value pair leta naam deta control deta rules define karte haii..
    name={name || "content"}
    control={control} //control can be given by parent elememt..
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue} //initialize hote hi ap kya kya value chahte ho..
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [ //apko kya kya value chayey plugin me de do..
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}