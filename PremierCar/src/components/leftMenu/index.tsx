



export const LeftMenu =()=>{
    
    return(   
        <>
        <h2>Marca</h2>
        <select onChange={} defaultValue={}>
        <option value={}></option>
        </select>

        <h2>Modelo</h2>
        <select onChange={} defaultValue={}>
        <option value={}></option>
        </select>

        <h2>Cor</h2>
        <select onChange={} defaultValue={}>
        <option value={}></option>
        </select>

        <h2>Ano</h2>
        <select onChange={} defaultValue={}>
        <option value={}></option>
        </select>

        <div>
        <h2>Km</h2>
        <div className="div_span">
        <input id="input__range" type="range" min="0km" max="650.000km" step="1" value="90"></input>    
        </div>
        </div>

        <div>
        <h2>Preço</h2>
        <div className="div_span">
        <input id="input__range" type="range" min="R$ 10 mil" max="R$ 550 mil" step="1" value="90"></input>    
        </div>
        </div>
        <button>
            Limpar filtros
        </button>
        
        </>
    )
}