export interface InternetPackage {
  id: string;
  speed: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'tiktok' | 'instagram';
  url: string;
}
