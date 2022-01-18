<script setup>
import { ref, reactive } from 'vue'

class Book {
    constructor(title, author, pages, isNew) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = false;
        this.isNew = isNew;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBookToLibrary(book) {
        this.books.unshift(book);
    }
}
const myLibrary = reactive(new Library());
let testBook = new Book("MobyDick", "Melville", 900, false);
myLibrary.addBookToLibrary(testBook);
testBook = new Book("MobyDick", "Melville", 900, false);
myLibrary.addBookToLibrary(testBook);
testBook = new Book("MobyDick", "Melville", 900, false);
myLibrary.addBookToLibrary(testBook);
testBook = new Book("MobyDick", "Melville", 900, false);
myLibrary.addBookToLibrary(testBook);
</script>


    <template>
    <div class="container">
        <div>
            <button @click="myLibrary.addBookToLibrary(new Book('Uno', 'Duo', 123, true))">Add Book</button>
        </div>
        <div class="flex flex-col mx-auto">
            <div class="flex flex-row pl-5">
                <div class="basis-1/5">Title</div>
                <div class="basis-1/5">Author</div>
                <div class="basis-1/5">Pages</div>
                <div class="basis-1/5">Read</div>
                <div class="basis-1/5">Modify/Save</div>
            </div>
            <div class="border pl-5 py-2" v-for="book in myLibrary.books">
                <div class="flex flex-row">
                    <div class="basis-1/5">
                        <input :disabled="!book.isNew" v-model="book.title" />
                    </div>
                    <div class="basis-1/5">
                        <input :disabled="!book.isNew" v-model="book.author" />
                    </div>
                    <div class="basis-1/5">
                        <input :disabled="!book.isNew" v-model="book.pages" />
                    </div>
                    <div class="basis-1/5">
                        <input :disabled="!book.isNew" type="checkbox" v-model="book.status" />
                    </div>
                    <div class="basis-1/5">
                        <button @click="book.isNew = !book.isNew">
                            <span v-if="!book.isNew">Modify</span>
                            <span v-if="book.isNew">Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>