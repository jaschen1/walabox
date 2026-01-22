
export interface ToolEntry {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
  color: string;
  tag: string;
  image: string;
  isComingSoon?: boolean;
}

export interface Recommendation {
  text: string;
  reason: string;
}
