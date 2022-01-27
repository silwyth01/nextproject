<script setup>
import { ref, reactive } from 'vue'

class Game {
    constructor() {
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        this.gameState = [{ content: "" }, { content: "" }, { content: "" }, { content: "" }, { content: "" }, { content: "" }, { content: "" }, { content: "" }, { content: "" },]
        this.currentPlayer = new Player("");
        this.isActive = true;
        this.message = "";
        this.drawPoint = 0;
    }
    play(box, nextPlayer) {
        if (box.content != "" || !this.isActive) {
            return
        }

        box.content = this.currentPlayer.symbol
        game.winningConditions.forEach(condition => {
            const a = this.gameState[condition[0]].content;
            const b = this.gameState[condition[1]].content;
            const c = this.gameState[condition[2]].content;
            let filled = false;
            if (a | b | c === "") {
                filled = false;
            } else {
                filled = true
            }
            if (filled && a === b && b === c) {
                this.isActive = false;
                this.message = `It's a win for ${this.currentPlayer.symbol} `
                this.currentPlayer.addPoint();
            }

        });
        if (this.isActive && this.gameState.every(box => box.content !== "")) {
            this.isActive = false;
            this.message = `It's a draw`
            this.drawPoint++
        }
        if (this.isActive) {
            nextPlayer.isPlaying = this.currentPlayer.isPlaying;
            this.currentPlayer.isPlaying = false;
            this.currentPlayer = nextPlayer;
            this.message = `It's ${this.currentPlayer.symbol} to play`
        }
    }
    reset(resetPlayer) {
        this.gameState.forEach(box => { box.content = "" });
        this.isActive = true;
        this.currentPlayer = resetPlayer;
        this.message = `It's ${this.currentPlayer.symbol} to play`

    }

}


class Player {
    constructor(symbol) {
        this.symbol = symbol;
        this.point = 0;
        this.isPlaying = false;
    }
    addPoint() {
        this.point++
    }

}

let playerX = new Player("X");

let playerO = new Player("O");

let game = reactive(new Game());
game.currentPlayer = playerX;
game.currentPlayer.isPlaying = true;
game.message = `It's ${game.currentPlayer.symbol} to play`



</script>

<template>
    <div class="container">
        <div class="flex">
            <div class="m-auto inline-grid grid-cols-3">
                <button
                    v-for=" box in game.gameState"
                    class="bg-blue-500 w-20 h-20 m-2 text-center text-6xl font-bold rounded hover:bg-blue-600"
                    @click="game.currentPlayer.symbol === 'X' ? game.play(box, playerO) : game.play(box, playerX)"
                >{{ box.content }}</button>
            </div>
        </div>
        <div>
            <div
                class="flex items-center justify-center space-x-12 my-4 font-semibold text-xl px-5 py-3"
            >
                <div>Player X : {{ playerX.point }}</div>
                <div>Draw : {{ game.drawPoint }}</div>
                <div>Player O : {{ playerO.point }}</div>
            </div>
            <div
                class="flex items-center justify-center my-4 font-semibold text-xl px-5 py-3 place-self-center"
            >{{ game.message }}</div>
            <div class="flex items-center justify-center">
                <button
                    class="flex items-center justify-center my-3 font-semibold hover:bg-purple-600 text-xl px-5 py-3 bg-purple-500 rounded-lg"
                    @click="game.reset(playerX)"
                >Reset</button>
            </div>
        </div>
    </div>
</template>