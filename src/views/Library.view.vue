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
    update() {
        if (this.title === "" | this.author === "") {
            alert("This book require a title and an author!");
            return
        }

        this.isNew = !this.isNew
    }
}

class Library {
    constructor() {
        this.newBook = new Book('', '', 0, true);
        this.books = [];
    }
    addBookToLibrary() {
        if (this.newBook.title === "" | this.newBook.author === "") {
            alert("This book require a title and an author!")
            return
        }
        this.books.unshift(this.newBook);
        this.newBook = new Book("", "", 0, true);
    }

}
const myLibrary = reactive(new Library());


</script>

    <template>
    <div class="container">
        <div class="bg-gray-200 flex rounded-lg justify-center my-5 py-3">
            <div class="flex flex-row pl-5">
                <input
                    class="basis-1/5 px-3 rounded-lg mx-3"
                    v-model="myLibrary.newBook.title"
                    placeholder="Title"
                    required
                />
                <input
                    class="basis-1/5 px-3 rounded-lg mx-3"
                    v-model="myLibrary.newBook.author"
                    placeholder="Author"
                    required
                />
                <input
                    class="basis-1/5 px-3 rounded-lg mx-3"
                    v-model="myLibrary.newBook.pages"
                    type="number"
                    placeholder="0"
                    @keydown="myLibrary.newBook.pages = myLibrary.newBook.pages > 999 ? 999 : myLibrary.newBook.pages"
                />
                <label class="basis-1/5 self-center px-7 rounded-lg mx-3">
                    Read ?
                    <input type="checkbox" v-model="myLibrary.newBook.status" />
                </label>
                <!-- Gros prob de form reset, sais pas si jdois mettre un bouton ou un input, mon bouton reset ma page... -->

                <button
                    class="px-8 mx-3 text-purple-500 transition-colors duration-150 border border-purple-500 rounded-lg focus:shadow-outline hover:bg-purple-500 hover:text-purple-100"
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
                    <input
                        :disabled="!book.isNew"
                        v-model="book.pages"
                        @keydown="book.pages = book.pages > 999 ? 999 : book.pages"
                    />
                </div>
                <div class="basis-1/5 pl-4">
                    <input :disabled="!book.isNew" type="checkbox" v-model="book.status" />
                </div>
                <div class="basis-1/5">
                    <button
                        class="px-5 text-purple-500 transition-colors duration-150 border border-purple-500 rounded-lg focus:shadow-outline hover:bg-purple-500 hover:text-purple-100"
                        @click="book.update()"
                    >
                        <span v-if="!book.isNew">Modify</span>
                        <span v-if="book.isNew">Save</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>