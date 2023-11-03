import { FC } from 'react'
import { AddIconWrapper, AddTitle, AddWrapper } from './styles.tsx'
import { PlusIcon } from './plus.tsx'

interface AddProps {
    title: string
    onClick?: () => void
}

export const Add: FC<AddProps> = ({ title, onClick }) => {
    return (
        <AddWrapper onClick={onClick}>
            <AddIconWrapper>
                <PlusIcon />
            </AddIconWrapper>
            <AddTitle>{title}</AddTitle>
        </AddWrapper>
    )
}
