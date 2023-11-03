import { useEffect, useState } from 'react'

export const isUserAgentMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobileDevice =
        /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent)
    return isMobileDevice
}

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const isMobileDevice = isUserAgentMobile()
        setIsMobile(isMobileDevice)
    }, [])

    return isMobile
}
