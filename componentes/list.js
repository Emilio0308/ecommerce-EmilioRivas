function filtrar(print) {
    let botonLista = document.querySelector(`.boton_lista`)
    let listValue = document.getElementById(`lista`)
    let selecPrice = document.getElementById(`selecPrice`)
    botonLista.addEventListener(`click`, function () {
        let data = JSON.parse(localStorage.getItem(`dataBase`))
        if(listValue.value == `todos`) ordenar( data )
        else{
            let arrayFiltrado = []
            data.forEach( element => {
            if(element.category == listValue.value) arrayFiltrado.push(element)
            })
            ordenar(arrayFiltrado)
        }
        function ordenar(arrayFiltrado) {
            if(selecPrice.value == `todos`) print( data )
            else if(selecPrice.value == `ascendente`){
                arrayFiltrado = arrayFiltrado.sort((a, b ) => a.price -b.price)
                print(arrayFiltrado)
            }else if(selecPrice.value == `descendente`){
                arrayFiltrado = arrayFiltrado.sort((a,b) => b.price - a.price)
                print(arrayFiltrado)
            }
        }
    })
}
export default filtrar