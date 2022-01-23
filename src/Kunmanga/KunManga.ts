import {LanguageCode, SourceInfo, TagType} from "paperback-extensions-common";
import {Madara} from '../Madara'

const KUNMANGA_DOMAIN = "https://kunmanga.com"

export const KunMangaInfo: SourceInfo = {
    version: '1.0.1',
    name: 'KunManga',
    description: 'Extension that retrieves index from KunManga.com',
    author: 'Sean Ghost',
    authorWebsite: 'http://github.com/seanghost117',
    icon: "logo.png",
    hentaiSource: false,
    websiteBaseURL: KUNMANGA_DOMAIN,
    sourceTags: [
        {
            text: "Notifications",
            type: TagType.GREEN
        }
    ]
}

export class KunManga extends Madara {
    baseUrl: string = KUNMANGA_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
    hasAdvancedSearchPage: boolean = true
    userAgentRandomizer = ''
}
