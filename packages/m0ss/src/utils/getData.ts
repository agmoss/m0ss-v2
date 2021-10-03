import * as E from "fp-ts/lib/Either";
import { IStr, PostDataWithContent, postData } from "../data";
import { pipe } from "fp-ts/lib/function";

export const getText = async (url: string): Promise<E.Either<any, string>> => {
    try {
        const response = await fetch(url);
        const text = await response.text();
        return E.right(text);
    } catch (e) {
        return E.left(e);
    }
};

export const getPostData = async ({ str }: IStr) => {
    const link = postData.find((p) => p.slug === str);

    if (!link) {
        throw new Error("not found");
    }

    return pipe(
        await getText(link.mdLink),
        E.fold<string, string, PostDataWithContent | string>(
            (_l) => {
                return "error";
            },
            (r) => {
                return {
                    content: r,
                    ...link,
                };
            }
        )
    );
};

export const isPostData = (
    postData: PostDataWithContent | string
): postData is PostDataWithContent =>
    (postData as PostDataWithContent).content !== undefined;
