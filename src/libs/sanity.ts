import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Création du client Sanity
export const client = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  projectId: 'd5ro5thv', // Ceci se retrouve dans sanity.io tableau de bord
  useCdn: false, // Indique si le client utilise le CDN pour les requêtes (désactivé ici)
});

// Création d'un constructeur d'URL pour les images à partir du client Sanity
const builder = imageUrlBuilder(client);

// Fonction utilitaire pour générer des URL d'images à partir d'une source donnée
export function urlFor(source: any) {
  return builder.image(source);
}
