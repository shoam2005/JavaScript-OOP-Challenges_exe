class MediaItem {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }
    getSummary() {
        return `MediaItem: title=${this.title} year=${this.year} genre=${this.genre}`
    }
}

class Book extends MediaItem() {
    constructor(title, year, genre, author, pageCount) {
        super(title, year, genre);
        this.author=author;
        this.pageCount=pageCount;
    }
    getSummary(){
        return `${genre}:'${title}'by ${this.author},${this.pageCount} pages`
    }
}
class Movie extends MediaItem{
    constructor(title,year,genre,director,durationMinutes){
        super(title,year,genre);
        this.director=director
        this.durationMinutes=durationMinutes
    }
    getSummary(){
        return `${this.genre}:'${this.title}' directed by ${author},${this.durationMinutes} minutes`
    }
}
class Library{
    constructor(){
        this.items=[]
    }
    addItem(item){
        this.items.push(item);
    }
    search(term){
       return this.items.filter(item=>item.title.toLowerCase().includes(term.toLowerCase()))
    }
    listByGenre(genre){
        return this.items.filter(item=> item.genre===genre)
    }
}