import { COLOR, FONT_SIZE, FONT_WEIGHT } from "../constants";

export default function CartCard({ cardTitle, cardTime, mgBottom }) {
    return(
        <div style={{width: '100%', backgroundColor: COLOR.card_bg, border: `1px solid ${COLOR.border}`, maxWidth: '187px', borderRadius: '10px', padding: '2rem 1rem', marginBottom: mgBottom}}>
            <p style={{color: COLOR.text_grey, fontSize: FONT_SIZE.px14, marginBottom: '.6rem'}}>{cardTitle}</p>
            <p style={{color: COLOR.text_dark, fontSize: FONT_SIZE.px20, fontWeight: FONT_WEIGHT.semi_bold}}>{cardTime}</p>
        </div>
    )
}