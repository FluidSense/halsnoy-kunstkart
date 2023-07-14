import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'streetArt',
  title: 'Gatekunst',
  type: 'document',
  fields: [
    defineField({
      type: 'geopoint',
      name: 'position',
      title: 'Posisjon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Tittel',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'blockContent',
      name: 'description',
      title: 'Beskrivelse',
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Bilde',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'artist',
      title: 'Kunstner',
    }),
    defineField({
      type: 'array',
      name: 'additionalImages',
      title: 'Andre bilder',
      of: [defineArrayMember({type: 'image'})],
    }),
  ],
})
