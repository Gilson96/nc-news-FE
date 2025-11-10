export const dateOnlyFormat = (created_at: string) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Set", "Oct", "Nov", "Dec"]
    const dateOnly = new Date(created_at)
    const day = dateOnly.getDate()
    const month = dateOnly.getMonth()
    const year = dateOnly.getFullYear().toString()


    return `${day} ${months[month]} ${year} `
}