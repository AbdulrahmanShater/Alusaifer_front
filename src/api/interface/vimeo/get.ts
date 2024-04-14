

export interface VimeoData {
    embed: {
        html: string,
    }
    link: string,
    uri: string,
    player_embed_url: string,
    name: string,
    pictures: {
        base_link: string
    },
}
export interface VimeoJsonR {
    data: VimeoData[],
    page: number,
    per_page: number,
    total: number,
    paging: {
        first: string
        last: string
        next: string | null
        previous: string | null
    },
}
