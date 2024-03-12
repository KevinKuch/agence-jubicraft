import { createClient } from '@sanity/client'


// Configuration de l'API client pour Sanity pour fetch les données
const projectId = 'h94yogsp'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const sanityClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
});