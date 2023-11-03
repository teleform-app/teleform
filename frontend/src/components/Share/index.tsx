import { FC, useState } from 'react'
import { FormShareWrapper } from './styles.tsx'
import { useIsMobile } from '../../utils/isMobile.ts'

interface ShareProps {
    title: string
    id: string
}

export const Share: FC<ShareProps> = ({ id }) => {
    const [isCopied, setIsCopied] = useState(false)
    const isMobile = useIsMobile()

    const isSharingAvailable = isMobile && window.navigator?.share !== undefined

    const url = `https://t.me/teleformappbot/form?startapp=${id}`

    const share = () => {
        window.navigator.share({
            title: url,
            text: url,
            url,
        })
    }
    const copy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url)
        } else {
            const textArea = document.createElement('textarea')
            textArea.value = url
            document.body.appendChild(textArea)
            textArea.focus()
            textArea.select()
            document.execCommand('copy')
            document.body.removeChild(textArea)
        }

        setIsCopied(true)
    }

    return isSharingAvailable ? (
        <FormShareWrapper onClick={share}>Share this form</FormShareWrapper>
    ) : (
        <FormShareWrapper onClick={copy}>
            {isCopied ? 'Link copied' : 'Copy link'}
        </FormShareWrapper>
    )
}
