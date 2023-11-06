export const enum Status {
    saved = 'saved',
    submitted = 'submitted',
    exported = 'exported',
}

export type StatusType = keyof typeof Status
