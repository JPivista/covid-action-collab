import React from 'react';
import Head from 'next/head'
function NextSeo({ title, description, path, metaImage }) {
    return (
        <>
            <head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="noindex, nofollow" />
                <link rel="icon" href="/images/cac_favicon-150x150.png" />
                <link rel="canonical" href={path} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={path} />
                <meta property="og:site_name" content={title} />
                <meta property="og:image" content={metaImage} />
                <meta name="twitter:card" content="summary_large_image" />

            </head>


        </>
    )
}

export default NextSeo;