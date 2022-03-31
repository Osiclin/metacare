import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../constants";
import { useState } from "react";

export default function Search({title}) {
    const [search, setSearch] = useState('')

    return(
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2.5rem'}}>
            <h1 style={{fontSize: FONT_SIZE.px24, fontWeight: FONT_WEIGHT.semi_bold}}>{title}</h1>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{height: '44px', width: '350px', maxWidth: '350px', marginRight: '1.5rem',  borderRadius: '8px', position: 'relative', border: `1px solid ${COLOR.border}`}}>
                    <div style={{position: 'absolute', top: '50%', transform: 'translateY(-40%)', left: '1rem', cursor: 'pointer'}}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z" stroke="#A3A3C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.375 18.375L14.5687 14.5687" stroke="#A3A3C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <input 
                        type='text' 
                        id='search'
                        value={search} 
                        placeholder="Search" 
                        onChange={(e) => setSearch(e.target.value)} 
                        style={{
                            width: '84%',
                            height: '100%',
                            padding: 0,
                            outline: 0,
                            border: 0,
                            marginLeft: '50px',
                            fontFamily: 'Gelion Regular', 
                            fontSize: FONT_SIZE.px16
                        }}
                    />
                </div>

                <div style={{marginRight: '1rem'}}>
                    <select id='filter' style={{border: `1px solid ${COLOR.border}`, outline: 0, borderRadius: '8px', height: '44px', padding: '0 .5rem', fontFamily: 'Gelion Medium', fontSize: FONT_SIZE.px16}}>
                        <option value=''>Filter Optiions</option>
                    </select>
                </div>

                <div style={{height: '24px', marginRight: '1rem', backgroundColor: COLOR.border, width: '1px'}}></div>
                <div>
                    <button style={{height: '44px', width: '105px', backgroundColor: COLOR.green, border: 0, color: COLOR.text_white, fontSize: FONT_SIZE.px16, borderRadius: '8px', fontFamily: 'Gelion Medium'}}>Export</button>
                </div>
            </div>
        </div>
    )
}