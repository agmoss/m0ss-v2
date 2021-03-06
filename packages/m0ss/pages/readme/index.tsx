import * as E from "fp-ts/Either";

import { IStr, metaData } from "@src/data";

import Head from "next/head";
import { ProjectReadme } from "@src/pages";
import React from "react";
import { getText } from "@src/utils";
import { pipe } from "fp-ts/function";
import { withPage } from "@src/components/withPage";

export const getStaticProps = async () => {
    return {
        props: {
            str: pipe(
                await getText(metaData.readmeLink),
                E.fold(
                    (_l) => "error",
                    (r) => r
                )
            ),
        },
    };
};

const ReadmePage = ({ str }: IStr) => {
    return (
        <React.Fragment>
            <Head>
                <title>{metaData.readme.title}</title>
                <meta
                    property="og:title"
                    content={metaData.readme.title}
                    key="title"
                />
                <meta
                    name="title"
                    property="title"
                    content={metaData.readme.title}
                />
                <meta
                    name="og:description"
                    property="og:description"
                    content={metaData.readme.description}
                />
                <meta
                    name="description"
                    property="description"
                    content={metaData.readme.description}
                />
            </Head>
            <ProjectReadme str={str} />
        </React.Fragment>
    );
};

export default withPage(ReadmePage);
