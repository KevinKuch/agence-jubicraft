//Creation du sanity client

import { createClient } from 'next-sanity';
import  imageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
	apiVersion: '2023-05-03',
	dataset: 'production',
	projectId: 'd5ro5thv', // Ceci se retrouve dans sanity.io tableau de board
	useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}