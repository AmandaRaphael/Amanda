import React from 'react'
import SectionBlack from './pageloadingBlocks/SectionBlack'
import SectionPink from './pageloadingBlocks/SectionPink'
import SectionMain from './SectionMain'

const Main = () => {
    return (
        <main>
            <SectionPink/>
            <SectionBlack />
            <SectionMain/>
        </main>
    )
}

export default Main
