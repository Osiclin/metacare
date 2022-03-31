import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../constants"

export default function PageNav() {
    const nav = ['Efficiency', 'Volume', 'Customer Satisfaction', 'Backlog']

    return(
        <div style={{position: 'relative', padding: '0rem 2.5rem', display: 'flex', alignItems: 'center', borderBottom: `1px solid ${COLOR.border}`}}>
            {
                nav.map((item, i) => 
                <div key={i} style={{cursor: 'pointer', width: 'max-content', marginRight: '2.5rem', position: 'relative', padding: '1rem 0', borderBottom: item.toLowerCase() === 'efficiency' ? `2px solid ${COLOR.purple}` : ''}}>
                    <h5 
                        key={i} 
                        style={{
                            height: 'auto',
                            fontSize: FONT_SIZE.px16, 
                            color: item.toLowerCase() === 'efficiency' ? COLOR.text_dark : COLOR.text_grey,
                            fontWeight: item.toLowerCase() === 'efficiency' ? FONT_WEIGHT.semi_bold : '',
                        }}
                    >
                        {item}
                    </h5>
                </div>
                )
            }
        </div>
    )
}