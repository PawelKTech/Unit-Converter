<script>
let options = document.querySelectorAll('.option');
let divcontent = document.querySelector('.content');
options.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.innerHTML);
        divcontent.innerHTML =`
        <input type="text" id="input1">
        <input type="text" id="input2">
        <button>Pobierz wartości</button>
    `;

    document.querySelector("button").addEventListener("click", () => {
        const input1Value = document.getElementById("input1").value;
        const input2Value = document.getElementById("input2").value;
        console.log("Wartość pierwszego inputa:", input1Value);
        console.log("Wartość drugiego inputa:", input2Value);
    });
    });
});
console.log(options)
console.log(options[1])
</script>