import { useState } from "react"
import { COLOR, FONT_SIZE } from "../constants"

export default function ProfileNav() {
    const [question, setQuestion] = useState('')

    return(
        <div style={{padding: '1rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${COLOR.border}`}}>
            <div style={{minHeight: '54px', width: '100%', maxWidth: '441px', backgroundColor: COLOR.input, borderRadius: '10px', position: 'relative'}}>
                <input 
                    type='text' 
                    id='question' 
                    value={question} 
                    placeholder="Ask a question" 
                    onChange={(e) => setQuestion(e.target.value)} 
                    style={{
                        width: '90%',
                        height: '54px',
                        padding: '0 1rem',
                        outline: 0,
                        border: 0,
                        backgroundColor: 'transparent',
                        fontFamily: 'Gelion Regular',
                        fontSize: FONT_SIZE.px16
                    }}
                />
                <div style={{position: 'absolute', top: '50%', transform: 'translateY(-40%)', right: '1rem', cursor: 'pointer'}}>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z" stroke="#A3A3C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.375 18.375L14.5687 14.5687" stroke="#A3A3C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', width: '175px', height: '54px', border: `1px solid ${COLOR.border}`, borderRadius: '8px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{marginRight: '.5rem', display: 'flex', alignItems: 'center'}}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.235 3.48071C11.102 2.36502 10.1525 1.5 9.00098 1.5C7.84947 1.5 6.9 2.36502 6.76693 3.48071C4.88993 4.3316 3.58431 6.22166 3.58431 8.41667V12.1799L2.33144 14.662C2.07964 15.1609 2.4422 15.75 3.00098 15.75H6.87901C7.18788 16.6239 8.02131 17.25 9.00098 17.25C9.98064 17.25 10.8141 16.6239 11.1229 15.75H15.001C15.5598 15.75 15.9223 15.1609 15.6705 14.662L14.4176 12.1799V8.41667C14.4176 6.22166 13.112 4.3316 11.235 3.48071ZM12.9981 12.6964L13.7823 14.25H4.21967L5.00385 12.6964C5.05675 12.5916 5.08431 12.4759 5.08431 12.3585V8.41667C5.08431 6.25355 6.83786 4.5 9.00098 4.5C11.1641 4.5 12.9176 6.25355 12.9176 8.41667V12.3585C12.9176 12.4759 12.9452 12.5916 12.9981 12.6964Z" fill="#A3A3C2"/>
                        </svg>
                    </div>
                    <div style={{backgroundColor: COLOR.notification, width: '16px', height: '16px', fontSize: FONT_SIZE.px12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: COLOR.text_white, borderRadius: '4px'}}>
                        3
                    </div>
                </div>
                <div style={{border: `1px solid ${COLOR.border}`, height: '24px'}}></div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{marginRight: '10px', width: '32px', height: '32px', border: `1px solid ${COLOR.purple}`, borderRadius: '50%'}}></div>
                    <div>
                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 3.05719L6.86193 0.195262C7.12228 -0.0650874 7.54439 -0.0650874 7.80474 0.195262C8.06509 0.455612 8.06509 0.877722 7.80474 1.13807L4.4714 4.4714C4.21105 4.73175 3.78895 4.73175 3.5286 4.4714L0.195262 1.13807C-0.0650874 0.877722 -0.0650874 0.455612 0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L4 3.05719Z" fill="#696D8C"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}