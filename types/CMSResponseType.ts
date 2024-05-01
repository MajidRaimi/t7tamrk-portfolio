export interface CMSResponse {
    name: string;
    created_at: Date;
    published_at: Date;
    id: number;
    uuid: string;
    content: Content;
    slug: string;
    full_slug: string;
    sort_by_date: null;
    position: number;
    tag_list: any[];
    is_startpage: boolean;
    parent_id: null;
    meta_data: null;
    group_id: string;
    first_published_at: Date;
    release_id: null;
    lang: string;
    path: null;
    alternates: any[];
    default_full_slug: null;
    translated_slugs: null;
}

export interface Content {
    _uid: string;
    hero: Hero[];
    contact: Contact[];
    welcome: AboutUs[];
    about_us: AboutUs[];
    services: Services[];
    component: string;
}

export interface Services {
    title: string;
    subtitle: string;
    service: Service[];
    background: string;
}

export interface AboutUs {
    _uid: string;
    image?: string;
    title: string;
    subtitle: string;
    component: string;
    background: string;
    service?: Service[];
    mockup?: string;
}

export interface Service {
    _uid: string;
    name: string;
    color: string;
    image: string;
    component: string;
}

export interface Contact {
    _uid: string;
    title: string;
    button: string;
    appstore: string;
    subtitle: string;
    component: string;
    googleplay: string;
}

export interface Hero {
    _uid: string;
    logo: string;
    mockup: string;
    appstore: string;
    component: string;
    googleplay: string;
    background: string;
}
