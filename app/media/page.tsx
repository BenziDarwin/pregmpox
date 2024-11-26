import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, Video, Mic, Camera, Download } from 'lucide-react'

// Add these types at the top of the file
type MediaItem = {
  title: string;
  date?: string;
  duration?: string;
  episode?: string;
  album?: string;
};

// This is a placeholder for the actual data fetching from Drupal
async function getMediaContent(): Promise<{
  newsArticles: MediaItem[];
  videos: MediaItem[];
  podcasts: MediaItem[];
  photoGallery: MediaItem[];
}> {
  // In a real implementation, this would fetch data from the Drupal API
  return {
    newsArticles: [
      { title: "PREGMPOX Launches New Research Initiative", date: "July 15, 2023" },
      { title: "Breakthrough in MPXV Pregnancy Study", date: "June 30, 2023" },
      { title: "PREGMPOX Researchers Present at Global Health Summit", date: "June 1, 2023" },
    ],
    videos: [
      { title: "Understanding MPXV in Pregnancy", duration: "15:30" },
      { title: "PREGMPOX Annual Conference Highlights", duration: "45:00" },
      { title: "Interview with Lead Researcher Dr. Jean Mukwege", duration: "20:15" },
    ],
    podcasts: [
      { title: "The Future of MPXV Treatment", episode: "Ep. 12" },
      { title: "Ethical Considerations in MPXV Research", episode: "Ep. 11" },
      { title: "MPXV and Maternal Health: What We Know", episode: "Ep. 10" },
    ],
    photoGallery: [
      { title: "PREGMPOX Team in Bukavu", album: "Field Work 2023" },
      { title: "Laboratory Research at University of Antwerp", album: "Research Facilities" },
      { title: "Community Outreach Program", album: "Public Engagement" },
    ],
  };
}

export default async function MediaCenter() {
  const mediaContent = await getMediaContent();

  const mediaCategories = [
    {
      title: "News Articles",
      description: "Latest news and press releases about PREGMPOX",
      icon: Newspaper,
      items: mediaContent.newsArticles,
    },
    {
      title: "Videos",
      description: "Informational videos and research presentations",
      icon: Video,
      items: mediaContent.videos,
    },
    {
      title: "Podcasts",
      description: "In-depth discussions on MPXV research",
      icon: Mic,
      items: mediaContent.podcasts,
    },
    {
      title: "Photo Gallery",
      description: "Images from our research sites and events",
      icon: Camera,
      items: mediaContent.photoGallery,
    },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Media Center</h1>
        <p className="text-xl text-muted-foreground">
          Stay informed with the latest news, videos, and resources from the PREGMPOX Consortium.
        </p>
        <p className="text-sm text-muted-foreground">
          This content is managed by our Drupal CMS.
        </p>
      </section>
      <div className="grid md:grid-cols-2 gap-6">
        {mediaCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <category.icon className="h-6 w-6 text-primary" />
                <CardTitle>{category.title}</CardTitle>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="text-sm">{item.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.date || item.duration || item.episode || item.album}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" /> View All {category.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

