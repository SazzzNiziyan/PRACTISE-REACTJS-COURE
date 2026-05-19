import React from 'react'
import style from './bookmark.module.css'
import {Bookmark} from "lucide-react";

const bookmark = () => {
    return (
        <div className={style.save}>
            <p>Save&nbsp;</p>
            <Bookmark size={18} color="#595959" strokeWidth={1} padding={0} />
        </div>
    )
}

export default bookmark