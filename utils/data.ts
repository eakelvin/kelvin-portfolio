export const projects = [
  {
      title: 'Idea Vault',
      longDescription: 'Ideas Vault is an AI-powered idea research platform that helps founders turn raw ideas into research-backed opportunities. Users can capture ideas through text, voice, images, or documents, while AI structures each idea and researches its market, competitors, customers, trends, and potential risks. The platform organizes the findings into actionable research so users can quickly understand an idea’s potential and decide what to pursue next.',
      shortDescription: 'Ideas Vault is an AI-powered platform that turns raw startup ideas into research-backed opportunities. It structures ideas, researches markets and competitors, analyzes customers and trends, and organizes the findings into actionable insights to help founders decide which ideas are worth pursuing.',
      status: 'MVP Ready',
      technologies: ['Next.js', 'Supabase'],
      github: 'https://github.com/eakelvin/ideas-vault',
      website: 'https://ideas-vault-pi.vercel.app/',
      image: '/images/ideas-vault.png',
  },
];

export default [] as {
  id: number;
  title: string;
  description: string;
  logo: any[];
  skills: string[];
  website: string;
  status: string;
}[];
