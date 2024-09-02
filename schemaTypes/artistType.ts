import { defineField, defineType } from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
    }),
    defineField({
      name: 'genre',
      type: 'string',
      options: {
        list: [
          {title: 'Pop', value: 'pop'},
          {title: 'Jazz', value: 'jazz'},
          {title: 'Rock', value: 'rock'},
          {title: 'Hip-Hop', value: 'hiphop'},
          {title: 'Classical', value: 'classical'},
        ],
      },
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'website',
      type: 'url',
    }),
    defineField({
      name: 'socialMedia',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
      ],
    }),
  ],
})
