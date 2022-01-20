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
        this.newBook = new Book('', '', 0, true);
        this.books = [];
    }
    addBookToLibrary() {
        this.books.unshift(this.newBook);
        this.newBook = new Book("", "", 0, true);
    }

}
const myLibrary = reactive(new Library());
let testBook = new Book("MobyDick", "Melville", 900, false);
let bookDefault = new Book('', '', 0, true);
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
            <div class="flex flex-row pl-5">
                <input class="basis-1/5" v-model="myLibrary.newBook.title" placeholder="Title" />
                <input class="basis-1/5" v-model="myLibrary.newBook.author" placeholder="Author" />
                <input class="basis-1/5" v-model.number="myLibrary.newBook.pages" placeholder="0" />
                <input type="checkbox" v-model="myLibrary.newBook.status" />
                <!-- Gros prob de form reset, sais pas si jdois mettre un bouton ou un input, mon bouton reset ma page... -->

                <button
                    class="px-5 text-purple-500 transition-colors duration-150 border border-purple-500 rounded-lg focus:shadow-outline hover:bg-purple-500 hover:text-purple-100"
                    @click="myLibrary.addBookToLibrary()"
                >Add Book</button>
            </div>
        </div>
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
                <div class="basis-1/5 pl-4">
                    <input :disabled="!book.isNew" type="checkbox" v-model="book.status" />
                </div>
                <div class="basis-1/5">
                    <button
                        class="px-5 text-purple-500 transition-colors duration-150 border border-purple-500 rounded-lg focus:shadow-outline hover:bg-purple-500 hover:text-purple-100"
                        @click="book.isNew = !book.isNew"
                    >
                        <span v-if="!book.isNew">Modify</span>
                        <span v-if="book.isNew">Save</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>