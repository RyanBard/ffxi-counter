// TODO
(function () {
    'use strict';

    var state = {
            count: 0
        },
        counter = {},
        countText,
        resetButton,
        incrementOneButton,
        incrementTwoButton,
        incrementThreeButton,
        incrementFiveButton,
        incrementButton,
        decrementButton;

    function reset() {
        state.count = 0;
    }

    function increment(amount) {
        state.count += (amount || 1);
    };

    function decrement(amount) {
        state.count -= (amount || 1);
    };

    function getCount() {
        return state.count;
    }

    function updateCountText() {
        countText.innerHTML = String(getCount());
    }

    function resetHandler() {
        reset();
        updateCountText();
    }

    function incrementHandler() {
        increment();
        updateCountText();
    }

    function decrementHandler() {
        decrement();
        updateCountText();
    }

    function incrementTwoHandler() {
        increment(2);
        updateCountText();
    }

    function incrementThreeHandler() {
        increment(3);
        updateCountText();
    }

    function incrementFiveHandler() {
        increment(5);
        updateCountText();
    }

    countText = document.getElementById('count');
    resetButton = document.getElementById('reset');
    incrementOneButton = document.getElementById('increment-one');
    incrementTwoButton = document.getElementById('increment-two');
    incrementThreeButton = document.getElementById('increment-three');
    incrementFiveButton = document.getElementById('increment-five');
    incrementButton = document.getElementById('increment');
    decrementButton = document.getElementById('decrement');

    resetButton.addEventListener('click', resetHandler);
    incrementOneButton.addEventListener('click', incrementHandler);
    incrementTwoButton.addEventListener('click', incrementTwoHandler);
    incrementThreeButton.addEventListener('click', incrementThreeHandler);
    incrementFiveButton.addEventListener('click', incrementFiveHandler);
    incrementButton.addEventListener('click', incrementHandler);
    decrementButton.addEventListener('click', decrementHandler);

}());
