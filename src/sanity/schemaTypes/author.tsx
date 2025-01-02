import { defineType, defineField } from "sanity";

export const author = defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "AuthorName",
    }),
    //authot bio

    defineField({
        name:"bio",
        type:"text",
        title:"Bio",
    }),
    defineField({
        name:"image",
        type:"image",
        title:"Image",
        options:{
            hotspot:true // hotspot, se hum image ko crop kr skte ha
        }
    })

  ],
});
