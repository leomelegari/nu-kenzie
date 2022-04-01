import "./style.css"

const TotalMoney = ({list, filtro}) => {
    const total = list.filter(({type}) => filtro === "Todos" ? type !== filtro : type === filtro).reduce((acc, curr) => {
        if(curr.type === "Saída"){
            return acc + (Number(curr.value) - Number(curr.value * 2))
        } else {
            return acc + Number(curr.value)
        }
    }, 0)

    return (
        <div className="total">
            <p>Valor total</p>
            <p>{total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}</p>
        </div>

        // list.map((list) => {
        //     return list.value
        // }).reduce((acc, curr) => console.log(acc + curr))
        
        // list.reduce((acc, curr) => {
        //     console.log(acc + curr)
        //     return acc + curr
        // }, 0)
    )
}

export default TotalMoney;