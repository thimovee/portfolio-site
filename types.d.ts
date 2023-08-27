type BlogPost = {
    id: string,
    title: string,
    subtitle: string,
    thumbnail: string,
    thumbnailDescription: string,
    date: string,
}

type Project = {
    title: string,
    subtitle: string,
    imageUrl: string,
    description: string,
    tags: string[],
    githubUrl: string,
    liveUrl: string,
}