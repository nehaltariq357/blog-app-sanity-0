import { defineField, defineArrayMember, defineType } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post Doc",
  fields: [
    defineField({
      name: "title", // this title post,using to form slug
      type: "string",
      title: "Post Name",
      description: "title of the post",
      validation: (Rule) => Rule.required(),
    }),
    //slug filed

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title", //source geneter slug of title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
///summary filed
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required(),
    }),
    //image field

    defineField({
      name:"image",
      type:"image",
      title:"Add Image"
    }),
    //block filed, for blog content

    defineField({
      name:"content", // this name is use, fetch data using groq
      type:"array", // array is use for different types of content store in one array
      title:"Content",
      of:[
        defineArrayMember({
          type:"block" //block is for using,different types,like image, title, desc, etc.
        })
      ]
    }),

    defineField({
      name:"author",
      type:"reference",
      title:"Authore",
      to:[{
        type:"author"
      }]
    })
  ],
});
