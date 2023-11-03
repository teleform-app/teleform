import { FC } from 'react'
import { SwitchButton, SwitchWrapper } from './styles.tsx'

interface SwitchProps {
    checked: boolean
    onChange?: (isChecked: boolean) => void
}

export const Switch: FC<SwitchProps> = ({ onChange, checked }) => {
    return (
        <SwitchWrapper
            checked={checked}
            onClick={() => {
                onChange?.(!checked)
            }}
        >
            <SwitchButton checked={checked} />
        </SwitchWrapper>
    )
}
