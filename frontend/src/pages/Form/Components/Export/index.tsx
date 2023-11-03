import {
    ExportTitle,
    ExportWrapper,
} from 'pages/Form/Components/Export/styles.tsx'
import { FC } from 'react'

interface ExportProps {
    onClick: () => void
}
export const Export: FC<ExportProps> = ({ onClick }) => {
    return (
        <ExportWrapper onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
            >
                <g clip-path="url(#clip0_256_4094)">
                    <path
                        d="M0.40967 6.26623H20.6883V4.86699H0.40967V6.26623ZM0.40967 11.1418H20.6883V9.74263H0.40967V11.1418ZM9.78753 15.609H11.2214V0.399844H9.78753V15.609ZM2.79645 16.0001H18.2036C20.0738 16.0001 21 15.1049 21 13.3145V2.69425C21 0.903914 20.0738 6.10352e-05 18.2036 6.10352e-05H2.79645C0.935116 6.10352e-05 0 0.903914 0 2.69425V13.3145C0 15.1049 0.935116 16.0001 2.79645 16.0001ZM2.81426 14.6008C1.92367 14.6008 1.43385 14.1402 1.43385 13.2363V2.77247C1.43385 1.86861 1.92367 1.39931 2.81426 1.39931H18.1858C19.0675 1.39931 19.5662 1.86861 19.5662 2.77247V13.2363C19.5662 14.1402 19.0675 14.6008 18.1858 14.6008H2.81426Z"
                        style={{
                            fill: 'var(--accent)',
                        }}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_256_4094">
                        <rect width="21" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <ExportTitle>Export</ExportTitle>
        </ExportWrapper>
    )
}
