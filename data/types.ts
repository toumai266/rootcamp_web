
export interface TeamMember {
    id: string
    name: string
    role: string
    avatar?: string
    bio: string
    skills: string[]
    github?: string
    blog?: string
    email?: string
}

export interface NotionLink {
    id: string
    title: string
    description: string
    url: string
    icon: string
}

export interface FeaturedInfo {
    name: string
    reason: string
    learning: { text: string; link?: string }[]
}

export interface Career {
    id: string
    title: string
    description: string
    responsibilities: { title: string; description?: string }[]
    skills: { title: string; description?: string }[]
    certifications?: { title: string; description?: string }[]
    careerPaths?: { title: string; description: string }[]
    featured?: FeaturedInfo[]
}
