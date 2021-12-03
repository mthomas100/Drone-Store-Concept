export default function getSmallCloudinary(url: string): string {
    // Get the part of the URL before the last slash
    const beforeSlash = url.substring(0, url.lastIndexOf("/") + 1);

    // Get the part of the URL after the last slash
    const afterSlash = url.substring(url.lastIndexOf("/") + 1);

    // Add 'thumbnail_' to the beginning of afterSlash
    const smallAfterSlash = `thumbnail_${afterSlash}`;

    // combine beforeSlah and smallAfterSlash
    const newUrl = `${beforeSlash}${smallAfterSlash}`;

    return newUrl;
}
