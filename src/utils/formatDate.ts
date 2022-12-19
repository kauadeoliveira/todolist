export function formatDate (date: string): string {
    const dateArray = date.split('-')
    const taskDate: number[] = dateArray.map(num => Number(num))
    const year: number = taskDate[0];
    const month: number = taskDate[1] - 1;
    const day: number = taskDate[2];
    const format = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`
    const dayName = new Date(year, month, day).toString().split(' ')[0]
    return `${dayName} • ${format}`
} 