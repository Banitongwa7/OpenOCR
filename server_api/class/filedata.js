class filedata {
    constructor(title, image, language) {
        this.title = title;
        this.image = image;
        this.language = language;
    }
    
    getExtension() {
        return this.image.filename.split('.').pop();
    }
}

module.exports = filedata