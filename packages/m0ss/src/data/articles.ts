export interface IStr {
    str: string;
}

export type PostData = {
    slug: string;
    description: string;
    mdLink: string;
    link: string;
};

export type PostDataWithContent = PostData & { content: string };

export const postData: PostData[] = [
    {
        slug: "nestjs-graphql-azure-functions",
        description: "Serverless GraphQL API with Nest.js and Azure Functions",
        mdLink: "https://raw.githubusercontent.com/agmoss/nestjs-graphql-azure-functions/master/README.md",
        link: "https://github.com/agmoss/nestjs-graphql-azure-functions",
    },
    {
        slug: "random",
        description: "The most random module on npm",
        mdLink: "https://raw.githubusercontent.com/transitive-bullshit/random/master/readme.md",
        link: "https://github.com/transitive-bullshit/random",
    },
    {
        slug: "react-circles",
        description:
            "A small react component to for rendering a rotating circle animation",
        mdLink: "https://raw.githubusercontent.com/agmoss/react-circles/master/README.md",
        link: "https://github.com/agmoss/react-circles",
    },
    {
        slug: "offcircle",
        description: "JavaScript Generative Art",
        mdLink: "https://raw.githubusercontent.com/agmoss/offcircle/master/README.md",
        link: "https://github.com/agmoss/offcircle",
    },
    {
        slug: "iced-iot",
        description: "A refreshing IoT platform!",
        mdLink: "https://raw.githubusercontent.com/agmoss/iced-iot/master/README.md",
        link: "https://github.com/agmoss/iced-iot",
    },
    {
        slug: "winston-azure-blob",
        description: "NEW winston transport for azure blob storage",
        mdLink: "https://raw.githubusercontent.com/agmoss/winston-azure-blob/main/README.md",
        link: "https://github.com/agmoss/winston-azure-blob",
    },
    {
        slug: "watchful",
        description: "Node CLI for checking the HTTP status of Urls",
        mdLink: "https://raw.githubusercontent.com/agmoss/watchful/master/README.md",
        link: "https://github.com/agmoss/watchful",
    },
    {
        slug: "fnctnl",
        description: "Either monad",
        mdLink: "https://raw.githubusercontent.com/agmoss/fnctnl/master/README.md",
        link: "https://github.com/agmoss/fnctnl",
    },
    {
        slug: "calgary-project",
        description:
            "A cloud native analysis service for the rental property market",
        mdLink: "https://raw.githubusercontent.com/agmoss/calgary-project/master/README.md",
        link: "https://github.com/agmoss/calgary-project",
    },
    {
        slug: "rental-regression-analysis",
        description: "Predicting rental prices",
        mdLink: "https://raw.githubusercontent.com/agmoss/rental_regression_analysis/master/README.md",
        link: "https://github.com/agmoss/rental_regression_analysis",
    },
    {
        slug: "iot-simulation",
        description: "Representational simulation of IoT devices",
        mdLink: "https://raw.githubusercontent.com/agmoss/iot-sim/master/README.md",
        link: "https://github.com/agmoss/iot-sim",
    },
    {
        slug: "rental-data-etl",
        description: "Rental Listings ETL",
        mdLink: "https://raw.githubusercontent.com/agmoss/Rental-Data-ETL/master/README.md",
        link: "https://github.com/agmoss/Rental-Data-ETL",
    },
    {
        slug: "urban-analytics-beijing",
        description: "IoT Data Analysis",
        mdLink: "https://raw.githubusercontent.com/agmoss/Urban-Analytics-Beijing/master/README.md",
        link: "https://github.com/agmoss/Urban-Analytics-Beijing",
    },
    {
        slug: "tsfc",
        description: "Training material on function composition",
        mdLink: "https://raw.githubusercontent.com/agmoss/tsfc/main/README.md",
        link: "https://github.com/agmoss/tsfc",
    },
    {
        slug: "uphere",
        description: "Upload files to blob storage",
        mdLink: "https://raw.githubusercontent.com/agmoss/uphere/main/README.md",
        link: "https://github.com/agmoss/uphere",
    },
    {
        slug: "business-card",
        description: "Generative Art Business Card",
        mdLink: "https://raw.githubusercontent.com/agmoss/card/master/README.md",
        link: "https://github.com/agmoss/card",
    },
];
