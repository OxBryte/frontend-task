export const shortenText = (text: string, num: any) => {
    if (text.length > num) {
        return text.substring(0, num) + '...';
    }
    
    return text;

}