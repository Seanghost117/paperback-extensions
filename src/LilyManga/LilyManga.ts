import {LanguageCode, SourceInfo, TagType} from "paperback-extensions-common";
import {Madara} from '../Madara'

const LILYMANGA_DOMAIN = "https://lilymanga.com"

export const LilyMangaInfo: SourceInfo = {
    version: '1.1.1',
    name: 'LilyManga',
    description: 'Extension that pulls manga from lilymanga, a popular yuri source.',
    author: 'Seanghost',
    authorWebsite: 'http://github.com/seanghost',
    icon: "icon.png",
    hentaiSource: false,
    websiteBaseURL: LILYMANGA_DOMAIN,
    sourceTags: [
        {
            text: "Notifications",
            type: TagType.GREEN
        },
        {
            text: "Cloudflare",
            type: TagType.RED
        }
    ]
}

export class LilyManga extends Madara {
    baseUrl: string = LILYMANGA_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
    sourceTraversalPathName: string = 'ys'
    hasAdvancedSearchPage: boolean = true
    userAgentRandomizer = ''
}
