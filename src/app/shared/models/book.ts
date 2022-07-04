export interface Book {
    title: string,
    isbn: string,
    pageCount: number,
    publishedDate: string,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    authors: string[],
    categories: string[]
}
