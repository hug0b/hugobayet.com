/**
 * Get pixel size given rem value in current document
 */
export function convertRemToPixels(rem: number): number {
    const htmlFontSize: string = getComputedStyle(document.documentElement).fontSize;
    return rem * parseFloat(htmlFontSize);
}
