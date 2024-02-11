import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Remplace avec l'URL de ton backend

export interface Ad {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

export async function getAllAds(): Promise<Ad[]> {
  const response = await axios.get(`${API_BASE_URL}/ads`);
  return response.data;
}

export async function getAdById(id: number): Promise<Ad> {
  const response = await axios.get(`${API_BASE_URL}/ads/${id}`);
  return response.data;
}

export async function createAd(adData: Partial<Ad>): Promise<Ad> {
  const response = await axios.post(`${API_BASE_URL}/ads`, adData);
  return response.data;
}

export async function updateAd(id: number, adData: Partial<Ad>): Promise<Ad> {
  const response = await axios.patch(`${API_BASE_URL}/ads/${id}`, adData);
  return response.data;
}

export async function deleteAd(id: number): Promise<void> {
  await axios.delete(`${API_BASE_URL}/ads/${id}`);
}

export async function getProductImageUrls(): Promise<string[]> {
  const ads = await getAllAds();
  return ads.map(ad => ad.imageUrl);
}

interface CardData {
  id: number;
  title: string;
  content: string;
  image: string; // Nouvelle propriété pour le chemin de l'image
}

const IMAGE_URL = 'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Fraise-700x700.png';

const cardsData: CardData[] = [
  { id: 1, title: 'Card1', content: 'Contenu de la carte 1', image: IMAGE_URL },
  { id: 2, title: 'Card2', content: 'Contenu de la carte 2', image: IMAGE_URL },
  { id: 3, title: 'Card3', content: 'JE TEST LA 3 !', image: IMAGE_URL },
  { id: 4, title: 'Card4', content: 'Contenu de la carte 4', image: IMAGE_URL },
  { id: 5, title: 'Card5', content: 'Contenu de la carte 5', image: IMAGE_URL },
  { id: 6, title: 'Card6', content: 'Contenu de la carte 6', image: IMAGE_URL },
  { id: 7, title: 'Card7', content: 'Contenu de la carte 7', image: IMAGE_URL },
  { id: 8, title: 'Card8', content: 'Contenu de la carte 8', image: IMAGE_URL },
  { id: 9, title: 'Card9', content: 'Contenu de la carte 9', image: IMAGE_URL },
  { id: 10, title: 'Card10', content: 'Contenu de la carte 10', image: IMAGE_URL },
  { id: 11, title: 'Card11', content: 'Contenu de la carte 11', image: IMAGE_URL },
  { id: 12, title: 'Card12', content: 'Contenu de la carte 12', image: IMAGE_URL },
  { id: 13, title: 'Card13', content: 'Contenu de la carte 13', image: IMAGE_URL },
  { id: 14, title: 'Card14', content: 'Contenu de la carte 14', image: IMAGE_URL },
  { id: 15, title: 'Card15', content: 'Contenu de la carte 15', image: IMAGE_URL },
  { id: 16, title: 'Card16', content: 'Contenu de la carte 16', image: IMAGE_URL },
  { id: 17, title: 'Card17', content: 'Contenu de la carte 17', image: IMAGE_URL },
  { id: 18, title: 'Card18', content: 'Contenu de la carte 18', image: IMAGE_URL },
  { id: 19, title: 'Card19', content: 'Contenu de la carte 19', image: IMAGE_URL },
  { id: 20, title: 'Card20', content: 'Contenu de la carte 20', image: IMAGE_URL },
  { id: 21, title: 'Card21', content: 'Contenu de la carte 21', image: IMAGE_URL },
  { id: 22, title: 'Card22', content: 'Contenu de la carte 22', image: IMAGE_URL },
  { id: 23, title: 'Card23', content: 'Contenu de la carte 23', image: IMAGE_URL },
  { id: 24, title: 'Card24', content: 'Contenu de la carte 24', image: IMAGE_URL },
  { id: 25, title: 'Card25', content: 'Contenu de la carte 25', image: IMAGE_URL },
  { id: 26, title: 'Card26', content: 'Contenu de la carte 26', image: IMAGE_URL },
  { id: 27, title: 'Card27', content: 'Contenu de la carte 27', image: IMAGE_URL },
  { id: 28, title: 'Card28', content: 'Contenu de la carte 28', image: IMAGE_URL },
];

export default cardsData;
