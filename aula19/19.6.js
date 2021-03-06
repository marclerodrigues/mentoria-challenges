const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);

p.getVisibleItems() // => Retornar todos os elementos visiveis
// na pagina atual
// => ['a', 'b', 'c', 'd']
p.previousPage() // => Volta 1 página
p.nextPage() // => Avança 1 página
p.firstPage() // => Vai para a primeira página
p.lastPage() // => Vai para a última página
p.goToPage(n) // => E vai para a página n

// Todos os métodos eles podem ser encadeavéis
// p.goToPage(2).nextPage().previousPage()


class Pagination {
  constructor(collection, itemsPerPage = 5) {
    this.collection = collection;
    this.itemsPerPage = Math.floor(itemsPerPage);
    this.totalPages = Math.ceil(collection.length / this.itemsPerPage) || 1;
    this.currentPage = 1;
  }

  previousPage() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;

    return this;
  }

  nextPage() {
    this.currentPage = this.currentPage + 1 <= this.totalPages ? this.currentPage + 1 : this.currentPage;

    return this;
  }

  firstPage() {
    this.currentPage = 1;

    return this;
  }

  lastPage() {
    this.currentPage = this.totalPages;

    return this;
  }

  goToPage(page) {
    this.currentPage = page > this.totalPages ? totalPages : page;

    return this;
  }

  getVisibleItems() {
    const start = this.currentPage * this.itemsPerPage - this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;

    return this.collection.slice(start, end);
  }
}

let a = [1,2,3,4,5,6];
let p = new Pagination(a, 2);
