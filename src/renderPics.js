export function importPics() {
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('./pics/', false, /\.(png|jpe?g|svg)$/));
    return images;
}