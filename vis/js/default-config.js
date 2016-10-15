var config = {
    bubble_min_scale: 1,
    bubble_max_scale: 1,
    paper_min_scale: 1,
    paper_max_scale: 1,
    zoom_factor: 0.9,
    padding_articles: 0,
    circle_padding: 0,

    // map
    min_height: 600,
    min_width: 600,
    max_height: 1000,
    timeline_size: 600,

    // map reference sizes
    reference_size: 650,
    max_diameter_size: 50,
    min_diameter_size: 30,
    max_area_size: 110,
    min_area_size: 50,

    // bubbles
    area_title_max_size: 50,

    // papers
    dogear_width: 0.1,
    dogear_height: 0.1,
    paper_width_factor: 1.2,
    paper_height_factor: 1.6,

    // list
    min_list_size: 400,
    max_list_size: 500,
    list_height: 51,
    list_height_correction: 29,

    // preview
    preview_image_width_list: 230,
    preview_image_height_list: 298,
    preview_page_height: 400,
    preview_top_height: 30,
    preview_image_width: 738,
    preview_image_height: 984,
    abstract_small: 250,
    abstract_large: null,

    // data specific settings
    subdiscipline_title: "",
    use_area_uri: false,
    url_prefix: null,
    input_format: "csv",
    base_unit: "readers",
    preview_type: "image",

    is_force_areas: false,
    area_force_alpha: 0.02,

    is_force_papers: true,
    papers_force_alpha: 0.1,

    // show
    show_timeline: true,
    show_dropdown: true,
    show_intro: false,
    show_infolink: true,
    show_titlerow: true,
    show_list: false,

    sort_options: ["readers", "title", "authors", "year"],

    content_based: false,

    // transition
    transition_duration: 750,
    zoomout_transition: 750,

    // misc
    debounce: 50,

    language: "eng",

    // behaviour settings (mostly legacy)
    is_evaluation: false,
    is_adaptive: false,
    conference_id: 0,
    user_id: 0,
    max_recommendations: 10,

    localization: {
        eng: {
            loading: "Loading...",
            search_placeholder: "Search...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "What's this?",
            readers: "readers",
            year: "date",
            authors: "authors",
            title: "title",
            area: "Area"
        },
        ger: {
            loading: "Wird geladen...",
            search_placeholder: "Suche...",
            show_list: "Liste ausklappen",
            hide_list: "Liste einklappen",
            intro_label: "Was ist das?",
            readers: "Leser",
            year: "Jahr",
            authors: "Autor",
            title: "Titel",
            area: "Bereich"
        },
        eng_plos: {
            loading: "Loading...",
            search_placeholder: "Search...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "What's this?",
            readers: "views",
            year: "date",
            authors: "authors",
            title: "title",
            area: "Area"
        },
        eng_pubmed: {
            loading: "Loading...",
            search_placeholder: "Search...",
            show_list: "Show list",
            hide_list: "Hide list",
            intro_label: "What's this?",
            readers: "citations",
            year: "year",
            authors: "authors",
            title: "title",
            area: "Area"
        }
    },

    url_plos_pdf: "http://www.plosone.org/article/fetchObject.action?representation=PDF&uri=info:doi/",
    plos_journals_to_shortcodes: {
        "plos neglected tropical diseases": "plosntds",
        "plos one": "plosone",
        "plos biology": "plosbiology",
        "plos medicine": "plosmedicine",
        "plos computational Biology": "ploscompbiol",
        "plos genetics": "plosgenetics",
        "plos pathogens": "plospathogens",
        "plos clinical trials": "plosclinicaltrials"
    }
};

if (config.content_based) {
    config.sort_options = ["title", "area"];
}

export default config;
