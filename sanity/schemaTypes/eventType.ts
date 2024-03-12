import {defineArrayMember, defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
			title: 'Title',
    }),
		defineField({
			name: 'overview',
			type: 'string',
			title: 'Overview',
		}),
		defineField({
			name: 'image',
			type: 'image',
			title: 'Image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative text',
					type: 'string',
				}
			]
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
			}
		}),
		defineField({
			name: 'content',
			type: 'array',
			title: 'Content',
			of: [
				{
					type: 'block',
				},
				{
					type: 'image',
					fields: [
						{
							name: 'alt',
							title: 'Alternative text',
							type: 'string',
						}
					]
				}
			],
			
		}),
  ],
})