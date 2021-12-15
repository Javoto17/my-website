export const getIsHomePage = (path: string[] = []) => {
    console.log(path);
    return path.some((p) => p === '_');
};

export const getPath = (path: string) => {
    let splittedPath = path
        ?.split('/')
        .filter((item) => Boolean(item) && item !== '_');

    return splittedPath?.length ? splittedPath : false;
};
