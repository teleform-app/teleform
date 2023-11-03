import { NewFormIconWrapper } from 'pages/FormList/Components/NewForm/styles.tsx'

export const NewFormCloseIcon = ({ ...args }) => {
    return (
        <NewFormIconWrapper {...args}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15.4859 15.4956"
                width="15"
                height="15"
            >
                <path
                    style={{
                        fill: 'var(--tg-theme-hint-color)',
                    }}
                    d="M.252699 15.2429c.341797.3321.908201.3321 1.240231 0l6.25-6.24997 6.24997 6.24997c.3321.3321.9082.3418 1.2403 0 .332-.3418.332-.8984 0-1.2304L8.98317 7.7527l6.25003-6.25c.332-.33203.3418-.898439 0-1.23047-.3418-.3417968-.9082-.3417968-1.2403 0l-6.24997 6.25-6.25-6.25c-.33203-.3417968-.9082-.3515624-1.240231 0-.3320314.341797-.3320314.89844 0 1.23047l6.250001 6.25-6.250001 6.2598c-.3320314.332-.3417971.8984 0 1.2304Z"
                />
            </svg>
        </NewFormIconWrapper>
    )
}
