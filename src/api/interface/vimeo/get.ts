import { BaseJsonResponse, PaginationResponse } from "../../config/BaseJson";


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

export interface VimeoJsonR extends BaseJsonResponse<PaginationResponse<VimeoData[]>> { }
