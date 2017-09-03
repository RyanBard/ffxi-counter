(function () {
    'use strict';

    var state = {
            count: 0
        },
        counter = {},
        countText,
        resetButton,
        incrementButton,
        decrementButton,
        countInput,
        setCountButton;

    function reset() {
        state.count = 0;
    }

    function increment() {
        state.count += 1;
    };

    function decrement() {
        state.count -= 1;
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

    function setCountHandler() {
        var count = Number(countInput.value);
        state.count = count;
        updateCountText();
    }

    countText = document.getElementById('count');
    resetButton = document.getElementById('reset');
    incrementButton = document.getElementById('increment');
    decrementButton = document.getElementById('decrement');
    countInput = document.getElementById('count-input');
    setCountButton = document.getElementById('count-button');

    resetButton.addEventListener('click', resetHandler);
    incrementButton.addEventListener('click', incrementHandler);
    decrementButton.addEventListener('click', decrementHandler);
    setCountButton.addEventListener('click', setCountHandler);

}());
