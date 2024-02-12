import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Remplace avec l'URL de ton backend

export interface Ad {
  key: string,
  image: string,
  title: string,
  storeName: string,
  storeCity: string,
  discountPrice: number,
  realPrice: number,
  content: string
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
  return ads.map(ad => ad.image);
}

type CardData = {
  key: string,
  image: string,
  title: string,
  storeName: string,
  storeCity: string,
  discountPrice: number,
  realPrice: number,
  content: string
}

const IMAGE_URL = 'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Fraise-700x700.png';


const cardsData: CardData[] = [
      {
        key: "e0ae3aef-263c-45be-9d98-4a0fda6a6904",
        image: "https://loremflickr.com/640/480?lock=163267773202432",
        title: "Handmade Cotton Mouse",
        storeName: "sofadepaul",
        storeCity: "Anikastad",
        discountPrice: 314,
        realPrice: 846,
        content: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals"
      },
      {
        key: "665bcf09-b62b-4ad6-b9d8-e5b8a2c27369",
        image: "https://loremflickr.com/640/480?lock=5756222607196160",
        title: "Electronic Granite Bacon",
        storeName: "sofadepaul",
        storeCity: "Parisianville",
        discountPrice: 771,
        realPrice: 425,
        content: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles"
      },
      {
        key: "754e628e-2cfc-4b17-83ca-2c5f9a1d3947",
        image: "https://loremflickr.com/640/480?lock=6152761284493312",
        title: "Fantastic Fresh Gloves",
        storeName: "sofadepaul",
        storeCity: "Fort Constance",
        discountPrice: 615,
        realPrice: 907,
        content: "The Football Is Good For Training And Recreational Purposes"
      },
      {
        key: "c30048c9-60ad-4c6a-82d0-b62f4159c899",
        image: "https://loremflickr.com/640/480?lock=8032892642918400",
        title: "Recycled Granite Mouse",
        storeName: "rono",
        storeCity: "Luettgenburgh",
        discountPrice: 434,
        realPrice: 66,
        content: "The Football Is Good For Training And Recreational Purposes"
      },
      {
        key: "801ea8ce-5eee-4a91-9fe4-7fa1d5b45ffa",
        image: "https://picsum.photos/seed/9jUaAXM/640/480",
        title: "Tasty BronzeKeyoard",
        storeName: "Eeki",
        storeCity: "Lake Lyric",
        discountPrice: 76,
        realPrice: 208,
        content: "The Football Is Good For Training And Recreational Purposes"
      },
      {
        key: "0d971e1e-3ddd-4877-9edf-f1cf4ea76bd8",
        image: "https://loremflickr.com/640/480?lock=427766346416128",
        title: "Luxurious Steel Pants",
        storeName: "Compagnie du dodo",
        storeCity: "North Russ",
        discountPrice: 825,
        realPrice: 736,
        content: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design"
      },
      {
        key: "eccdc63a-beb2-4a54-b71b-f9dcd929aa96",
        image: "https://loremflickr.com/640/480?lock=651581284417536",
        title: "Sleek Bronze Chips",
        storeName: "lacuisineestla",
        storeCity: "New Enos",
        discountPrice: 276,
        realPrice: 157,
        content: "The slim & simple Maple GamingKeyoard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
      },
      {
        key: "29aa594b-eec7-4581-a9ea-bc5a13a8fc59",
        image: "https://loremflickr.com/640/480?lock=2727964781314048",
        title: "Rustic Metal Ball",
        storeName: "sofadepaul",
        storeCity: "Johathanberg",
        discountPrice: 180,
        realPrice: 909,
        content: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
      },
      {
        key: "7a333382-6288-47d8-9280-b19c6a5609d6",
        image: "https://picsum.photos/seed/mO0kbg/640/480",
        title: "Sleek Plastic Bike",
        storeName: "lacuisineestla",
        storeCity: "Lake Dejon",
        discountPrice: 659,
        realPrice: 996,
        content: "The Football Is Good For Training And Recreational Purposes"
      },
      {
        key: "7eac07fa-0896-4037-b2a9-b2f66dcf03ac",
        image: "https://picsum.photos/seed/ul8Nr/640/480",
        title: "Electronic Bronze Shirt",
        storeName: "pasdepainici",
        storeCity: "Lake Emieville",
        discountPrice: 949,
        realPrice: 173,
        content: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients"
      }
];


export default cardsData;
