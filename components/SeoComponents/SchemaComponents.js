import React from 'react';

const SchemaComponents = ({ type, target, published_date}) => {
    
    const website_url = "https://covidactioncollab.org/";

    const schema = {
        "@context": "https://schema.org/",
        "@type": type,
        "name": "covid action collab",
        "url": "https://covidactioncollab.org/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${target}{search_term_string}`,
            "query-input": "required name=search_term_string"
        },
        "image": "https://covidactioncollab.org/_next/image/?url=%2Flogo.png&w=384&q=75",
        "author": {
            "@type": "",
            "name": "covid action collab",
            "url": "https://covidactioncollab.org/"
        },
        "publisher": {
            "@type": "",
            "name": "covid action collab",
            "logo": {
                "@type": "ImageObject",
                "url": ""
            }
        },
        "datePublished": published_date
    };

    return (
        <>
           

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </>
    );
};

export default SchemaComponents;
