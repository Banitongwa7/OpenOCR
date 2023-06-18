class file {
    constructor(title, image, language) {
        this.title = title;
        this.image = image;
        this.language = language;
    }
    
    getExtension() {
        return this.image.split('.').pop();
    }
}

module.exports = file