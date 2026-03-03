interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  size: number;
  default_branch: string;
}

interface GitHubResponse {
  message?: string;
  documentation_url?: string;
}

const GITHUB_USERNAME = 'iamabhishekmaurya';
const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      const errorData: GitHubResponse = await response.json();
      throw new Error(errorData.message || `GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and archived repos, sort by stars and last updated
    return repos
      .filter(repo => !repo.fork && !repo.archived && !repo.disabled)
      .sort((a, b) => {
        // Prioritize repos with stars
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        // Then by last updated
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}

export async function fetchLastUpdateDate(): Promise<string> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/imabhi/branches/main`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    const date = new Date(data.commit.commit.author.date);

    // Format as "22 Nov 2025"
    return date.toLocaleDateString('en-GB', {
      // day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  } catch (error) {
    console.error('Error fetching last update date:', error);
    // Fallback to current date on error
    return new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
}

export function mapGitHubRepoToProject(repo: GitHubRepo) {
  const language = repo.language || 'Unknown';
  const lastUpdated = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });

  // Determine category based on repo characteristics
  let category: 'featured' | 'open-source' | 'in-progress' | 'maintenance' | 'archived' = 'open-source';

  if (repo.stargazers_count >= 5) {
    category = 'featured';
  } else if (repo.topics.includes('wip') || repo.topics.includes('in-progress')) {
    category = 'in-progress';
  } else if (repo.topics.includes('maintenance')) {
    category = 'maintenance';
  } else if (repo.topics.includes('archived')) {
    category = 'archived';
  }

  return {
    title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: repo.description || `A ${language} project exploring ${repo.topics.slice(0, 3).join(', ') || 'various concepts'}.`,
    tags: [language, ...repo.topics.slice(0, 4)],
    role: 'Creator & Maintainer',
    github: repo.html_url,
    live: repo.homepage || undefined,
    category,
    lastUpdated,
    featured: repo.stargazers_count >= 5,
    problem: repo.description ? undefined : 'No detailed problem statement available.',
    approach: `Built with ${language} and modern development practices. Focus on clean code and maintainability.`,
    impact: repo.stargazers_count > 0
      ? `Starred by ${repo.stargazers_count} developer${repo.stargazers_count !== 1 ? 's' : ''} on GitHub.`
      : 'Open source contribution to the developer community.'
  };
}
