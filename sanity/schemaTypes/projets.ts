//Creation des champs pour les projets dans le CMS Sanity Studio

export default {
	name: 'projets',
	type: 'document',
	title: 'Projets-liste',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Titre du projet'
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug du projet',
			options: {
				source: 'title',
			}
		},
		{
			name: 'titleImage',
			type: 'image',
			title: 'Image du projet'
		},
		{
			name: 'overview',
			type: 'text',
			title: 'Aperçu du projet'
		},
		{
			name: 'content',
			type: 'array',
			title: 'Content',
			of: [
				{
					type: 'block'
				}
			]
		}
	]
}